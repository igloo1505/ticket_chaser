
import React from 'react'
import { IconProps } from './props';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';



const MessagesIcon = (props: IconProps) => {
    return (
        <HiOutlineChatBubbleBottomCenterText {...props} />
    )
}


MessagesIcon.displayName = "MessagesIcon"


export default MessagesIcon;
