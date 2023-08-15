"use client"
import Link from 'next/link';
import React, { ForwardedRef, forwardRef, useEffect } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import IconButton from '../ui/iconButton';
import NavbarButton from './navbarButton';
import { navbarButtons } from './navbarButtons';
import NavbarTitle from './navbarTitle';
import store, { RootState } from '#/state/store';
import clsx from 'clsx';
/* import { setDarkmode } from '#/actions/uiActions'; */
import { setDarkMode } from '#/state/slices/ui';



interface TopNavbarProps {
    ui: RootState['UI']
    authed: RootState['auth']['authenticated']
}

const TopNavbar = forwardRef(({ ui, authed }: TopNavbarProps, ref: ForwardedRef<HTMLDivElement>) => {
    const toggleDark = (darkMode: boolean) => {
        store.dispatch(setDarkMode(darkMode))
    }

    return (
        <div className={"top-0 absolute left-0 w-screen px-6 flex flex-row justify-between py-4 h-nav z-[999] bg-transparent"}>
            <div className={"flex-row w-full justify-between items-center flex-nowrap flex py-3 px-4"} ref={ref}>
                <Link href="/">
                    <NavbarTitle />
                </Link>
                <div className={'flex flex-row justify-center items-center gap-4'}>
                    <IconButton onClick={() => toggleDark(!ui.darkMode)} circle className={'relative flex justify-center items-center'}>
                        <label className={clsx("h-full w-full swap swap-rotate", ui?.darkMode && "swap-active")}>
                            <BsFillMoonStarsFill className={clsx('swap-on')} />
                            <BsFillSunFill className={clsx('swap-off')} />
                        </label>
                    </IconButton>
                    {navbarButtons.map((b, i) => <NavbarButton {...b} authed={authed} key={`navbar-button-${i}`} />)}
                </div>
            </div>
        </div>

    )
})


TopNavbar.displayName = "TopNavbar"


export default TopNavbar;
