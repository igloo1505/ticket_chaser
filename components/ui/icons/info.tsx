import React from 'react'
import { IconProps } from './props';
import { HiInformationCircle } from 'react-icons/hi2';



const InfoIcon = (props: IconProps) => {
    return (
        <HiInformationCircle {...props} />
    )
}


InfoIcon.displayName = "InfoIcon"


export default InfoIcon;
