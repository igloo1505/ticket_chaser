"use client"
import { authSuccess } from '#/state/slices/auth'
import store from '#/state/store'
import { RetrievedUserData } from '#/types/AuthTypes'
import React, { useEffect } from 'react'



interface AuthObserverProps {
    user: RetrievedUserData | null | undefined
}

const AuthObserver = ({ user }: AuthObserverProps) => {
    useEffect(() => {
        if (user) {
            store.dispatch(authSuccess(user))
        }
    }, [user])
    return null
}


AuthObserver.displayName = "AuthObserver"


export default AuthObserver;
