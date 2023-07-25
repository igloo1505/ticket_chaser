"use client"
import { SignupStepProps, Steps, steps } from '#/types/inputValidation'
import React, { useState } from 'react'
import SignupStepOne from './steps/stepOne'
import Button from '#/components/ui/button'
import Checkbox from '../inputs/checkbox'
import SignupStepTwo from './steps/stepTwo'
import clsx from 'clsx'
import { validatePassword } from '#/utils/client/validate'




interface IndicateState {
    validated1: boolean
    validated2: boolean
    passwordMismatch: null | string
}


const validateMap: { [k in Steps]: (d: SignupStepProps['form']) => Partial<IndicateState> } = {
    "1": (form) => {
        let d = {} as Partial<IndicateState>
        d.validated1 = true
        let pMatch = validatePassword(form.data.password, form.data.confirmPassword)
        console.log("pMatch: ", pMatch)
        d['passwordMismatch'] = pMatch
        return d
    },
    "2": (form) => {
        let d = {} as Partial<IndicateState>
        return d
    }
}

const initialValidateState: IndicateState = {
    validated1: false,
    validated2: false,
    passwordMismatch: null
}


const SignupMainForm = ({ setLogin }: { setLogin: () => void }) => {
    const [indicateState, setIndicateState] = useState<IndicateState>(initialValidateState)
    const [formData, setFormData] = useState<SignupStepProps['form']>({
        data: {
            email: "",
            password: "",
            confirmPassword: "",
            name: {
                first: "",
                middle: null,
                last: ""
            },
        },
        activeStep: "1",
        firstStep: true,
        lastStep: false
    })

    const handleSignup = () => {

    }

    const handleValidateStep = (): boolean => {
        const validState = validateMap[`${formData.activeStep}`](formData)
        if (validState) {
            setIndicateState({
                ...indicateState,
                ...validState
            })
            return false
        }
        return true
    }

    const nextStep = () => {
        const validated = handleValidateStep()
        if (!validated) return
        if (!formData.lastStep) {
            const ns = parseInt(formData.activeStep) + 1
            setFormData({
                ...formData,
                activeStep: `${ns}` as Steps,
                lastStep: ns === steps.length - 1,
                firstStep: ns === 0
            })
            return
        }
        handleSignup()
    }

    const prevStep = () => {
        if (!formData.firstStep) {
            const ns = parseInt(formData.activeStep) - 1
            setFormData({
                ...formData,
                activeStep: `${ns}` as Steps,
                lastStep: ns === steps.length - 1,
                firstStep: ns === 1
            })
        }
    }

    const handleFormData = (data: typeof formData.data) => {
        const newFormData = {
            ...formData,
            data: data
        }
        if (indicateState[`validated${formData.activeStep}`]) {
            const validState = validateMap[`${formData.activeStep}`](newFormData)
                setIndicateState({
                    ...indicateState,
                    ...validState
                })
        }
        setFormData(newFormData)
    }

    return (
        <div>
            <SignupStepOne form={formData} setFormData={handleFormData} step={1} showPasswordMismatch={indicateState.passwordMismatch ? indicateState.passwordMismatch : null} />
            <SignupStepTwo form={formData} setFormData={handleFormData} step={2} />
            <div className={'card-actions w-full h-fit flex flex-col justify-center items-center'}>
                <div className={clsx('w-full grid gap-4 grid-cols-1', !formData.firstStep && "grid-cols-2")}>
                    {!formData.firstStep && <Button label="Back" onClick={prevStep} className={'w-full'} />}
                    {formData.lastStep ?
                        <Button label="Login" onClick={handleSignup} className={'w-full'} />
                        :
                        <Button label="Continue" onClick={nextStep} className={'w-full'} />
                    }
                </div>
                <div className={'w-full flex justify-center items-center'}>
                    <Button label="I already have an account" onClick={setLogin} className={'w-full'} />
                </div>
            </div>
        </div>
    )
}


SignupMainForm.displayName = "SignupMainForm"


export default SignupMainForm;
