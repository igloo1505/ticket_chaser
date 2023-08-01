"use client"
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import { LoginBaseType } from '#/types/AuthTypes'
import Button, { ButtonProps } from '#/components/ui/button'
import Checkbox from '../inputs/checkbox'
import TextInput from '../inputs/textInput'

export interface LoginFormProps {
    formData: LoginBaseType
    handleChange: ChangeEventHandler
    children?: React.ReactNode
}

const LoginForm = ({ handleChange, formData, children }: LoginFormProps) => {
    return (
        <div className={'flex flex-col justify-center items-center w-full'}>
            <div className={'w-full flex flex-col justify-center items-center gap-4'}>
                <TextInput onChange={handleChange} name="email" label="Email" value={formData.email}
                />
                <TextInput onChange={handleChange} name="password" protect label="Password" value={formData.password}
                />
            </div>
            {children && children}
        </div>
    )
}


LoginForm.displayName = "LoginForm"


export default LoginForm;
