'use server';
import { prisma } from "#/db/db"
import { cookies } from "next/headers"
import { tokenMap } from "../syncrhonousToken"
import { validate } from "../tokens"
import { cache } from 'react'
import { RetrievedUserData } from "#/types/AuthTypes";



export const getUserInServerComponent = async (): Promise<RetrievedUserData | "shouldRemoveCookies" | undefined> => {
    const cookiejar = cookies()
    const isValid = await validate(cookiejar)
    console.log("isValid: ", isValid)
    if (!isValid && Boolean(
        cookiejar.has(tokenMap.auth) ||
        cookiejar.has(tokenMap.userId) ||
        cookiejar.has(tokenMap.access.ADMIN) ||
        cookiejar.has(tokenMap.access.EMPLOYEE)
    )) {
        // HACK: clearAuthTokens dupilicated here to avoid import and export conflicts with cookie server function
        return "shouldRemoveCookies"
    }
    if (isValid) {

        const user = await prisma.user.findFirst({
            where: {
                id: parseInt(isValid)
            }
        })
        console.log("user: ", user)
        return { ...user, password: undefined } as RetrievedUserData || undefined
    }
    return undefined
}
