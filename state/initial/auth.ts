import { RetrievedUserData } from "#/types/AuthTypes"
import { User } from "@prisma/client"

export interface InitialAuthStateType {
    authenticated: boolean
    user?: RetrievedUserData | User
}


export const initialUserAuthState: InitialAuthStateType['user'] = undefined

const authState: InitialAuthStateType = {
    authenticated: false,
    user: initialUserAuthState
}


export default authState

