import { InputBaseProps } from '#/types/uiTypes';
import clsx from 'clsx';
import { InputText } from 'primereact/inputtext'
import React from 'react'


interface TextInputProps extends InputBaseProps {
    helperText?: string
    id?: string
    value: string
    label: string
    className?: string
    protect?: boolean
}

const TextInput = ({ onChange, label, value, id, helperText, className, protect, name }: TextInputProps) => {
    return (
        <div className={clsx('flex flex-col gap-2 w-full', className && className)}>
            {label && id && <label htmlFor={id}>{label}</label>}
        <InputText value={value} type={protect ? "password": "text"} onChange={onChange} name={name} id={id ? id : undefined} />
            {helperText && id && <small id={id}>
                {helperText}
            </small>
            }
        </div>
    )
}


TextInput.displayName = "TextInput"


export default TextInput;
