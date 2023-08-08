"use client"
import React from 'react'
import Navbar from '../navigation/navbar';
import ReduxProvider from '../utility/reduxProvider';
import ToastList from './toastList';
import Drawer from '../navigation/drawer';
import CombinedModals from './modals/CombinedModals';
import AuthStateObserver from './AuthObserver';


const StateWrappedUI = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    return (
        <ReduxProvider>
            <Navbar />
            <Drawer />
            <ToastList />
            <CombinedModals />
            <AuthStateObserver isAuthenticated={isAuthenticated} />
        </ReduxProvider>
    )
}


StateWrappedUI.displayName = "StateWrappedUI"


export default StateWrappedUI;
