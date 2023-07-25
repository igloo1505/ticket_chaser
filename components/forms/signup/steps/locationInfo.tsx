"use client"
import MultiStepTransition from '#/components/animate/multiStepTransition';
import { SignupStepProps } from '#/types/inputValidation';
import React, { ChangeEvent } from 'react'
import TextInput from '../../inputs/textInput';
import form from '../form';
import { twoValuesMatch } from '#/utils/client/validate';



interface Props extends SignupStepProps { }
const LocationForm = ({ form, setFormData, step }: Props) => {
    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setFormData({
            ...form.data,
            [target.name]: target.value
        })
    }

    return (
        <MultiStepTransition step={step} activeStep={parseInt(form.activeStep)}>
            <div className={'w-full h-full flex flex-col justify-center items-center gap-4'}>
                <TextInput onChange={handleChange} name="confirmPassword" label="Confirm Password" protect value={form.data.confirmPassword}
                />
            </div>
        </MultiStepTransition>
    )
}


LocationForm.displayName = "LocationForm"


export default LocationForm;
