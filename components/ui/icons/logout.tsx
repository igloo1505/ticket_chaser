import React from 'react'
import { IconProps } from './props';
import { HiOutlineLockClosed } from 'react-icons/hi2';



const LogoutIcon = (props: IconProps) => {
    return (
        <HiOutlineLockClosed {...props} />
    )
}


LogoutIcon.displayName = "LogoutIcon"


export default LogoutIcon;

