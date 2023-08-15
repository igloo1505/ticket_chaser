"use client"
import { setDrawerOpen, toggleDarkMode } from '#/state/slices/ui'
import store from '#/state/store'
import clsx from 'clsx'
import React from 'react'
import { HiSparkles, HiSun, HiMoon } from 'react-icons/hi2'

import { RootState } from '#/state/store';
import { connect } from 'react-redux';

const connector = connect((state: RootState, props: any) => ({
    darkMode: state.UI.darkMode,
    props: props
}))

const DrawerDarkToggle = connector(({ darkMode }: { darkMode: boolean }) => {
    const handleClick = () => {
        store.dispatch(toggleDarkMode())
        store.dispatch(setDrawerOpen(false))
    }
    return (
        <a className={clsx("flex cursor-pointer items-center w-full px-4 py-2 transition-colors duration-300 transform rounded-md hover:text-gray-700 hover:bg-gray-100 text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200")}
            onClick={handleClick}
        >
            <HiSparkles className={'swap-on block dark:hidden'} />
            <HiSun className={'swap-off hidden dark:block'} />
            <span className="mx-4 font-medium">{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </a>
    )
})


DrawerDarkToggle.displayName = "DrawerDarkToggle"


export default DrawerDarkToggle;
