import type { ROLE } from "@prisma/client"

export type AccessType = ROLE | "AUTHENTICATED" | "DEVELOPMENT" | "UNKNOWN" | false

interface LegalName {
    first: string
    middle?: string | null
    last: string
}

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

export interface CreateUserReqBody {
    email: string
    password: string
    name: LegalName
}


export type protectedRoleType = Extract<ROLE, "ADMIN" | "EMPLOYEE">
export const protectedRoles: protectedRoleType[] = ["ADMIN", "EMPLOYEE"]
