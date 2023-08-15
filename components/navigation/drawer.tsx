"use client"
import React from 'react'
import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';
import { setDrawerOpen } from '#/state/slices/ui';
import Overlay from '../utility/overlay';
import DrawerContentSwitcher from '../meraki/drawerContent/switcher';
import clsx from 'clsx';



const connector = connect((state: RootState, props: any) => {
    return {
        open: state.UI.drawer.open,
        props: props
    }
})


interface DrawerProps {
    open: boolean
    authenticated: boolean
    email?: string
}

const Drawer = connector(({ open, authenticated, email }: DrawerProps) => {
    return (
        <>
            <div className={clsx("w-[260px] panel panelBorder transition-transform duration-300 h-screen fixed top-0 left-0 z-[1000] border-r rtl:border-r-0 rtl:border-l")}
                style={{
                    transform: open ? "translateX(0)" : "translateX(-100%)"
                }}
            >
                <DrawerContentSwitcher authenticated={authenticated} email={email} />
            </div>
            <Overlay onClick={() => store.dispatch(setDrawerOpen(false))} open={open} />
        </>
    )
})


Drawer.displayName = "Drawer"


export default Drawer;
