"use client"
import MultiStepTransition from '#/components/animate/multiStepTransition';
import TextInput from '#/components/forms/inputs/textInput';
import { SignupStepProps } from '#/types/inputValidation';
import React, { ChangeEvent } from 'react'



interface Props extends SignupStepProps { }
const LocationForm = ({ form, setFormData, step }: Props) => {
    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setFormData({
            ...form.data,
            location: {
                ...form.data.location,
                [target.name]: target.value
            }
        })
    }

    return (
        <MultiStepTransition step={step} activeStep={parseInt(form.activeStep)}>
            <div className={'w-full h-full flex flex-col justify-center items-center gap-4'}>
                <TextInput onChange={handleChange} name="city" label="City" value={form.data.location.city}
                />
            </div>
        </MultiStepTransition>
    )
}


LocationForm.displayName = "LocationForm"


export default LocationForm;
