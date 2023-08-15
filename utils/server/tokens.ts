'use server'
import * as jose from 'jose'
import { NextRequest, NextResponse } from 'next/server'
import { protectedRoleType } from "#/types/AuthTypes"
import { ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies'
import { CookieJarType, alg, audience, clearAuthTokens, issuer, tokenMap } from './syncrhonousToken'
const secret = new TextEncoder().encode(process.env.JWT_SECRET!)




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
    const remember = cookies.get(tokenMap.rememberMe)?.value === "true" || rememberMe || false
    const token = await getAccessToken(tokenMap.userId, userId, remember)
    cookies.set(tokenMap.auth, token)
    cookies.set(tokenMap.userId, `${userId}`)
    if (rememberMe) {
        cookies.set(tokenMap.rememberMe, 'true')
    }
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
    const userId = cookies.get(tokenMap.userId)?.value
    if (userId) {
        await assignUserToken(cookies, userId, cookies.get(tokenMap.rememberMe)?.value === "true" || false)
    }
    await assignRoleAccessToken(cookies, role)
    return true
}

export const validate = async (cookies: CookieJarType, noAssign: boolean = false): Promise<false | string> => {
    "use server"
    let authToken = cookies.get(tokenMap.auth)?.value
    let userToken = cookies.get(tokenMap.userId)?.value
    if (!authToken || !userToken) {
        return false
    }
    let authId = await decryptToken(authToken)
    if (!authId || !authId[tokenMap.userId]) {
        return false
    }
    let isValid = `${authId[tokenMap.userId]}` === `${userToken}` ? userToken : false
    if (isValid && !noAssign) {
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
    clearAuthTokens(res.cookies)
    return {
        userId: null,
        res: res,
        valid: false
    }

}
