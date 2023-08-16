import React from 'react'
import { IconProps } from './props';
import { HiOutlineFunnel } from 'react-icons/hi2';



const FilterIcon = (props: IconProps) => {
    return (
        <HiOutlineFunnel {...props} />
    )
}


FilterIcon.displayName = "FilterIcon"


export default FilterIcon;

