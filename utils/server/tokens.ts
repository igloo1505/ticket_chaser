
import * as jose from 'jose'
import { NextRequest, NextResponse } from 'next/server'
export const issuer = 'pPlatform:issuer'
export const audience = 'pPlatform:audience'
export const alg = 'HS256'
import {protectedRoleType} from "#/types/AuthTypes"
const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

const tokenMap: {
    referer: string,
    userId: string,
    auth: string,
    rememberMe: string,
    access: {[k in protectedRoleType]: string}
} = {
    referer: "referer",
    userId: "user",
    auth: "auth",
    rememberMe: "rememberMe",
    access: {
    ADMIN: "adminAccess",
    EMPLOYEE: "employeeAccess"
    }
}


const getAccessToken = async (key: string, val: number | string, rememberMe: boolean = false) => {
    const jwt = await new jose.SignJWT({ [key]: val })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer(issuer)
        .setAudience(audience)
        .setExpirationTime(rememberMe ? '7d' : '2h')
        .sign(secret)
    return jwt
}


export const setRememberMeCookie = (res: NextResponse, rememberMe: boolean) => {
    if (rememberMe) {
        res.cookies.set(tokenMap.rememberMe, "true")
    }

    if (!rememberMe) {
        res.cookies.delete(tokenMap.auth)
    }
    return res
}

export const clearAuthTokens = (res: NextResponse) => {
    res.cookies.delete(tokenMap.auth)
    res.cookies.delete(tokenMap.userId)
    res.cookies.delete(tokenMap.access.ADMIN)
    res.cookies.delete(tokenMap.access.EMPLOYEE)
    return res
}

export const assignRoleAccessToken = async (res: NextResponse, role: protectedRoleType, rememberMe?: boolean) => {
    const envvar = process.env[`${role}_VALIDATION`]
    if (!envvar) {
        console.error("No admin access token found in the environment")
        return
    }
    const token = await getAccessToken(tokenMap.access[role], envvar, Boolean(rememberMe))
    res.cookies.set(tokenMap.access[role], token)
}

export const assignUserToken = async (req: NextRequest, res: NextResponse, userId: number | string) => {
    const rememberMe = req.cookies.get(tokenMap.rememberMe)?.value || false
    const token = await getAccessToken(tokenMap.userId, userId, rememberMe === "true")
    res.cookies.set(tokenMap.auth, token)
    res.cookies.set(tokenMap.userId, `${userId}`)
    return res
}


export const assignRefererToken = async (res: NextResponse, refererId: number | string) => {
    const token = await getAccessToken(tokenMap.referer, refererId)
    res.cookies.set(tokenMap.referer, token)
    return res
}



export const decryptToken = async (authToken: string) => {
    try {

        const { payload } = await jose.jwtVerify(authToken, secret, {
            issuer: issuer,
            audience: audience,
        })
        return payload
    } catch {
        return false
    }
}

export const validateRoleToken = async (req: NextRequest, role: protectedRoleType) => {
    let tokenKey = tokenMap.access[role]
    if(!tokenKey) {
        console.log("An error occurred while validating access tokens.")
        return 
    }
    let adminToken = req.cookies.get(tokenKey)?.value
    if (!adminToken) {
        return false
    }
    if (adminToken) {
        let adminAccess = await decryptToken(adminToken)
        if (!adminAccess || adminAccess[tokenKey] !== process.env.ADMIN_VALIDATION) {
            return false
        }
    }
    return true
}

export const validate = async (req: NextRequest): Promise<false | string> => {
    let authToken = req.cookies.get(tokenMap.auth)?.value
    let userToken = req.cookies.get(tokenMap.userId)?.value
    if (!authToken || !userToken) {
        return false
    }
    let authId = await decryptToken(authToken)
    if (!authId || !authId[tokenMap.userId]) {
        return false
    }
    return authId[tokenMap.userId] === userToken ? userToken : false
}


export const validateAndRefresh = async (req: NextRequest, res: NextResponse): Promise<{ userId: string | null | undefined, res: NextResponse, valid: boolean }> => {
    const validId = await validate(req)
    if (validId) {
        let r = await assignUserToken(req, res, validId)
        return {
            userId: validId,
            res: r,
            valid: true
        }
    }
    let _r = clearAuthTokens(res)
    return {
        userId: null,
        res: _r,
        valid: false
    }

}
