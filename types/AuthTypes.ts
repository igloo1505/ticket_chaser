import type { ROLE } from "@prisma/client"

export type AccessType = ROLE | "AUTHENTICATED" | "DEVELOPMENT" | "UNKNOWN" | false


export interface RetrievedUserData {
    id: string | number
    username: string
    password: string
    email: string
    age: string | number
    role: ROLE
}


export interface RedirectType {
    redirectTo?: string
    statusCode: number
}


export interface LoginBaseType {
    email: string
    password: string
    rememberMe: boolean
}



export type protectedRoleType = Extract<ROLE, "ADMIN" | "EMPLOYEE">
export const protectedRoles: protectedRoleType[] = ["ADMIN", "EMPLOYEE"]
