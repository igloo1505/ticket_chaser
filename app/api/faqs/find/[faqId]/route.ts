import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { AppError } from "#/classes/ErrorHandling";
import { getCorsHeaders, optionsMethodResponse } from "#/utils/server/cors";


interface RequestContext {
    params: {
        faqId: string
    }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router

    .get(async (req, ctx) => {
        try {
            if (!ctx.params.faqId) {
                let err = new AppError({
                    consoleError: {
                        msg: "No id found in query.",
                        restricted: ["ADMIN", "EMPLOYEE"]
                    },
                    statusCode: 500,
                    currentRole: "UNKNOWN"
                })
                let res = err.genResponse({}, req)
                return res
            }

            const faq = await prisma.faq.findFirst({
                where: {
                    id: parseInt(ctx.params.faqId)
                }
            })

            if (!faq) {
                let notFoundError = new AppError({
                    toastErrorType: "faqNotFound",
                    statusCode: 500,
                    currentRole: "UNKNOWN"
                })
                let res = notFoundError.genResponse({}, req)
                return res
            }

            return new NextResponse(JSON.stringify({}), getCorsHeaders(req, 200));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }), getCorsHeaders(req, 500))
        }
    })


export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

export const OPTIONS = optionsMethodResponse
