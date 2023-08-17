import { ToastConfigType } from '#/types/uiTypes';
import React from 'react'
import ToastContainer from './toastContainer';
import ToastBody from './toastBody';
import WarningIcon from '../icons/warning';


const WarningToast = (props: ToastConfigType) => {
    return (
        <ToastContainer redirect={props.clickRedirect}>
            <div className="flex items-center justify-center w-12 bg-yellow-400">
                <WarningIcon className={"w-6 h-6 text-white fill-current"} />
            </div>
            <ToastBody id={props.toastId}>
                <span className="font-semibold text-yellow-500 dark:text-yellow-300">{props.title}</span>
                <p className={"text-sm text-gray-600 dark:text-gray-200"}>{props.content}</p>
            </ToastBody>
        </ToastContainer>
    )
}


WarningToast.displayName = "WarningToast"


export default WarningToast;
