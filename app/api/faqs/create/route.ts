import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { AppError } from "#/classes/ErrorHandling";
import { getCorsHeaders, optionsMethodResponse } from "#/utils/server/cors";
import { FaqFormData } from "#/state/initial/adminState";
import { validateOrRedirect } from "#/utils/server/pages/authAndData";
import { validate, validateRoleToken } from "#/utils/server/tokens";
import { unAuthorizedError } from "#/utils/server/commonAppErrors";


interface RequestContext {
    // params: {
    //     id: string
    // }
}


const router = createEdgeRouter<NextRequest, RequestContext>();


router

    .post(async (req, ctx) => {
        try {
            const valid = await validate(req.cookies)
            if (!valid) {
                return unAuthorizedError(req)
            }
            const validAdmin = await validateRoleToken(req.cookies, "ADMIN")
            if (!validAdmin) {
                return unAuthorizedError(req)
            }
            const { data }: { data: Omit<FaqFormData, "id"> } = await req.json()
            const newFaq = await prisma.faq.create({
                data: data
            })
            let res = new NextResponse(JSON.stringify({ success: true, faq: newFaq }), getCorsHeaders(req, 200));
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
