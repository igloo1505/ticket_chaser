import TextInput from '#/components/forms/inputs/textInput';
import { ArenaEditingType } from '#/types/adminEditingTypes';
import React, { ChangeEvent } from 'react'



export interface ArenaFormStepProps {
    formData: ArenaEditingType
    handleChange: (e: ChangeEvent) => void
    setFormData: (data: ArenaEditingType) => void
    active: boolean
}

const ArenaFormStepOne = ({ formData, handleChange, active }: ArenaFormStepProps) => {
    return (
        <TextInput className={active ? "" : "hidden"} onChange={handleChange} name="name" label="Name" value={formData.name}
        />
    )
}


ArenaFormStepOne.displayName = "ArenaFormStepOne"


export default ArenaFormStepOne;
