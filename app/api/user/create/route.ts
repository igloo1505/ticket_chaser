import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { AppError } from "#/classes/ErrorHandling";

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
        const {user} = await req.json()
            return new NextResponse(JSON.stringify({}));
        } catch(err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
