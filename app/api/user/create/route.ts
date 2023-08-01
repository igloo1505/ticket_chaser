import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { Prisma } from "@prisma/client";
import { CreateUserRequestType } from "#/state/initial/forms/signup"
import { encryptPassword } from "#/utils/server/encryption"
import { getLocationValues } from "#/utils/server/location";
import { AppError } from "#/classes/ErrorHandling";
import { assignUserToken } from "#/utils/server/tokens";


interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router

    .post(async (req, ctx) => {
        try {
            const { user }: { user: CreateUserRequestType } = await req.json()
            console.log("userData: ", user)
            const encryptedPassword = await encryptPassword(user.password)
            const locationData = getLocationValues(user.location.state, user.location.city.name, user.location.city.id)
            console.log(locationData)
            if (!locationData.success) {
                const error = new AppError({ statusCode: 500, consoleError: { msg: "Invalid location data." } })
                const res = error.genResponse(null, req)
                return res
            }
            const newUserData: Prisma.UserCreateWithoutPaymentAccountInput = {
                email: user.email,
                password: encryptedPassword,
                personalDetails: {
                    create: {
                        name: {
                            create: {
                                ...user.name
                            }
                        },
                        location: {
                            create: {
                                ...locationData.data
                            }
                        },
                    }
                },
            }
            const newUser = await prisma.user.create({
                data: newUserData,
                include: {
                    personalDetails: {
                        include: {
                            location: true,
                            name: true
                        }
                    },
                }
            })
            let res = new NextResponse(JSON.stringify({ user: { ...newUser, password: undefined }, success: true }));
            await assignUserToken(res.cookies, newUser.id)
            return res
        } catch (err) {
            console.error(err)
            /// @ts-ignore
            if (err.code && err.code === "P2002") {
                /// @ts-ignore
                if (err.meta.target.indexOf("email") !== -1) {
                    const err = new AppError({ statusCode: 500, toastErrorType: "emailExists" })
                    return err.genResponse(null, req)
                }
            }
            return new NextResponse(JSON.stringify({ success: false }))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
