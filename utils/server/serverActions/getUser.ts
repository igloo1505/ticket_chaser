import { prisma } from "#/db/db"
import { cookies } from "next/headers"
import { tokenMap } from "../syncrhonousToken"
import { validate } from "../tokens"
import { RetrievedUserData } from "#/types/AuthTypes";
import { transformUserForClientState } from "../transformUserForClientState";



export const getUserInServerComponent = async (): Promise<RetrievedUserData | "shouldRemoveCookies" | undefined | ReturnType<typeof transformUserForClientState>> => {
    const cookiejar = cookies()
    const isValid = await validate(cookiejar, true)
    if (isValid === false && Boolean(
        cookiejar.has(tokenMap.auth) ||
        cookiejar.has(tokenMap.userId) ||
        cookiejar.has(tokenMap.access.ADMIN) ||
        cookiejar.has(tokenMap.access.EMPLOYEE)
    )) {
        // HACK: clearAuthTokens dupilicated here to avoid import and export conflicts with cookie server function
        return "shouldRemoveCookies"
    }
    if (isValid !== false) {
        const user = await prisma.user.findFirst({
            where: {
                id: parseInt(isValid)
            },
            include: {
                personalDetails: {
                    include: {
                        location: true
                    }
                },
            }
        })
        if (!user) return undefined
        const clientSideUser = transformUserForClientState(user)
        console.log("clientSideUser: ", clientSideUser)
        return clientSideUser
    }
    return undefined
}
