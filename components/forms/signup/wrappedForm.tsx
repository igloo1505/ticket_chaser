"use client"
import ReduxProvider from '#/components/utility/reduxProvider';
import React from 'react'
import SignupMainForm from './form';



interface WrappedSignupFormProps {

    setLogin: () => void,
}

const WrappedSignupForm = (props: WrappedSignupFormProps) => {
    return (
        <ReduxProvider><SignupMainForm {...props}/></ReduxProvider>
    )
}


WrappedSignupForm.displayName = "WrappedSignupForm"


export default WrappedSignupForm;
