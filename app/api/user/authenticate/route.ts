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


interface RequestContext {
    // params: {
    //     id: string
    // }
}

const Router = createEdgeRouter<NextRequest, RequestContext>();


Router
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
                const err = new AppError({
                    toastErrorType: "userNotFound",
                    statusCode: 404
                })
                return err.genResponse(null, req)
            }
            const passMatch = await comparePassword(user.password, userRequest.password)
            if (!passMatch) {
                const err = new AppError({
                    toastErrorType: "credentialsInvalid",
                    statusCode: 402
                })
                return err.genResponse(null, req)
            }
            let res = new NextResponse(JSON.stringify({ user: { ...user, password: undefined }, success: true }), getCorsHeaders(req, 200))
            // WARNING: This might not work with this approach. Look at the docs when back on wifi.

            let cookies = await assignUserToken(res.cookies, user.id, userRequest.rememberMe)
            if (protectedRoles.indexOf(user.role as protectedRoleType) !== -1) {
                cookies = await assignRoleAccessToken(cookies, user.role as protectedRoleType, userRequest.rememberMe)
            }
            return res
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }), getCorsHeaders(req, 500))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return Router.run(request, ctx);
}

export const OPTIONS = optionsMethodResponse
export const router = Router
