"use client"
import React, { useState } from 'react'
import { ArenaFormStepProps } from './StepOne';
import TextInput from '#/components/forms/inputs/textInput';
import TeamTag from '#/components/teams/TeamTag';
import Button from '#/components/ui/button';
import clsx from 'clsx';
import TeamSelectionModal from '#/components/forms/modals/TeamSelectionModal';
import { Team } from '@prisma/client';
/* import type { Team } from '@prisma/client'; */


const ArenaFormStepTwo = (props: ArenaFormStepProps) => {
    const [teamSelectionModalOpen, setTeamSelectionModalOpen] = useState(false)
    const handleTeamRemove = (removeId: string | number) => {
        props.setFormData({
            ...props.formData,
            homeTeams: props.formData.homeTeams.filter((h, i) => i !== removeId)
        })
    }



    const showAddTeamModal = () => {
        setTeamSelectionModalOpen(true)
    }

    const handleTeamSelection = (t: Team, selected: boolean) => {
        if (!selected) {
            props.setFormData({
                ...props.formData,
                homeTeams: props.formData.homeTeams.filter((j) => j.id !== t.id)
            })
            return
        }
        props.setFormData({
            ...props.formData,
            homeTeams: [...props.formData.homeTeams, t]
        })
    }

    const handleModalClose = () => {
        setTeamSelectionModalOpen(false)
    }

    return (
        <div>
            <TeamSelectionModal onClose={handleModalClose} open={teamSelectionModalOpen} selectedIds={props.formData.homeTeams.map((t) => t.id)} onSelectionChange={handleTeamSelection} />
            <div className={clsx("w-full flex justify-center items-center", !props.active && "hidden")}>
                <Button label="Add Teams" onClick={showAddTeamModal} />
            </div>
            <div className={"flex flex-col justify-center items-start flex-wrap gap-4"}>{props.formData.homeTeams.map((h, i) => {
                return <TeamTag key={`hometeam-tag-${i}`} noElevate={true} teamName={h.name} onRemove={handleTeamRemove} itemChangeId={i} />
            })}</div>
        </div>
    )
}


ArenaFormStepTwo.displayName = "ArenaFormStepTwo"


export default ArenaFormStepTwo;
