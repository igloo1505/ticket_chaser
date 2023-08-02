import type { LegalName, Location, ROLE, User } from "@prisma/client"

export type ToastErrorTypes = "unauthenticated" | "tokenExpired" | "mustBeVerified" | "faqNotFound" | "emailExists" | "userNotFound" | "credentialsInvalid" | "passwordsDontMatch" | "unauthorized"


export type AccessType = ROLE | "AUTHENTICATED" | "DEVELOPMENT" | "UNKNOWN" | false


export interface RetrievedUserData extends Omit<User, "password"> {
    password: undefined,
    personalDetails: {
        location: Location,
        name: LegalName
    }
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
