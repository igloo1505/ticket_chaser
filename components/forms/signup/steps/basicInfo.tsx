"use client"
import MultiStepTransition from '#/components/animate/multiStepTransition';
import { SignupStepProps } from '#/types/inputValidation';
import React, { ChangeEvent, useEffect, useState, useRef } from 'react'
import TextInput from '../../inputs/textInput';
import { twoValuesMatch } from '#/utils/client/validate';
import FormErrorIndicator from '#/components/ui/formErrorIndicator';
import PasswordStrengthInput from '../../inputs/passwordStrengthTextInput';
import { changeContainerFixedSize } from "#/animations/signupForm"

const errorOpenHeights = {
    showPasswordMismatch: 42,
    showInvalidEmail: 42,
}

interface Props extends SignupStepProps { showPasswordMismatch: string | null, showInvalidEmail: string | null }

interface ErrorState {
    showPasswordMismatch: string | null,
    showInvalidEmail: string | null,
    totalErrorHeight: number
}



const getErrorState = (errors: Partial<ErrorState>) => {
    let e = 0
    console.log(errors)
    Object.keys(errors).forEach((k) => {

        if (Boolean(errors[k as keyof ErrorState])) {
            e += errorOpenHeights[k as keyof typeof errorOpenHeights]
        }
    })
    errors.totalErrorHeight = e
    return errors
}


const BasicInfoForm = ({ form, relative, setFormData, showPasswordMismatch, step, showInvalidEmail }: Props) => {
    const [passwordValid, setPasswordValid] = useState<boolean>(true)
    const [errorsShown, setErrorsShown] = useState<Partial<ErrorState>>(getErrorState({ showPasswordMismatch, showInvalidEmail }))
    const containerRef = useRef<HTMLDivElement>(null!)
    useEffect(() => {
        const newErrorState = getErrorState({ showPasswordMismatch, showInvalidEmail })
        if (Boolean(newErrorState.totalErrorHeight || newErrorState.totalErrorHeight === 0) && Boolean(errorsShown.totalErrorHeight || errorsShown.totalErrorHeight === 0)) {
            /// @ts-ignore
            changeContainerFixedSize(newErrorState.totalErrorHeight - errorsShown.totalErrorHeight)
            setErrorsShown(newErrorState)
        }
    }, [showPasswordMismatch, showInvalidEmail])


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
        <MultiStepTransition step={step} ref={containerRef} activeStep={parseInt(form.activeStep)} relative={Boolean(relative)}>
            <div className={'w-full min-w-fit min-h-fit flex flex-col justify-center items-center pb-4'}>
                <TextInput onChange={handleChange} name="email" label="Email" value={form.data.email}
                    className={"mb-2"}
                />
                <FormErrorIndicator message={showInvalidEmail}
                    openHeight={errorOpenHeights.showInvalidEmail}
                />
                <div className={'w-full flex flex-col justify-center items-center'}>
                    <div className={'w-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-2 md:gap-4'}
                    >
                        <PasswordStrengthInput onChange={handleChange} name="password" protect label="Password" value={form.data.password}
                            indicateError={!passwordValid}
                            inputClasses="min-w-[200px]"
                        />
                        <TextInput onChange={handleChange} name="confirmPassword" label="Confirm Password" protect value={form.data.confirmPassword}
                            indicateError={!passwordValid}
                            inputClasses="min-w-[200px]"
                        />
                    </div>
                    <FormErrorIndicator message={showPasswordMismatch}
                        openHeight={errorOpenHeights.showPasswordMismatch}
                    />
                </div>
            </div>
        </MultiStepTransition>
    )
}


BasicInfoForm.displayName = "BasicInfoForm"


export default BasicInfoForm;


