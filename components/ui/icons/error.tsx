import React from 'react'
import { IconProps } from './props';
import { HiBolt } from 'react-icons/hi2';



const ErrorIcon = (props: IconProps) => {
    return (
        <HiBolt {...props} />
    )
}


ErrorIcon.displayName = "ErrorIcon"


export default ErrorIcon;


