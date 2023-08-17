"use client"
import { loginUser } from '#/actions/authActions';
import Checkbox from '#/components/forms/inputs/checkbox';
import LoginForm from '#/components/forms/login/form';
import SignupMainForm from '#/components/forms/signup/form';
import StepIndicator, { StepIndicatorStep } from '#/components/forms/signup/stepIndicator';
import Button from '#/components/ui/button';
import Card from '#/components/ui/card';
import { LoginBaseType } from '#/types/AuthTypes';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react'

export const signupCardId = "signup-card-container"

/* NOTE: Don't forget to add new grid columns in the stepIndicator component when adding new steps here, along with the 18 other places these steps are typed because you never plan anything ahead of time. */
const indicatorSteps: StepIndicatorStep[] = [
    {
        label: "Login",
        activeRange: [1]
    },
    {
        label: "Personal",
        activeRange: [2]
    },
    {
        label: "Location",
        activeRange: [3, 4]
    },
]




const AuthenticateCard = () => {
    const router = useRouter()
    const isLogin = useSearchParams().get("login") === "true"
    const [authenticateType, setAuthenticateType] = useState<"Sign Up" | "Login">(isLogin ? "Login" : "Sign Up")
    const [formData, setFormData] = useState<LoginBaseType>({
        email: "",
        password: "",
        rememberMe: false
    })
    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    const handleLogin = async () => {
        const { success, role } = await loginUser(formData)
        console.log("success: ", success)
        console.log("role: ", role)
        if (success) {
            router.push("/")
        }
    }

    useEffect(() => {
        if (typeof window === "undefined") return;
        let em = document.getElementById(signupCardId)
        em && (em.style.opacity = "1")
    }, [])

    useEffect(() => {
        setAuthenticateType(isLogin ? "Login" : "Sign Up")
    }, [isLogin])

    return (
        <Card title= { authenticateType } id = { signupCardId } shadow elevate = { 300} container = {{
        className: "max-w-[85vw] min-w-[min(85vw,480px)] relative opacity-0 initialRender"
    }
}>
    { authenticateType === "Sign Up" && <StepIndicator steps={ indicatorSteps } />}
{
    authenticateType === "Login" ?
    <LoginForm formData={ formData } handleChange = { handleChange } >
        <div className={ 'card-actions pb-2 w-full h-fit flex flex-col justify-center items-center' }>
            <div className={ 'w-full grid grid-cols-1 sm:grid-cols-2 py-4 gap-4' }>
                <div className={ 'flex flex-row justify-start sm:justify-center items-center w-full sm:w-fit' }>
                    <Checkbox name="admin-login-rememberme" label = "Remember Me" value = { formData.rememberMe } onChange = {() => setFormData({
                        ...formData,
                        rememberMe: !formData.rememberMe
                    })
} />
    < /div>
    < Button label = "Login" onClick = { handleLogin } />
        </div>
        < Button label = "Create an account" onClick = {() => setAuthenticateType("Sign Up")} className = { 'w-full'} />
            </div>
            < /LoginForm>
                :
<SignupMainForm setLogin={ () => setAuthenticateType("Login") } />
            }
</Card>
    )
}


AuthenticateCard.displayName = "AuthenticateCard"


export default AuthenticateCard;
