import React from 'react'
import { IconProps } from './props';
import { HiOutlineHashtag } from 'react-icons/hi2';



const TagIcon = (props: IconProps) => {
    return (
        <HiOutlineHashtag {...props} />
    )
}


TagIcon.displayName = "TagIcon"



export default TagIcon;
