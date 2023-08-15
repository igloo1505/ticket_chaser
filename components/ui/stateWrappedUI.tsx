"use client"
import React from 'react'
import Navbar from '../navigation/navbar';
import ReduxProvider from '../utility/reduxProvider';
import ToastList from './toastList';
import Drawer from '../navigation/drawer';
import CombinedModals from './modals/CombinedModals';
import AuthStateObserver from './AuthObserver';
import { RootState } from '#/state/store';



const StateWrappedUI = ({ isAuthenticated, user, shouldClearCookies }: { isAuthenticated: boolean, user?: RootState['auth']['user'] | undefined, shouldClearCookies: boolean }) => {
    return (
        <ReduxProvider>
            <Navbar authed={isAuthenticated} email={user?.email} />
            <Drawer authenticated={isAuthenticated} email={user?.email} />
            <ToastList />
            <CombinedModals />
            <AuthStateObserver shouldClearCookies={shouldClearCookies} isAuthenticated={isAuthenticated} user={user} />
        </ReduxProvider>
    )
}


StateWrappedUI.displayName = "StateWrappedUI"


export default StateWrappedUI;
