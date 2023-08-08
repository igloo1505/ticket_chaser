import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { AppError } from "#/classes/ErrorHandling";
import { getCorsHeaders, optionsMethodResponse } from "#/utils/server/cors";
import { validate, validateAndRefresh, validateRoleToken } from "#/utils/server/tokens";
import { clearAuthTokens } from "#/utils/server/syncrhonousToken";


interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router

    .post(async (req, ctx) => {
        try {
            const isValid = await validateRoleToken(req.cookies, "ADMIN")
            if (!isValid) {
                const err = new AppError({
                    statusCode: 402, consoleError: {
                        msg: "Unauthorized",
                        restricted: ["ADMIN"]
                    }
                }).genResponse(null, req)
                clearAuthTokens(err.cookies)
                return err
            }
            const { data } = await req.json()
            const team = await prisma.team.create({
                data: data
            })
            let res = new NextResponse(JSON.stringify({
                success: true,
                team: team
            }), getCorsHeaders(req, 200));
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
