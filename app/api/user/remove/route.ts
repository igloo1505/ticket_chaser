import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { AppError } from "#/classes/ErrorHandling";
import { validate } from "#/utils/server/tokens";

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
            const { userId }: { userId: string | number } = await req.json()
            const isValid = await validate(req.cookies)
            if (isValid !== `${userId}`) {
                const err = new AppError({
                    consoleError: {
                        msg: "Invalid credentials. User could not be removed. If this was done intentionally, stop being a dick.",
                        restricted: ["DEVELOPMENT", "ADMIN"]
                    },
                    statusCode: 402
                })
                return err.genResponse(null, req)
            }

            const removed = await prisma.user.delete({
                where: {
                    id: parseInt(`${userId}`)
                }
            })
            console.log("removed: ", removed)

            return new NextResponse(JSON.stringify({
                success: true,
                userIdRemoved: userId
            }));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
