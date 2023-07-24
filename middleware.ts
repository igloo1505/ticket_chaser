import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// TODO: This needs to be handled immediately...
import {  assignRefererToken, clearAuthTokens, validate } from "./utils/server/tokens";
import { getCorsHeaders } from "./utils/server/cors";

const protectedRoutes = [
    '/admin/legit/',
]


export async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith("/referer/")) {
        const refererId = req.nextUrl.pathname.split("/referer/")[1]
        if (refererId) {
            let res = NextResponse.rewrite(new URL("/signup", req.url), getCorsHeaders(req))
            res = await assignRefererToken(req, res, refererId)
            return res
        }
    }
    let valid = await validate(req)
    if (!valid) {
        for (var i = 0; i < protectedRoutes.length; i++) {
            if (req.nextUrl.pathname.startsWith(protectedRoutes[i])) {
                let response = NextResponse.redirect(new URL('/', req.url))
                let res = clearAuthTokens(req, response)
                return res
            }
        }
    }
    return
}
