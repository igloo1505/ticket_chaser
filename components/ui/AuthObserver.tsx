"use client"
import { clearAuthTokensRequest, handleAuthSuccess } from '#/actions/authActions'
import { authFail } from '#/state/slices/auth'
import store, { RootState } from '#/state/store'
import { RetrievedUserData } from '#/types/AuthTypes'
import { useEffect } from 'react'



interface AuthObserverProps {
    user?: RootState['auth']['user']
    isAuthenticated?: boolean
    shouldClearCookies: boolean
}



const AuthStateObserver = ({ user, isAuthenticated, shouldClearCookies }: AuthObserverProps) => {
    useEffect(() => {
        if (user && isAuthenticated) {
            handleAuthSuccess(user as RetrievedUserData)
        }
        if (!isAuthenticated || !user) {
            if (shouldClearCookies) {
                clearAuthTokensRequest()
            }
            store.dispatch(authFail())
        }
    }, [user, shouldClearCookies])
    return null
}


AuthStateObserver.displayName = "AuthObserver"

export default AuthStateObserver
