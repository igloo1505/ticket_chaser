import { ToastConfigType } from '#/types/uiTypes';
import React from 'react'
import ToastCloseIcon from './closeIcon';
import ToastContainer from './toastContainer';
import ToastBody from './toastBody';
import ErrorIcon from '../icons/error';


const ErrorToast = (props: ToastConfigType) => {
    return (
        <ToastContainer redirect={props.clickRedirect}>
            <div className="flex items-center justify-center w-12 bg-red-500">
                <ErrorIcon className={"w-6 h-6 text-white fill-current"} />
            </div>
            <ToastBody id={props.toastId}>
                <span className={"font-semibold text-red-500 dark:text-red-400"}>{props.title}</span>
                <p className={"text-sm text-gray-600 dark:text-gray-200"}>{props.content}</p>
            </ToastBody>
        </ToastContainer>
    )
}


ErrorToast.displayName = "ErrorToast"


export default ErrorToast;
