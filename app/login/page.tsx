import StepIndicator, { StepIndicatorStep } from '#/components/forms/signup/stepIndicator';
import AuthenticateCard from '#/components/pageSpecific/login/authenticateCard';
import ReduxProvider from '#/components/utility/reduxProvider';
import React from 'react'


const indicatorSteps: StepIndicatorStep[] = [
   {
        label: "Login",
        activeRange: [1]
    },
    {
        label: "Location",
        activeRange: [2, 3]
    }
]

interface LoginPageProps {

}

const LoginPage = (props: LoginPageProps) => {

    return (
        <div className={'w-full h-full flex flex-col justify-center items-center'}>
            <ReduxProvider>
            <AuthenticateCard />
            </ReduxProvider>
        </div>
    )
}


LoginPage.displayName = "LoginPage"


export default LoginPage;
