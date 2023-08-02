"use client"
import { handleHeroScroll, setDarkmode, setViewportData } from '#/actions/uiActions'
import React, { useEffect, useRef } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';
import IconButton from '../ui/iconButton';
import clsx from 'clsx'
import NavbarButton, { NavbarButtonProps } from './navbarButton'
import { toggleDrawer } from '#/state/slices/ui'
import { navbarButtons } from './navbarButtons'
import { Spin as Hamburger } from 'hamburger-react'
import NavbarTitle from './navbarTitle';
import { usePathname, useRouter } from 'next/navigation';

const connector = connect((state: RootState, props: any) => ({
    ui: state.UI,
    props: props
}))

interface NavbarProps {
    ui: RootState['UI']
}



const Navbar = connector(({ ui }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null!)
    const pathname = usePathname()
    useEffect(() => {
        animateDarkmode(ui?.darkMode || true)
    }, [ui])
    const toggleDark = () => {
        setDarkmode(!ui.darkMode)
    }
    const heroObserver = () => {
        handleHeroScroll("hero-section-container")
    }
    const monitorViewport = () => {
        if (!ref.current) return
        if (pathname.toString() === "/") {
            heroObserver()
        }
        setViewportData({
            navbarHeight: ref.current.getBoundingClientRect().height,
            height: window.innerHeight,
            width: window.innerWidth

        })
    }


    useEffect(() => {
        if (typeof window === "undefined") return;
        window.addEventListener("resize", monitorViewport)
        window.addEventListener("scroll", heroObserver)
        return () => {
            window.removeEventListener("resize", monitorViewport)
            window.removeEventListener("scroll", heroObserver)
        }
    }, [])
    return (
        <div className="drawer z-[999999]">
            <input id="mainDrawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full px-6 flex flex-row justify-between py-4 h-nav">
                    <div className="flex justify-center items-center md:hidden" style={{
                        zIndex: 99999999
                    }}>
                        <Hamburger toggled={ui?.drawer?.open || false} onToggle={() => store.dispatch(toggleDrawer())} />
                    </div>
                    <div className="flex-row w-full justify-between items-center flex-nowrap hidden md:flex py-3 px-4" ref={ref}>
                        <NavbarTitle />
                        <div className={'flex flex-row justify-center items-center gap-4'}>
                            <IconButton onClick={toggleDark} circle className={'relative flex justify-center items-center'}>
                                <label className={clsx("h-full w-full swap swap-rotate", ui?.darkMode && "swap-active")}>
                                    <BsFillMoonStarsFill className={clsx('swap-on')} />
                                    <BsFillSunFill className={clsx('swap-off')} />
                                </label>
                            </IconButton>
                            {navbarButtons.map((b, i) => <NavbarButton {...b} key={`navbar-button-${i}`} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})


Navbar.displayName = "Navbar"


export default Navbar;

const animateDarkmode = (dark: boolean) => {
    if (typeof window === "undefined") return;
    let dm = document.getElementById("darkmode-icon")
    let lm = document.getElementById("lightmode-icon")
    if (!dm || !lm) return
    dm.style.transition = "transform 0.3s ease-in-out"
    lm.style.transition = "transform 0.3s ease-in-out"
    console.log("dm.style.rotate: ", dm.style.rotate)
    dm.style.transform = dark ? "rotateX(360deg)" : "0"
    lm.style.transform = dark ? "0" : "rotateX(360deg)"
}
