"use client"
import { authSuccess, setAuthenticated } from '#/state/slices/auth'
import store from '#/state/store'
import { RetrievedUserData } from '#/types/AuthTypes'
import { useEffect } from 'react'



interface AuthObserverProps {
    user?: RetrievedUserData | null | undefined
    isAuthenticated?: boolean
}



const AuthStateObserver = ({ user, isAuthenticated }: AuthObserverProps) => {
    useEffect(() => {
        if (user) {
            store.dispatch(authSuccess(user))
        }
        if (isAuthenticated && !user) {
            store.dispatch(setAuthenticated(isAuthenticated))
        }
    }, [user])
    return null
}


AuthStateObserver.displayName = "AuthObserver"

export default AuthStateObserver
