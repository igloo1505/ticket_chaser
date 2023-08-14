import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { AppError } from "#/classes/ErrorHandling";
import { getCorsHeaders, optionsMethodResponse } from "#/utils/server/cors";


interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .get(async (req, ctx) => {
        try {
            const tags = await prisma.tag.findMany({})
            let res = new NextResponse(JSON.stringify({ tags: tags || [] }), getCorsHeaders(req, 200));
            return res
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }), getCorsHeaders(req, 500))
        }
    })


export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

export const OPTIONS = optionsMethodResponse
