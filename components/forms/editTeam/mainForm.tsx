"use client"
import { Event, Leagues, Team } from '@prisma/client'
import React, { useState } from 'react'
import EditTeamStepOne from './stepOne'
import MultiStepButtonGroup from '../inputs/multiStepButtonGroup'
import { submitTeamData } from '#/actions/adminActions'
import store from '#/state/store'
import { showToast } from '#/state/slices/ui'

const maxStep = 1


interface EditTeamFormProps {
    team?: Team | null | undefined
}



export interface EditTeamFormType {
    name: string
    abbreviation?: string
    league: Leagues
    homeArenaId?: number
    _homeArenaName?: string
    events?: Event[] | []
    eventIds?: number[]
}

const initialFormData: EditTeamFormType = {
    name: "",
    abbreviation: "",
    league: "NFL",
    homeArenaId: undefined,
    _homeArenaName: undefined,
    events: [],
    eventIds: []
}

const EditTeamForm = (props: EditTeamFormProps) => {
    const [formStep, setFormStep] = useState(1)
    const [formData, setFormData] = useState<EditTeamFormType>(initialFormData)


    const handleNext = async () => {
        if (formStep === maxStep) {
            const success = await submitTeamData(formData)
            if (success) {
                store.dispatch(showToast({
                    variant: "success",
                    content: `${formData.abbreviation} has been added successfully.`,
                    isOpen: true,
                    timeout: 3000
                }))
                setFormData(initialFormData)
            }
        }
    }

    const handlePrev = () => {

    }

    return (
        <div className={"w-fit h-fit px-6 py-6 rounded-xl elevate-400 data-light:data:elevate-200 min-w-[min(85vw,480px)]"}>
            <div className={"text-2xl font-semibold tracking-wide w-full text-center"}>Team</div>
            <EditTeamStepOne active={formStep === 1} formData={formData} setFormData={setFormData} />
            <MultiStepButtonGroup maxStep={maxStep} activeStep={formStep} handleNext={handleNext} handlePrev={handlePrev} />
        </div>
    )
}


EditTeamForm.displayName = "EditTeamForm"


export default EditTeamForm;
