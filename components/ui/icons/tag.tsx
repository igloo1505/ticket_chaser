import React from 'react'
import { IconProps } from './props';
import { HiOutlineHashtag } from 'react-icons/hi2';



const TagIcon = (props: IconProps) => {
    let params: { className?: string } = {}
    props.className && (params.className = props.className)
    return (
        <HiOutlineHashtag {...params} />
    )
}


TagIcon.displayName = "TagIcon"



export default TagIcon;
