import React from 'react'
import { IconProps } from './props';
import { HiOutlineRectangleGroup } from 'react-icons/hi2';



const DashboardIcon = (props: IconProps) => {
    return (
        <HiOutlineRectangleGroup {...props} />
    )
}


DashboardIcon.displayName = "DashboardIcon"


export default DashboardIcon;
