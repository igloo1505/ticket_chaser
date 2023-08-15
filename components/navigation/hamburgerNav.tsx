import { toggleDrawer } from '#/state/slices/ui';
import store, { RootState } from '#/state/store';
import clsx from 'clsx';
import Hamburger from 'hamburger-react';
import React from 'react'



interface HamburgerNavBarProps {
    ui: RootState['UI']
}

const HamburgerNavBar = ({ ui }: HamburgerNavBarProps) => {
    return (
        <div className={clsx("flex fixed top-4 left-4 justify-center items-center transition-transform duration-300", ui.drawer.open && "translate-x-[188px]")} style={{
            zIndex: 99999999
        }}>
            <Hamburger toggled={ui?.drawer?.open || false} onToggle={() => store.dispatch(toggleDrawer())} />
        </div>
    )
}


HamburgerNavBar.displayName = "HamburgerNavBar"


export default HamburgerNavBar;
