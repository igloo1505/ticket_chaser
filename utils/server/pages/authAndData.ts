"use server"
import { protectedRoleType, protectedRoles } from "#/types/AuthTypes"
import { User } from "@prisma/client"
import { cookies } from 'next/headers'
import { validate, validateRoleToken } from "../tokens"
import { prisma } from "#/db/db"
import { CookieJarType, tokenMap } from "../syncrhonousToken"

interface ValidateSuccess {
    valid: true,
    user: User & any
}

interface ValidateFail {
    valid: false,
    user: null
}



export const validateOrRedirect = async (protect?: protectedRoleType[]): Promise<ValidateFail | ValidateSuccess> => {
    const _f = {
        valid: false,
        user: null
    }
    const cookieJar = cookies()
    const isValid = await validate(cookieJar)
    if (!isValid) return _f
    const user = await prisma.user.findFirst({
        where: {
            id: parseInt(isValid)
        }
    })
    if (!user) return _f
    if (protectedRoles.indexOf(user.role as protectedRoleType) >= 0) {
        const validRole = await validateRoleToken(cookieJar, user.role as protectedRoleType)
        if (validRole) {
            return {
                valid: true,
                user: {
                    ...user,
                    password: undefined
                }
            }
        }
    }
    return _f
}

export async function getUserInServerComponent() {
    'use server'
    const cookiejar = cookies()
    const isValid = await validate(cookiejar)
    if (!isValid) {
        // HACK: clearAuthTokens dupilicated here to avoid import and export conflicts with cookie server function
        cookiejar.delete(tokenMap.auth)
        cookiejar.delete(tokenMap.userId)
        cookiejar.delete(tokenMap.access.ADMIN)
        cookiejar.delete(tokenMap.access.EMPLOYEE)
        return undefined
    }
    const user = await prisma.user.findFirst({
        where: {
            id: parseInt(isValid)
        }
    })
    console.log("user: ", user)
    return { ...user, password: undefined } || undefined
}
