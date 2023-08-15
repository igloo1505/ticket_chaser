import React from 'react'
import { IconProps } from './props';
import { HiOutlineFunnel } from 'react-icons/hi2';



const FilterIcon = (props: IconProps) => {
    let params: { className?: string } = {}
    props.className && (params.className = props.className)
    return (
        <HiOutlineFunnel {...params} />
    )
}


FilterIcon.displayName = "FilterIcon"


export default FilterIcon;

