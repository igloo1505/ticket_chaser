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

    .post(async (req, ctx) => {
        try {
            const { league } = await req.json()
            const teams = await prisma.team.findMany({
                ...(league && {
                    where: {
                        league: league
                    }
                })
            })
            let res = new NextResponse(JSON.stringify({ teams: teams, success: true }), getCorsHeaders(req, 200));
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
