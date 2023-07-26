"use client"
import { getCitiesFromQuery } from '#/actions/inputActions';
import MultiStepTransition from '#/components/animate/multiStepTransition';
import Autocomplete from '#/components/forms/inputs/autocomplete';
import TextInput from '#/components/forms/inputs/textInput';
import { CityApiType, SignupStepProps, StateByName, states } from '#/types/inputValidation';
import React, { ChangeEvent, useState } from 'react'


import {RootState} from '#/state/store';
import {connect} from 'react-redux';

const connector = connect((state: RootState, props: any) => ({
    retrievedCities: state.form.signUp.localCities,
    props: props
}))

interface Props extends SignupStepProps { retrievedCities: CityApiType[]}
const LocationForm = connector(({ form, retrievedCities, setFormData, step }: Props) => {
    const setCities = async (query: string) => {
        if (form.data.location.state !== "") {
         await getCitiesFromQuery(query, form.data.location.state)
        }
    }
    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        if (target.name === "city" && target.value.length >= 3) {
            setCities(target.value)
        }
        setFormData({
            ...form.data,
            location: {
                ...form.data.location,
                city: {
                    ...form.data.location.city,
                    name: target.value
                }
            }
        })
    }

    return (
        <MultiStepTransition step={step} activeStep={parseInt(form.activeStep)}>
            <div className={'w-full h-full flex flex-col justify-center items-center gap-4'}>
                <Autocomplete
                    maxDisplay={5}
                    inputProps={{
                        onChange: handleChange,
                        name: "city",
                        label: "City",
                        value: form.data.location.city.name
                    }}
                    onAccept={(v) => {
                        const selectedCity = retrievedCities.filter((r) => r.id === v.id)[0]
                        let _city = {} as typeof form.data.location.city
                        if (selectedCity) {
                            _city.id = selectedCity.id
                            _city.name = selectedCity.name
                        }
                        if (_city.name) {
                            setFormData({
                                ...form.data,
                                location: {
                                    ...form.data.location,
                                    city: _city
                                }
                            })
                        }
                    }}
                    items={retrievedCities.map((s, i) => ({
                        value: s.name,
                        index: i,
                        id: s.id
                    }))}
                />
            </div>
        </MultiStepTransition>
    )
})


LocationForm.displayName = "LocationForm"


export default LocationForm;
