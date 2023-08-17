import { ToastConfigType } from '#/types/uiTypes';
import React from 'react'
import ToastContainer from './toastContainer';
import ToastBody from './toastBody';
import SuccessIcon from '../icons/success';


const SuccessToast = (props: ToastConfigType) => {
    return (
        <ToastContainer redirect={props.clickRedirect}>
            <div className="flex items-center justify-center w-12 bg-green-500">
                <SuccessIcon className={"w-6 h-6 text-white fill-current"} />
            </div>
            <ToastBody id={props.toastId}>
                <span className={"font-semibold text-green-500 dark:text-green-400"}>{props.title}</span>
                <p className={"text-sm text-gray-600 dark:text-gray-200"}>{props.content}</p>
            </ToastBody>
        </ToastContainer>
    )
}


SuccessToast.displayName = "SuccessToast"


export default SuccessToast;

