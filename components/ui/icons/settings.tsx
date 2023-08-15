import React from 'react'
import { IconProps } from './props';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';



const SettingsIcon = (props: IconProps) => {
    let params: { className?: string } = {}
    props.className && (params.className = props.className)
    return (
        <HiOutlineCog6Tooth {...params} />
    )
}


SettingsIcon.displayName = "SettingsIcon"


export default SettingsIcon;

