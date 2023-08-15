
import React from 'react'
import { IconProps } from './props';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';



const MessagesIcon = (props: IconProps) => {
    let params: { className?: string } = {}
    props.className && (params.className = props.className)
    return (
        <HiOutlineChatBubbleBottomCenterText {...params} />
    )
}


MessagesIcon.displayName = "MessagesIcon"


export default MessagesIcon;
