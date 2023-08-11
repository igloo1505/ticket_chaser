import { RetrievedUserData } from "#/types/AuthTypes"

export interface InitialAuthStateType {
    authenticated: boolean
    user?: RetrievedUserData
}


export const initialUserAuthState: InitialAuthStateType['user'] = undefined

const authState: InitialAuthStateType = {
    authenticated: false,
    user: initialUserAuthState
}


export default authState

