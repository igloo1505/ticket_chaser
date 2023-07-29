"use client"
import { InputBaseProps } from '#/types/uiTypes';
import clsx from 'clsx';
import React, { useEffect } from 'react'


export interface TextInputProps extends InputBaseProps {
    helperText?: string
    value: string
    label: string
    className?: string
    placeholder?: string
    protect?: boolean
    errorMessage?: string
    indicateError?: boolean
    extraInputProps?: React.HTMLProps<HTMLInputElement>
    inputClasses?: string
    minWidth?: number | string
}

interface IdGroup {
    label: string
    input: string
}

const TextInput = ({ onChange, minWidth, inputClasses, extraInputProps, indicateError, errorMessage, label, placeholder, value, helperText, className, protect, name }: TextInputProps) => {
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

    const inputProps = extraInputProps || {}
    if (minWidth) {
        if (inputProps.style) {
            inputProps.style = {
                ...inputProps.style,
                minWidth: typeof minWidth === "string" ? minWidth : `min(${minWidth}px, 85vw)`
            }
        }

        if (!inputProps.style) {
            inputProps.style = {
                minWidth: typeof minWidth === "string" ? minWidth : `min(${minWidth}px, 85vw)`
            }
        }
    }

    return (
        <div className={clsx("w-full min-w-fit", className && className)}>
            <label className="label" id={id.label}>
                <span className="label-text">{label}</span>
            </label>
            <input type={protect ? "password" : "ghost"} id={id.input} name={name} placeholder={placeholder} className={clsx("input input-bordered w-full", indicateError && "input-error", inputClasses && inputClasses)} onChange={onChange} value={value} {...inputProps} />
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
