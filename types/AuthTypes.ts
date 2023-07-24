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
