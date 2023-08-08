import React from 'react'
import { ArenaFormStepProps } from './StepOne';
import TextInput from '#/components/forms/inputs/textInput';
import TeamTag from '#/components/teams/TeamTag';
import Button from '#/components/ui/button';
import clsx from 'clsx';


const ArenaFormStepTwo = (props: ArenaFormStepProps) => {
    const handleTeamRemove = (removeId: string | number) => {
        props.setFormData({
            ...props.formData,
            homeTeams: props.formData.homeTeams.filter((h, i) => i !== removeId)
        })
    }

    const showAddTeamModal = () => {

    }

    return (
        <div>
            <div className={clsx("w-full flex justify-center items-center", !props.active && "hidden")}>
                <Button label="Add Teams" onClick={showAddTeamModal} />
            </div>
            <div className={"flex flex-col justify-center items-start flex-wrap gap-4"}>{props.formData.homeTeams.map((h, i) => {
                return <TeamTag key={`hometeam-tag-${i}`} teamName={h.name} onRemove={handleTeamRemove} removeId={i} />
            })}</div>
        </div>
    )
}


ArenaFormStepTwo.displayName = "ArenaFormStepTwo"


export default ArenaFormStepTwo;
