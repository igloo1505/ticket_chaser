"use client"
import TextInput from '#/components/forms/inputs/textInput'
import { ArenaEditingType, RetrievedArenaType, defaultLocationForm } from '#/types/adminEditingTypes'
import React, { ChangeEvent, useState } from 'react'
import ArenaFormStepOne from './StepOne'
import Button from '#/components/ui/button'
import ArenaFormStepTwo from './StepTwo'

const maxStep = 3


interface EditArenaFormProps {
    arena?: RetrievedArenaType | null | undefined
}



const EditArenaForm = (props: EditArenaFormProps) => {
    const arena = props.arena
    const [formStep, setFormStep] = useState(1)
    const [formData, setFormData] = useState<ArenaEditingType>({
        name: arena?.name || "",
        events: arena?.events || [],
        location: arena?.location || defaultLocationForm,
        sections: arena?.sections || [],
        homeTeams: arena?.homeTeams || [],
        homeTeamQuery: ""
    })

    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    const handleNext = () => {
        if (formStep >= maxStep) return
        setFormStep(formStep + 1)
    }

    const handlePrev = () => {
        if (formStep <= 1) return
        setFormStep(formStep - 1)
    }
    console.log("formStep: ", formStep)

    return (
        <div className={"w-fit h-fit px-6 py-6 rounded-xl elevate-400 min-w-[min(85vw,480px)]"}>
            <div className={"text-2xl font-semibold tracking-wide w-full text-center"}>Arenas</div>
            <div className={"mt-4 mb-6"}>
                <ArenaFormStepOne active={formStep === 1} formData={formData} setFormData={setFormData} handleChange={handleChange} />
                <ArenaFormStepTwo active={formStep === 2} formData={formData} setFormData={setFormData} handleChange={handleChange} />
            </div>
            <div className={"w-full flex flex-row justify-end items-center gap-4"}>
                {formStep > 1 && <Button label="Back" onClick={handlePrev} />}
                <Button label="Continue" onClick={handleNext} />
            </div>
        </div>
    )
}


EditArenaForm.displayName = "EditArenaForm"


export default EditArenaForm;
