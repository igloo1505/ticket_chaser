import React from 'react'
import { IconProps } from './props';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';



const SettingsIcon = (props: IconProps) => {
    return (
        <HiOutlineCog6Tooth {...props} />
    )
}


SettingsIcon.displayName = "SettingsIcon"


export default SettingsIcon;

