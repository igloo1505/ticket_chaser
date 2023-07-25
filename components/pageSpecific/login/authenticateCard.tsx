"use client"
import Checkbox from '#/components/forms/inputs/checkbox';
import LoginForm from '#/components/forms/login/form';
import SignupMainForm from '#/components/forms/signup/form';
import WrappedSignupForm from '#/components/forms/signup/wrappedForm';
import Button from '#/components/ui/button';
import Card from '#/components/ui/card';
import { LoginBaseType } from '#/types/AuthTypes';
import React, { ChangeEvent, useState } from 'react'



const AuthenticateCard = () => {
    const [authenticateType, setAuthenticateType] = useState<"Sign Up" | "Login">("Sign Up")
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

    }
    return (
        <Card title={authenticateType} shadow container={{
            className: "min-w-[min(400px,85vw)] max-w-[calc(100vw-2rem)]"
        }}>
            {authenticateType === "Login" ?
                <LoginForm formData={formData} handleChange={handleChange}>
                    <div className={'card-actions pb-2 w-full h-fit flex flex-col justify-center items-center'}>
                        <div className={'w-full grid grid-cols-1 sm:grid-cols-2 py-4 gap-4'}>
                            <div className={'flex flex-row justify-start sm:justify-center items-center w-full sm:w-fit'}>
                                <Checkbox name="admin-login-rememberme"  label="Remember Me" value={formData.rememberMe} onChange={() => setFormData({
                                    ...formData,
                                    rememberMe: !formData.rememberMe
                                })} />
                            </div>
                            <Button label="Login" onClick={handleLogin} />
                        </div>
                        <Button label="Create an account" onClick={() => setAuthenticateType("Sign Up")} className={'w-full'} />
                    </div>
                </LoginForm>
                :
                <WrappedSignupForm setLogin={() => setAuthenticateType("Login")} />
            }
        </Card>
    )
}


AuthenticateCard.displayName = "AuthenticateCard"


export default AuthenticateCard;
