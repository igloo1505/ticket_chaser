import React from 'react'
import { IconProps } from './props';
import { HiHandThumbUp } from 'react-icons/hi2';



const SuccessIcon = (props: IconProps) => {
    return (
        <HiHandThumbUp {...props} />
    )
}


SuccessIcon.displayName = "SuccessIcon"


export default SuccessIcon;

