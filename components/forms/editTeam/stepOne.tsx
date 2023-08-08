import React, { ChangeEvent } from 'react'
import { EditTeamFormType } from './mainForm'
import TextInput from '../inputs/textInput'
import clsx from 'clsx'



interface EditTeamStepProps {
    active: boolean
    formData: EditTeamFormType
    setFormData: (data: EditTeamFormType) => void
}

const EditTeamStepOne = (props: EditTeamStepProps) => {
    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        props.setFormData({
            ...props.formData,
            [target.name]: target.value
        })
    }
    return (
        <div className={clsx("flex flex-col justify-center items-center gap-4", !props.active && "hidden")}>
            <TextInput onChange={handleChange} name="name" label="Team Name" value={props.formData.name} />
            <TextInput onChange={handleChange} name="abbreviation" label="Team Abbreviated Name" value={props.formData.abbreviation || ""} />
        </div>
    )
}


EditTeamStepOne.displayName = "EditTeamStepOne"


export default EditTeamStepOne;
