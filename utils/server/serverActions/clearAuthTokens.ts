'use server'

import { cookies } from "next/headers"
import { tokenMap } from "../syncrhonousToken"

export async function clearAuthTokens() {
    const cookiejar = cookies()
    cookiejar.delete(tokenMap.auth)
    cookiejar.delete(tokenMap.userId)
    cookiejar.delete(tokenMap.access.ADMIN)
    cookiejar.delete(tokenMap.access.EMPLOYEE)
}
