"use client"
import { SignupStepProps, Steps, steps } from '#/types/inputValidation'
import React, { useState } from 'react'
import BasicInfoForm from './steps/basicInfo'
import Button from '#/components/ui/button'
import CityForm from './steps/location/city'
import clsx from 'clsx'
import { validateEmail, validateFormInput, validatePassword } from '#/utils/client/validate'
import { multiStepSignupFormContainer } from "#/animations/signupForm"
import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';
import { SignupFormDataType, SignupFormType } from '#/state/initial/forms/signup'
import { setSignupFormData } from '#/state/slices/form'
import StateLocationForm from './steps/location/state'
import PersonalDetailsForm from './steps/personal/name'
import { registerUser } from "#/actions/authActions"
import { useRouter } from 'next/navigation'

const connector = connect((state: RootState, props: any) => ({
    formData: state.form.signUp,
    props: props
}))

type validationState = null | string

interface IndicateState {
    validated1: boolean
    validated2: boolean
    passwordMismatch: validationState
    validEmail: validationState
}



interface ValidateReturn {
    validState: Partial<IndicateState>
    shouldContinue: boolean
}


const validateMap: { [k in Steps]: (d: SignupFormType) => ValidateReturn } = {
    "1": (form) => {
        let validState = {} as Partial<IndicateState>
        let shouldContinue = true
        validState.validated1 = true
        let pMatch = validatePassword(form.data.password, form.data.confirmPassword)
        validState.passwordMismatch = pMatch
        let eMatch = validateEmail(form.data.email)
        validState.validEmail = eMatch
        if (pMatch || eMatch) {
            shouldContinue = false
        }
        return { validState, shouldContinue }
    },
    "2": (form) => {
        let validState = {} as Partial<IndicateState>
        let shouldContinue = true
        return { validState, shouldContinue }
    },
    "3": (form) => {
        let validState = {} as Partial<IndicateState>
        let shouldContinue = true
        return { validState, shouldContinue }
    },
    "4": (form) => {
        let validState = {} as Partial<IndicateState>
        let shouldContinue = true
        return { validState, shouldContinue }
    },
}

const initialValidateState: IndicateState = {
    validated1: false,
    validated2: false,
    passwordMismatch: null,
    validEmail: null
}

interface Props {
    setLogin: () => void,
    formData: RootState['form']['signUp']
}


const SignupMainForm = connector(({ setLogin, formData }: Props) => {
    const [indicateState, setIndicateState] = useState<IndicateState>(initialValidateState)
    const router = useRouter()

    const setFormData = (d: SignupFormType) => {
        store.dispatch(setSignupFormData(d))
    }

    const handleSignup = async () => {
        const isValidForm = validateFormInput(formData.data)
        const success = await registerUser(formData.data)
        if (success) {
            router.push("/")
        }
    }

    const handleValidateStep = (): boolean => {
        const { validState, shouldContinue } = validateMap[`${formData.activeStep}`](formData)
        if (validState) {
            setIndicateState({
                ...indicateState,
                ...validState
            })
        }
        return shouldContinue
    }

    const nextStep = () => {
        const validated = handleValidateStep()
        if (!validated) return
        if (!formData.lastStep) {
            const ns = parseInt(formData.activeStep) + 1
            setFormData({
                ...formData,
                activeStep: `${ns}` as Steps,
                lastStep: ns === steps.length,
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
                lastStep: ns === steps.length,
                firstStep: ns === 1
            })
        }
    }

    const handleFormData = (data: typeof formData.data) => {
        const newFormData = {
            ...formData,
            data: data
        }
        if (indicateState.validated1) {
            const { validState, shouldContinue } = validateMap[`${formData.activeStep}`](newFormData)
            setIndicateState({
                ...indicateState,
                ...validState
            })
        }
        setFormData(newFormData)
    }

    return (
        <div className= { "w-full h-full flex flex-col justify-center items-center"} >
        <div className={ "w-full h-full flex flex-col justify-center items-center relative" } id = { multiStepSignupFormContainer } >
            <BasicInfoForm form={ formData } setFormData = { handleFormData } step = { 1}
    showPasswordMismatch = { indicateState.passwordMismatch ? indicateState.passwordMismatch : null }
    showInvalidEmail = { indicateState.validEmail ? indicateState.validEmail : null }
        />
        <PersonalDetailsForm form={ formData } setFormData = { handleFormData } step = { 2} />
            <StateLocationForm form={ formData } setFormData = { handleFormData } step = { 3} />
                <CityForm form={ formData } setFormData = { handleFormData } step = { 4} />
                    <div className = { 'card-actions pb-2 w-full h-fit flex flex-col justify-center items-center' } >
                        </div>
                        < div className = { clsx('w-full grid gap-4 grid-cols-1', !formData.firstStep && "grid-cols-2") }>
                            {!formData.firstStep && <Button label="Back" onClick = { prevStep } className = { 'w-full'} />}
{
    formData.lastStep ?
    <Button label="Submit" onClick = { handleSignup } className = { 'w-full'} />
                        :
    <Button label="Continue" onClick = { nextStep } className = { 'w-full'} />
                    }
</div>
    <div className = { 'w-full flex justify-center items-center'} >
        <Button label="I already have an account" onClick = { setLogin } className = { 'w-full'} />
            </div>
            </div>
                </div>
    )
})


SignupMainForm.displayName = "SignupMainForm"


export default SignupMainForm;
