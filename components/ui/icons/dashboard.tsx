import React from 'react'
import { IconProps } from './props';
import { HiOutlineRectangleGroup } from 'react-icons/hi2';



const DashboardIcon = (props: IconProps) => {
    let params: { className?: string } = {}
    props.className && (params.className = props.className)
    return (
        <HiOutlineRectangleGroup {...params} />
    )
}


DashboardIcon.displayName = "DashboardIcon"


export default DashboardIcon;
