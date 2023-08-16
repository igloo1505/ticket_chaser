import React from 'react'
import CloseIcon from '../icons/close';
import { removeToast } from '#/actions/notificationActions';



interface ToastCloseIconProps {
    id: string
}

const ToastCloseIcon = ({ id }: ToastCloseIconProps) => {
    return (
        <CloseIcon className={"w-4 h-4 absolute right-4 top-1 cursor-pointer"} onClick={() => removeToast(id)} />
    )
}


ToastCloseIcon.displayName = "ToastCloseIcon"


export default ToastCloseIcon;
