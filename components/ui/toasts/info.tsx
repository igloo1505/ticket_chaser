import { ToastConfigType } from '#/types/uiTypes';
import { dataThemeDark, dataThemeLight } from '#/utils/ui';
import clsx from 'clsx';
import React from 'react'


const InfoToast = (props: ToastConfigType) => {
    return (
        <div className={clsx("flex w-full max-w-sm overflow-hidden rounded-lg shadow-md ", dataThemeDark(["bg-gray-800"]), dataThemeLight("bg-white"))}>
            <div className="flex items-center justify-center w-12 bg-blue-500">
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                </svg>
            </div>
            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className={clsx("font-semibold", dataThemeDark("text-blue-400"), dataThemeLight("text-blue-500"))}>{props.title}</span>
                    <p className={clsx("text-sm ", dataThemeDark("text-gray-200"), dataThemeLight("text-gray-600"))}>{props.content}</p>
                </div>
            </div>
        </div>
    )
}


InfoToast.displayName = "InfoToast"


export default InfoToast;
