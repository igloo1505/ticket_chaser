import { protectedRoleType } from "#/types/AuthTypes";
import { RequestCookies, ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export type CookieJarType = RequestCookies | ReadonlyRequestCookies | ResponseCookies

export const issuer = 'pPlatform:issuer'
export const audience = 'pPlatform:audience'
export const alg = 'HS256'


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


export const clearAuthTokens = (cookies: CookieJarType) => {
    cookies.delete(tokenMap.auth)
    cookies.delete(tokenMap.userId)
    cookies.delete(tokenMap.access.ADMIN)
    cookies.delete(tokenMap.access.EMPLOYEE)
    return cookies
}
