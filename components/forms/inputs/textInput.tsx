"use client"
import { InputBaseProps } from '#/types/uiTypes';
import clsx from 'clsx';
import React, { useEffect } from 'react'


interface TextInputProps extends InputBaseProps {
    helperText?: string
    value: string
    label: string
    className?: string
    placeholder?: string
    protect?: boolean
    errorMessage?: string
    indicateError?: boolean
}

interface IdGroup {
    label: string
    input: string
}

const TextInput = ({ onChange, indicateError, errorMessage, label, placeholder, value, helperText, className, protect, name }: TextInputProps) => {
    const id = {
        input: `form-input-${name}`,
        label: `form-input-label-${name}`,
}

    useEffect(() => {
        if (indicateError) {
            wigglewigglewiggle(id)
        }
        if (!indicateError) {
            resetErrorIndicator(id)
        }
    }, [indicateError])

    return (
        <div className={clsx("w-full", className && className)}>
            <label className="label" id={id.label}>
                <span className="label-text">{label}</span>
            </label>
            <input type={protect ? "password" : "ghost"} id={id.input} name={name} placeholder={placeholder} className={clsx("input input-bordered w-full", indicateError && "input-error")} onChange={onChange} value={value} />
            {errorMessage && (<label className="label">
                <span className={clsx("label-text-alt text-error", errorMessage ? "opacity-100" : "opacity-0")}>{errorMessage}</span>
            </label>
            )}
        </div>
    )
}


TextInput.displayName = "TextInput"


export default TextInput;


const wigglewigglewiggle = (id: IdGroup) => {
    console.log("Handle that wiggle animation when back on wifi and can look up the keyframe that looks best.")
}

const resetErrorIndicator = (id: IdGroup) => {
    console.log("Handle that wiggle animation when back on wifi and can look up the keyframe that looks best.")
}
