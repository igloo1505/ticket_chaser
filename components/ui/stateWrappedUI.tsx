"use client"
import React from 'react'
import Navbar from '../navigation/navbar';
import ReduxProvider from '../utility/reduxProvider';
import ToastList from './toastList';
import Drawer from '../navigation/drawer';
import CombinedModals from './modals/CombinedModals';


const StateWrappedUI = () => {
    return (
        <ReduxProvider>
            <Navbar />
            <Drawer />
            <ToastList />
            <CombinedModals />
        </ReduxProvider>
    )
}


StateWrappedUI.displayName = "StateWrappedUI"


export default StateWrappedUI;
