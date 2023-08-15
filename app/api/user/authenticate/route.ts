import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { AppError } from "#/classes/ErrorHandling";
import { getCorsHeaders, optionsMethodResponse } from "#/utils/server/cors";
import { LoginBaseType, protectedRoleType, protectedRoles } from "#/types/AuthTypes";
import { comparePassword } from "#/utils/server/encryption";
import { assignRoleAccessToken, assignUserToken } from "#/utils/server/tokens";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
var colors = require('colors');

interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .post(async (req, ctx) => {
        try {
            const { user: userRequest }: { user: LoginBaseType } = await req.json()
            console.log("userRequest: ", userRequest)
            const user = await prisma.user.findFirst({
                where: {
                    email: userRequest.email
                }
            })
            if (!user) {
                console.log(`No user found for email address: ${userRequest.email}`.red)
                const err = new AppError({
                    toastErrorType: "userNotFound",
                    statusCode: 404
                })
                return err.genResponse(null, req)
            }
            const passMatch = await comparePassword(user.password, userRequest.password)
            console.log("passMatch: ", passMatch)
            if (!passMatch) {
                const err = new AppError({
                    toastErrorType: "credentialsInvalid",
                    statusCode: 402
                })
                console.log("err: ", err)
                return err.genResponse(null, req)
            }
            let res = new NextResponse(JSON.stringify({ user: { ...user, password: undefined }, success: true }), getCorsHeaders(req, 200))
            // WARNING: This might not work with this approach. Look at the docs when back on wifi.

            await assignUserToken(res.cookies, user.id, userRequest.rememberMe)
            if (protectedRoles.indexOf(user.role as protectedRoleType) !== -1) {
                await assignRoleAccessToken(res.cookies, user.role as protectedRoleType, userRequest.rememberMe)
            }
            return res
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }), getCorsHeaders(req, 500))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

export const OPTIONS = optionsMethodResponse
