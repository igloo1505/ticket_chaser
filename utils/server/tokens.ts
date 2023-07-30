
import * as jose from 'jose'
import { NextRequest, NextResponse } from 'next/server'
export const issuer = 'pPlatform:issuer'
export const audience = 'pPlatform:audience'
export const alg = 'HS256'
import { protectedRoleType } from "#/types/AuthTypes"
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { RequestCookies, ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies'
const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

type CookieJarType = RequestCookies | ReadonlyRequestCookies

export const tokenMap: {
    referer: string,
    userId: string,
    auth: string,
    rememberMe: string,
    access: { [k in protectedRoleType]: string }
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

export const assignRoleAccessToken = async (cookies: CookieJarType | ResponseCookies, role: protectedRoleType, rememberMe?: boolean): Promise<CookieJarType | ResponseCookies> => {
    const envvar = process.env[`${role}_VALIDATION`]
    if (!envvar) {
        console.error("No admin access token found in the environment")
        return cookies
    }
    const token = await getAccessToken(tokenMap.access[role], envvar, Boolean(rememberMe))
    cookies.set(tokenMap.access[role], token)
    return cookies
}

export const assignUserToken = async (cookies: CookieJarType | ResponseCookies, userId: number | string, rememberMe?: boolean) => {
    const remember = cookies.get(tokenMap.rememberMe)?.value || rememberMe || false
    const token = await getAccessToken(tokenMap.userId, userId, Boolean(remember || remember === "true"))
    cookies.set(tokenMap.auth, token)
    cookies.set(tokenMap.userId, `${userId}`)
    return cookies
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

export const validateRoleToken = async (cookies: CookieJarType, role: protectedRoleType) => {
    let tokenKey = tokenMap.access[role]
    if (!tokenKey) {
        console.log("An error occurred while validating access tokens.")
        return
    }
    let adminToken = cookies.get(tokenKey)?.value
    if (!adminToken) {
        return false
    }
    if (adminToken) {
        let adminAccess = await decryptToken(adminToken)
        if (!adminAccess || adminAccess[tokenKey] !== process.env.ADMIN_VALIDATION) {
            return false
        }
    }
    await assignRoleAccessToken(cookies, role)
    return true
}

export const validate = async (cookies: CookieJarType): Promise<false | string> => {
    let authToken = cookies.get(tokenMap.auth)?.value
    let userToken = cookies.get(tokenMap.userId)?.value
    if (!authToken || !userToken) {
        return false
    }
    let authId = await decryptToken(authToken)
    if (!authId || !authId[tokenMap.userId]) {
        return false
    }
    let isValid = authId[tokenMap.userId] === userToken ? userToken : false
    if (isValid) {
        await assignUserToken(cookies, userToken, Boolean(cookies.get(tokenMap.rememberMe)?.value))
    }
    return isValid
}


export const validateAndRefresh = async (req: NextRequest, res: NextResponse): Promise<{ userId: string | null | undefined, res: NextResponse, valid: boolean }> => {
    const validId = await validate(req.cookies)
    if (validId) {
        let r = await assignUserToken(res.cookies, validId)
        // WARNING: Same issue as in authenticate route. Will likely work, but need to double check the docs when on wifi again.
        return {
            userId: validId,
            res: res,
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
