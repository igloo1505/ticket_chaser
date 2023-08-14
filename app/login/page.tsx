import AuthenticateCard from '#/components/pageSpecific/login/authenticateCard';
import ReduxProvider from '#/components/utility/reduxProvider';
import React from 'react'


interface LoginPageProps {
    searchParams: {
        login?: "true"
    }
}

const LoginPage = ({ searchParams: { login } }: LoginPageProps) => {
    console.log("login: ", login, typeof login)
    return (
        <div className={'w-full h-full underNavCenter flex flex-col gap-4 justify-center items-center'}>
            <ReduxProvider>
                <AuthenticateCard isLogin={Boolean(login && login === "true")} />
            </ReduxProvider>
        </div>
    )
}


LoginPage.displayName = "LoginPage"


export default LoginPage;
