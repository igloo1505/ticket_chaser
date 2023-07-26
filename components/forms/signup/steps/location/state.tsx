
"use client"
import MultiStepTransition from '#/components/animate/multiStepTransition';
import Autocomplete from '#/components/forms/inputs/autocomplete';
import { SignupStepProps, StateByName, states } from '#/types/inputValidation';
import React, { ChangeEvent } from 'react'



interface Props extends SignupStepProps { }
const StateLocationForm = ({ form, setFormData, step }: Props) => {
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
                <Autocomplete
                    maxDisplay={5}
                    inputProps={{
                        onChange:  handleChange ,
                        name: "state",
                        label: "State",
                        value: form.data.location.state 
                    }}
                    onAccept={(v) => {
                        console.log("states[v.index].name: ", states[v.index].name)
                        setFormData({
                        ...form.data,
                        location: {
                            ...form.data.location,
                            state: states[v.index].name as StateByName
                        }
                    })}}
                    items={states.map((s, i) => ({
                        value: s.name,
                        index: i,
                        additionalQueries: [s.abbrev]
                    }))}
                />
            </div>
        </MultiStepTransition>
    )
}


StateLocationForm.displayName = "LocationForm"


export default StateLocationForm;


