import React from 'react'
import { IconProps } from './props';
import { HiOutlineLockClosed } from 'react-icons/hi2';



const LogoutIcon = (props: IconProps) => {
    let params: { className?: string } = {}
    props.className && (params.className = props.className)
    return (
        <HiOutlineLockClosed {...params} />
    )
}


LogoutIcon.displayName = "LogoutIcon"


export default LogoutIcon;

