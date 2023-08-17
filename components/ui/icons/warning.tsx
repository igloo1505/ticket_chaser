import React from 'react'
import { IconProps } from './props';
import { HiBell } from 'react-icons/hi2';



const WarningIcon = (props: IconProps) => {
    return (
        <HiBell {...props} />
    )
}


WarningIcon.displayName = "WarningIcon"


export default WarningIcon;

