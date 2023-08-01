import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// TODO: This needs to be handled immediately...
import { getCorsHeaders } from "./utils/server/cors";
import { protectedRoleType, protectedRoles } from "./types/AuthTypes";
import { clearAuthTokens } from "./utils/server/syncrhonousToken";
import { assignRefererToken, validate, validateRoleToken } from "./utils/server/tokens";

interface ProtectedRouteType {
    path: string
    role: protectedRoleType
    redirect?: string
}

const protectedRoutes: ProtectedRouteType[] = [
    { path: '/admin/legit', role: "ADMIN", redirect: "/admin" },
]


export async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith("/referer/")) {
        const refererId = req.nextUrl.pathname.split("/referer/")[1]
        if (refererId) {
            let res = NextResponse.rewrite(new URL("/signup", req.url), getCorsHeaders(req))
            res = await assignRefererToken(res, refererId)
            return res
        }
    }
    let valid = await validate(req.cookies)
    for (var i = 0; i < protectedRoutes.length; i++) {
        if (req.nextUrl.pathname.startsWith(protectedRoutes[i].path)) {
            if (!valid) {
                let response = NextResponse.redirect(new URL(protectedRoutes[i].redirect || '/', req.url))
                clearAuthTokens(response.cookies)
                return response
            }
            if (protectedRoles.indexOf(protectedRoutes[i].role) >= 0) {
                let validAdmin = await validateRoleToken(req.cookies, protectedRoutes[i].role)
                console.log("validAdmin: ", validAdmin)
                if (!validAdmin) {
                    let response = NextResponse.redirect(new URL(protectedRoutes[i].redirect || '/admin', req.url))
                    clearAuthTokens(response.cookies)
                    return response
                }
            }
        }
    }
    return
}
