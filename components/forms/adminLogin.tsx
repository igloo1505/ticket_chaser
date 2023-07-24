"use client"
import React, { ChangeEvent, useState } from 'react'
import TextInput from './inputs/textInput'
import CardButtonGroup from '../ui/cardButtonGroup'
import Button from '../ui/button'



interface AdminLoginFormProps {

}

interface LoginFormData {
    email: string
    password: string
    rememberMe: boolean
}

const AdminLoginForm = (props: AdminLoginFormProps) => {
    const [formData, setFormData] = useState<LoginFormData>({
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
    return (
        <div className={'flex flex-col justify-center items-center w-full'}>
        <div className={'w-full flex flex-col justify-center items-center gap-4'}>
            <TextInput onChange={handleChange} name="email" label="Email" value={formData.email}
            id="adminLoginEmail"/>
            <TextInput onChange={handleChange} name="password" protect label="Password" value={formData.password}
            id="adminLoginPassword"/>
        </div>
            <CardButtonGroup>
                <Button label="Login"/>
            </CardButtonGroup>
        </div>
    )
}


AdminLoginForm.displayName = "AdminLoginForm"


export default AdminLoginForm;
