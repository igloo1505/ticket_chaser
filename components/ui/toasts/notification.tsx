import { ToastConfigType } from '#/types/uiTypes'
import { dataThemeDark, dataThemeLight } from '#/utils/ui'
import clsx from 'clsx'
import { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



interface NotificationToastProps extends Omit<ToastConfigType, "content"> {
    avatar?: string
    content: string | React.ReactNode
}


export const NotificationLinkText = ({ children, href }: { href: Route, children: React.ReactNode }) => {
    return (
        <Link className={clsx("hover:text-blue-400 hover:underline", dataThemeDark("text-blue-300"), dataThemeLight("text-blue-500"))} href={href}>{children}</Link>
    )
}

const NotificationToast = (props: NotificationToastProps) => {
    return (
        <div className={clsx("flex w-full max-w-sm overflow-hidden rounded-lg shadow-md ", dataThemeDark(["bg-gray-800"]), dataThemeLight("bg-white"))}>
            <div className={clsx("w-2", dataThemeDark("bg-gray-900"), dataThemeLight("bg-gray-800"))} />
            <div className="flex items-center px-2 py-3">
                {props.avatar && <Image className="object-cover w-10 h-10 rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" />}
                <div className="mx-3">
                    <p className={clsx(dataThemeLight("text-gray-600"), dataThemeDark("text-gray-200"))}>{props.content}</p>
                </div>
            </div>
        </div>
    )
}


NotificationToast.displayName = "NotificationToast"


export default NotificationToast;
