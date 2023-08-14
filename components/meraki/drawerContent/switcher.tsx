import NavbarTitle from '#/components/navigation/navbarTitle'
import Link from 'next/link'
import React from 'react'
import DrawerContentAuthenticated from './authenticated'
import DrawerContentUnAuthenticated from './unauthenticated'
import store from '#/state/store'
import { setDrawerOpen } from '#/state/slices/ui'
import { dataThemeDark, dataThemeLight } from '#/utils/ui'
import clsx from 'clsx'



interface DrawerContentSwitcherProps {
    authenticated: boolean
}

const DrawerContentSwitcher = (props: DrawerContentSwitcherProps) => {
    return (
        <aside className={clsx("flex flex-col data-dark:bg-gray-900 data-light:bg-gray-50 w-64 h-screen px-4 py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l")}>
            <Link href="/" className={"w-fit"} onClick={() => store.dispatch(setDrawerOpen(false))}>
                <NavbarTitle className={"text-primary tracking-wider"} />
            </Link>
            <div className="relative mt-6">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </span>
                <input className={clsx("w-full py-2 pl-10 pr-2 border rounded-md focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring dark:text-gray-300 dark:bg-gray-900", dataThemeDark(["text-gray-300", "bg-gray-900", "focus:border-blue-300"]), dataThemeLight(["text-gray-700", "bg-white", "focus:border-blue-300"]))} type="text" placeholder="Search" />
            </div>
            {props.authenticated ? <DrawerContentAuthenticated /> : <DrawerContentUnAuthenticated />}
        </aside>

    )
}


DrawerContentSwitcher.displayName = "DrawerContentSwitcher"


export default DrawerContentSwitcher;
