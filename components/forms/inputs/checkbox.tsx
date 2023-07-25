import React, { ChangeEvent } from 'react'
import clsx from 'clsx';



interface CheckboxProps {
    onChange: (e: ChangeEvent) => void
    label?: string
    value: boolean
    name: string
    variant?: "checkbox-primary" | "checkbox-secondary" | "checkbox-accent" | "checkbox-success" | "checkbox-warning" | "checkbox-info" | "checkbox-error"
    size?: "checkbox-lg" | "checkbox-md" | "checkbox-sm" | "checkbox-xs"
}

const CB = (props: CheckboxProps) => {
    return (
        <input type="checkbox" checked={props.value} className={clsx("checkbox", props.name && props.size, props.variant ? props.variant : "checkbox-primary")} onChange={props.onChange} />
    )
}

const Checkbox = (props: CheckboxProps) => {
    const id = `checkbox-input-${props.name}`
    if(props.label){

    return (
        <div className={'flex flex-row items-center justify-center'}>
            <label className="label cursor-pointer flex flex-row justify-start items-center gap-4">
                <CB {...props} />
                <span className="label-text">{props.label}</span>
            </label>
        </div>
    )
    }
    return <CB {...props} />
}



export default Checkbox;
