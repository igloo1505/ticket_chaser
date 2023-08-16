import React from 'react'
import ToastCloseIcon from './closeIcon'



interface ToastBodyProps {
    children: React.ReactNode
    id: string
}

const ToastBody = ({ children, id }: ToastBodyProps) => {
    return (
        <div className="px-4 py-2 -mx-3 relative w-full">
            <ToastCloseIcon id={id} />
            <div className="mx-3">
                {children}
            </div>
        </div>
    )
}


ToastBody.displayName = "ToastBody"


export default ToastBody;
