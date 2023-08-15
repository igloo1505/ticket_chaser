import React from 'react'
import { IconProps } from './props';
import { HiOutlineTicket } from 'react-icons/hi2';



const TicketIcon = (props: IconProps) => {
    let params: { className?: string } = {}
    props.className && (params.className = props.className)
    return (
        <HiOutlineTicket {...params} />
    )
}


TicketIcon.displayName = "TicketIcon"


export default TicketIcon;
