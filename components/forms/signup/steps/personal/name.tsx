"use client"
import MultiStepTransition from '#/components/animate/multiStepTransition';
import { SignupStepProps } from '#/types/inputValidation';
import React, { ChangeEvent, useEffect, useState, useRef } from 'react'
import TextInput from '#/components/forms/inputs/textInput';
import { twoValuesMatch } from '#/utils/client/validate';
import FormErrorIndicator from '#/components/ui/formErrorIndicator';


interface Props extends SignupStepProps { }
const PersonalDetailsForm = ({ form, setFormData, step, relative }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null!)
    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setFormData({
            ...form.data,
            name: {
                ...form.data.name,
                [target.name]: target.value
            }
        })
    }

    return (
        <MultiStepTransition step={step} ref={containerRef} activeStep={parseInt(form.activeStep)} relative={Boolean(relative)}>
            <div className={'w-full min-w-[min(600px,85vw)] grid pb-4 grid-cols-1 grid-rows-[2fr_1fr] xl:grid-cols-[2fr_1fr] md:grid-rows-2 xl:grid-rows-1 xl:gap-2'}>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-2">
                    <TextInput onChange={handleChange} name="first" label="First" value={form.data.name.first}
                        className={"mb-1 min-w-[300px]"}
                    />
                    <TextInput onChange={handleChange} name="middle" label="Middle" value={form.data.name.middle || ""}
                        className={"mb-1 min-w-[300px]"}
                    />
                </div>
                <TextInput onChange={handleChange} name="last" label="Last" value={form.data.name.last}
                    className={"mb-1 min-w-[300px]"}
                />
            </div>
        </MultiStepTransition>
    )
}


PersonalDetailsForm.displayName = "PersonalDetailsForm"


export default PersonalDetailsForm;


