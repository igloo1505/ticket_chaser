import React from 'react'
import { IconProps } from './props';
import { HiOutlineXMark } from 'react-icons/hi2';



const CloseIcon = (props: IconProps) => {
    return (
        <HiOutlineXMark {...props} />
    )
}


CloseIcon.displayName = "CloseIcon"


export default CloseIcon;

