import { transformUserForClientState } from "#/utils/server/transformUserForClientState"
import { Prisma, type LegalName, type Location, type ROLE, type User } from "@prisma/client"
import { UserArgs } from "@prisma/client/runtime/library"

export type ToastErrorTypes = "unauthenticated" | "tokenExpired" | "mustBeVerified" | "faqNotFound" | "emailExists" | "userNotFound" | "credentialsInvalid" | "passwordsDontMatch" | "unauthorized"


export type AccessType = ROLE | "AUTHENTICATED" | "DEVELOPMENT" | "UNKNOWN" | false


export interface RetrievedUser extends Omit<UserWithAll, "password"> {
    password?: undefined
}

export type RetrievedUserData = RetrievedUser | User | ReturnType<typeof transformUserForClientState>

const userWithPersonalDetails = Prisma.validator<Prisma.UserArgs>()({
    include: {
        personalDetails: {
            include: {
                location: true
            }
        },
    }
})

export type UserWithPersonalDetails = Prisma.UserGetPayload<typeof userWithPersonalDetails>


const userWithAll = Prisma.validator<Prisma.UserArgs>()({
    include: {
        personalDetails: {
            include: {
                name: true,
                location: true
            }
        },
        paymentAccount: true,
        purchaseHistory: true,
    },
})

export type UserWithAll = Prisma.UserGetPayload<typeof userWithAll>


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
