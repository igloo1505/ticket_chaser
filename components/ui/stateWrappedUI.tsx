"use client"
import React from 'react'
import Navbar from '../navigation/navbar';
import ReduxProvider from '../utility/reduxProvider';



interface StateWrappedUIProps {

}

const StateWrappedUI = (props: StateWrappedUIProps) => {
return (
            <ReduxProvider>
            <Navbar/>
            </ReduxProvider>
)
}


StateWrappedUI.displayName = "StateWrappedUI"


export default StateWrappedUI;
