import AuthenticateCard from '#/components/pageSpecific/login/authenticateCard';
import React from 'react'



interface LoginPageProps {

}

const LoginPage = (props: LoginPageProps) => {

    return (
        <div className={'w-full h-full min-h-screen flex flex-col justify-center items-center'}>
            <AuthenticateCard />
        </div>
    )
}


LoginPage.displayName = "LoginPage"


export default LoginPage;
