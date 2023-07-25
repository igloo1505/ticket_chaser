import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// TODO: This needs to be handled immediately...
import { assignRefererToken, clearAuthTokens, validate, validateRoleToken } from "./utils/server/tokens";
import { getCorsHeaders } from "./utils/server/cors";
import { protectedRoleType, protectedRoles } from "./types/AuthTypes";

interface ProtectedRouteType {
    path: string
    role: protectedRoleType
}

const protectedRoutes: ProtectedRouteType[] = [
    { path: '/admin/legit/', role: "ADMIN" },
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
    let valid = await validate(req)
    for (var i = 0; i < protectedRoutes.length; i++) {
        if (req.nextUrl.pathname.startsWith(protectedRoutes[i].path)) {
            if (!valid) {
                let response = NextResponse.redirect(new URL('/', req.url))
                let res = clearAuthTokens(response)
                return res
            }
            if(protectedRoles.indexOf(protectedRoutes[i].role) >= 0){
                let validAdmin = await validateRoleToken(req, protectedRoutes[i].role)
                if(!validAdmin){
                let response = NextResponse.redirect(new URL('/admin', req.url))
                let res = clearAuthTokens(response)
                return res
                }
            }
        }
    }
    return
}
