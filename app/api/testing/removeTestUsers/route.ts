import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { AppError } from "#/classes/ErrorHandling";
import { getCorsHeaders, optionsMethodResponse } from "#/utils/server/cors";
import { removeUserAndRelatedRecords } from "#/utils/server/relatedRecords";


interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .get(async (req, ctx) => {
        console.log("Removing test users...")
        try {
            const users = await prisma.user.findMany({
                where: {
                    email: {
                        startsWith: "testing_"
                    }
                }
            })
            console.log("users: ", users)
            if (!users) {
                return new NextResponse(JSON.stringify({
                    success: false
                }), getCorsHeaders(req, 200));
            }
            for (var i = 0; i < users.length; i++) {
                await removeUserAndRelatedRecords({ user: users[i] })
            }
            return new NextResponse(JSON.stringify({
                success: true
            }), getCorsHeaders(req, 200));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }), getCorsHeaders(req, 500))
        }
    })


export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

export const OPTIONS = optionsMethodResponse
