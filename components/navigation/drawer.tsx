"use client"
import React from 'react'
import Link from 'next/link'
import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';
import { setDrawerOpen } from '#/state/slices/ui';
import { navbarButtons } from './navbarButtons';
import { NavbarButtonProps } from './navbarButton';
import Overlay from '../utility/overlay';



const connector = connect((state: RootState, props: any) => {
    console.log("state: ", state)
    return {
        open: state.UI.drawer.open,
        props: props
    }
})


interface DrawerProps {
    open: boolean
}


const DrawerItem = ({ item }: { item: NavbarButtonProps }) => {
    return (
        <li>
            <Link href={item.href}>{item.label}</Link>
        </li>
    )
}

const Drawer = connector(({ open }: DrawerProps) => {
    const setDrawer = (open: boolean) => {
        store.dispatch(setDrawerOpen(open))
    }
    return (
        <>
            <div className="w-auto transition-transform duration-300 h-screen bg-base-200 fixed top-0 left-0 pt-16 z-[999]"
                style={{
                    transform: open ? "translateX(0)" : "translateX(-100%)"
                }}
            >
                <ul className="p-4 w-80 h-full">
                    {navbarButtons.map((b, i) => {
                        return <DrawerItem item={b} key={`drawer-link-${i}`} />
                    })}
                </ul>

            </div>
            <Overlay onClick={() => store.dispatch(setDrawerOpen(false))} open={open} />
        </>
    )
})


Drawer.displayName = "Drawer"


export default Drawer;
