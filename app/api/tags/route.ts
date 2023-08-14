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
    // middleware
    // .use(async (req, event, next) => {
    //   const start = Date.now();
    //   await next(); // call next in chain
    //   const end = Date.now();
    //   console.log(`Request took ${end - start}ms`);
    // })

    .get(async (req, ctx) => {
        try {
            const query = req.nextUrl.searchParams.get("q")
            const tags = await prisma.tag.findMany({
                where: {
                    value: {
                        search: query || "",
                        mode: "insensitive"
                    }
                }
            })
            let res = new NextResponse(JSON.stringify({tags: tags || []}), getCorsHeaders(req, 200));
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
