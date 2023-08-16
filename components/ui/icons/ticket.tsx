import React from 'react'
import { IconProps } from './props';
import { HiOutlineTicket } from 'react-icons/hi2';



const TicketIcon = (props: IconProps) => {
    return (
        <HiOutlineTicket {...props} />
    )
}


TicketIcon.displayName = "TicketIcon"


export default TicketIcon;
