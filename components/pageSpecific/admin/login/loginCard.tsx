"use client"
import { loginUser } from '#/actions/authActions';
import Checkbox from '#/components/forms/inputs/checkbox';
import LoginForm from '#/components/forms/login/form';
import Button from '#/components/ui/button';
import Card from '#/components/ui/card';
import { LoginBaseType } from '#/types/AuthTypes';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'



interface AdminLoginCardProps {

}

const AdminLoginCard = (props: AdminLoginCardProps) => {
    const router = useRouter()
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
        const { success, role } = await loginUser(formData, ["ADMIN"])
        console.log("success: ", success)
        if (success) {
            if (role === "ADMIN") {
                return router.replace("/admin/legit")
            }
            router.replace("/dashboard")
        }
    }

    return (
        <Card title="Admin Login" shadow elevate={"200"} container={{
            className: "min-w-[min(400px,85vw)] max-w-[calc(100vw-2rem)]"
        }}>
            <LoginForm handleChange={handleChange} formData={formData}>
                <div className={'w-full card-actions flex flex-col sm:flex-row sm:justify-between py-4 px-4 gap-4'}>
                    <div className={'flex flex-row justify-start items-center w-full sm:w-fit'}>
                        <Checkbox name="admin-login-rememberme" label="Remember Me" value={formData.rememberMe} onChange={() => setFormData({
                            ...formData,
                            rememberMe: !formData.rememberMe
                        })} />
                    </div>
                    <Button label="Login" onClick={handleLogin} />
                </div>
            </LoginForm>
        </Card>
    )
}


AdminLoginCard.displayName = "AdminLoginCard"


export default AdminLoginCard;
