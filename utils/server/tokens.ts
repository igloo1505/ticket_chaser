
import * as jose from 'jose'
import { NextRequest, NextResponse } from 'next/server'
export const issuer = 'pPlatform:issuer'
export const audience = 'pPlatform:audience'
export const alg = 'HS256'
const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

const tokenMap = {
    referer: "referer",
    userId: "user",
    auth: "auth",
    rememberMe: "rememberMe"
}


const getUserToken = async (key: string, val: number | string, rememberMe: boolean = false) => {
    const jwt = await new jose.SignJWT({ [key]: val })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer(issuer)
        .setAudience(audience)
        .setExpirationTime(rememberMe ? '7d' : '2h')
        .sign(secret)
    return jwt
}

export const clearAuthTokens = (req: NextRequest, res: NextResponse) => {
    res.cookies.delete("auth")
    res.cookies.delete("user")
    return res
}

export const assignUserToken = async (req: NextRequest, res: NextResponse, userId: number | string) => {
    const rememberMe = req.cookies.get(tokenMap.rememberMe)?.value || false
    const token = await getUserToken(tokenMap.userId, userId, rememberMe === "true")
    res.cookies.set(tokenMap.auth, token)
    res.cookies.set(tokenMap.userId, `${userId}`)
    return res
}


export const assignRefererToken = async (req: NextRequest, res: NextResponse, refererId: number | string) => {
    const token = await getUserToken(tokenMap.referer, refererId)
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

export const validate = async (req: NextRequest): Promise<false | string> => {
    let authToken = req.cookies.get(tokenMap.auth)?.value
    let userToken = req.cookies.get(tokenMap.userId)?.value
    if(!authToken || !userToken){
        return false
    }
    let authId = await decryptToken(authToken)
    if(!authId || !authId[tokenMap.userId]){
        return false
    }
    return authId[tokenMap.userId] === userToken ? userToken : false
}


export const validateAndRefresh = async (req: NextRequest, res: NextResponse): Promise<{userId: string, res: NextResponse} | false> => {
    const validId = await validate(req)
    if (validId){
        let r = await assignUserToken(req, res, validId)
        return {
            userId: validId,
            res: r
        }
    }
    return false
    
}
