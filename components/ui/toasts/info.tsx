import { ToastConfigType } from '#/types/uiTypes';
import { dataThemeDark, dataThemeLight } from '#/utils/ui';
import clsx from 'clsx';
import React from 'react'
import ToastCloseIcon from './closeIcon';
import ToastContainer from './toastContainer';
import ToastBody from './toastBody';
import InfoIcon from '../icons/info';


const InfoToast = (props: ToastConfigType) => {
    return (
        <ToastContainer redirect={props.clickRedirect}>
            <div className="flex items-center justify-center w-12 bg-blue-500">
                <InfoIcon className={"w-6 h-6 text-white fill-current"} />
            </div>
            <ToastBody id={props.toastId}>
                <span className={"font-semibold text-blue-500 dark:text-blue-400"}>{props.title}</span>
                <p className={"text-sm text-gray-600 dark:text-gray-200"}>{props.content}</p>
            </ToastBody>
        </ToastContainer>
    )
}


InfoToast.displayName = "InfoToast"


export default InfoToast;
