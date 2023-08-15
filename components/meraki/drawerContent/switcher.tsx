import NavbarTitle from '#/components/navigation/navbarTitle'
import Link from 'next/link'
import React from 'react'
import DrawerContentAuthenticated from './authenticated'
import DrawerContentUnAuthenticated from './unauthenticated'
import store from '#/state/store'
import { setDrawerOpen } from '#/state/slices/ui'
import { dataThemeDark, dataThemeLight } from '#/utils/ui'
import clsx from 'clsx'
import DrawerSearchInput from './drawerSearchInput'



interface DrawerContentSwitcherProps {
    authenticated: boolean
    email?: string
}
const DrawerContentSwitcher = (props: DrawerContentSwitcherProps) => {
    return (
        <aside className={clsx("flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto")}>
            <Link href="/" className={"w-fit"} onClick={() => store.dispatch(setDrawerOpen(false))}>
                <NavbarTitle className={"text-primary tracking-wider"} />
            </Link>
            <DrawerSearchInput />
            {props.authenticated ? <DrawerContentAuthenticated email={props.email} /> : <DrawerContentUnAuthenticated />}
        </aside>

    )
}


DrawerContentSwitcher.displayName = "DrawerContentSwitcher"


export default DrawerContentSwitcher;
