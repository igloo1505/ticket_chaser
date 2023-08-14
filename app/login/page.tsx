import AuthenticateCard from '#/components/pageSpecific/login/authenticateCard';
import ReduxProvider from '#/components/utility/reduxProvider';
import React from 'react'


const LoginPage = () => {
    return (
        <div className={'w-full min-h-[max(100vh,768px)] flex flex-col gap-4 justify-center items-center'}>
            <ReduxProvider>
                <AuthenticateCard />
            </ReduxProvider>
        </div>
    )
}


LoginPage.displayName = "LoginPage"


export default LoginPage;
