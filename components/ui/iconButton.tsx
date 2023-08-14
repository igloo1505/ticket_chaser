import React from 'react'
import { ButtonProps } from './button'
import clsx from 'clsx'


interface IconButtonProps extends Omit<ButtonProps, "label"> {
    children: React.ReactNode
    circle?: boolean
}

const IconButton = (props: IconButtonProps) => {
    const _varients = props.variants ? props.variants.join(" ") : "btn-primary"

    return (
        <button className={clsx('btn', _varients, props.className && props.className, props.circle && "rounded-[50%]")} onClick={props.onClick}>
            {props.children}
        </button>
    )
}


IconButton.displayName = "IconButton"


export default IconButton;
