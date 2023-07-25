"use client"
import MultiStepTransition from '#/components/animate/multiStepTransition';
import { SignupStepProps } from '#/types/inputValidation';
import React, { ChangeEvent, useEffect, useState } from 'react'
import TextInput from '../../inputs/textInput';
import { twoValuesMatch } from '#/utils/client/validate';
import FormErrorIndicator from '#/components/ui/formErrorIndicator';


interface Props extends SignupStepProps { showPasswordMismatch: string | null }
const SignupStepOne = ({ form, setFormData, showPasswordMismatch, step }: Props) => {
    const [passwordValid, setPasswordValid] = useState<boolean>(true)
    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        if (target.name === "confirmPassword") {
            let validPass = twoValuesMatch(form.data.password, target.value)
            setPasswordValid(validPass)
        }
        if (target.name === "password") {
            let validPass = twoValuesMatch(form.data.confirmPassword, target.value)
            setPasswordValid(validPass)

        }
        setFormData({
            ...form.data,
            [target.name]: target.value
        })
    }
    return (
        <MultiStepTransition step={step} activeStep={parseInt(form.activeStep)}>
            <div className={'w-full flex flex-col justify-center items-center gap-4'}>
                <TextInput onChange={handleChange} name="email" label="Email" value={form.data.email}
                />
                <div className={'w-full flex flex-col justify-center items-center gap-4'}>
                    <div className={'w-full flex flex-col justify-center items-center md:grid md:grid-cols-2 gap-4'}>
                        <TextInput onChange={handleChange} name="password" protect label="Password" value={form.data.password}
                            indicateError={!passwordValid}
                        />
                        <TextInput onChange={handleChange} name="confirmPassword" label="Confirm Password" protect value={form.data.confirmPassword}
                            indicateError={!passwordValid}
                        />
                    </div>
                    <FormErrorIndicator message={showPasswordMismatch} />
                </div>
            </div>
        </MultiStepTransition>
    )
}


SignupStepOne.displayName = "SignupStepOne"


export default SignupStepOne;


