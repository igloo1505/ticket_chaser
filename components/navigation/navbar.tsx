"use client"
import { setDarkmode, setViewportData } from '#/actions/uiActions'
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
    authed: state.auth.authenticated,
    props: props
}))

interface NavbarProps {
    ui: RootState['UI']
    authed: RootState['auth']['authenticated']
}



const Navbar = connector(({ ui, authed }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null!)
    const pathname = usePathname()
    useEffect(() => {
        animateDarkmode(ui?.darkMode || true)
    }, [ui])
    const toggleDark = () => {
        setDarkmode(!ui.darkMode)
    }
    const heroObserver = (e: Event) => {
        if (pathname.toString() !== "/") return
        /* observeLandingScroll(e, ref) */
    }
    const monitorViewport = (e: Event) => {
        if (!ref.current) return
        heroObserver(e)
        setViewportData({
            navbarHeight: ref.current.getBoundingClientRect().height,
            height: window.innerHeight,
            width: window.innerWidth

        })
    }


    useEffect(() => {
        if (typeof window === "undefined") return;
        window.addEventListener("resize", monitorViewport)
        window.document.addEventListener("scroll", heroObserver)
        return () => {
            window.removeEventListener("resize", monitorViewport)
            window.document.removeEventListener("scroll", heroObserver)
        }
    }, [])
    return (
        <div className="absolute top-0 left-0 w-screen px-6 flex flex-row justify-between py-4 h-nav z-[99999] bg-transparent">
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
                    {navbarButtons.map((b, i) => <NavbarButton {...b} authed={authed} key={`navbar-button-${i}`} />)}
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
