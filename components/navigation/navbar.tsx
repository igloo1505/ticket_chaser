"use client"
import { observeLandingScroll, setDarkmode, setViewportData } from '#/actions/uiActions'
import React, { useEffect, useRef, useState } from 'react'
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
import ui, { shouldHamburger } from '#/state/initial/ui';
import Link from 'next/link';
import HamburgerNavBar from './hamburgerNav';
import TopNavbar from './topNavbar';

const connector = connect((state: RootState, props: any) => ({
    ui: state.UI,
    authed: state.auth.authenticated,
    props: props
}))

interface NavbarProps {
    ui: RootState['UI']
    authed: RootState['auth']['authenticated']
}


type NavbarTypes = "wide" | "hamburger" | "none"



const Navbar = connector(({ ui, authed }: NavbarProps) => {
    const [navbarType, setNavbarType] = useState<NavbarTypes>("none")
    const ref = useRef<HTMLDivElement>(null!)
    const pathname = usePathname()
    useEffect(() => {
        animateDarkmode(ui?.darkMode || true)
    }, [ui])
    const heroObserver = (e: Event) => {
        if (pathname.toString() !== "/") return
        observeLandingScroll(e, ref)
    }
    const monitorViewport = (e?: Event) => {
        if (e) {
            heroObserver(e)
        }
        setViewportData({
            navbarHeight: ref.current ? ref.current.getBoundingClientRect().height : 96,
            height: window.innerHeight,
            width: window.innerWidth

        })
    }


    useEffect(() => {
        if (typeof window === "undefined") return;
        monitorViewport()
        window.addEventListener("resize", monitorViewport)
        window.document.addEventListener("scroll", heroObserver)
        return () => {
            window.removeEventListener("resize", monitorViewport)
            window.document.removeEventListener("scroll", heroObserver)
        }
    }, [])

    useEffect(() => {
        setNavbarType(Boolean(shouldHamburger() || ui.hamburger) ? "hamburger" : "wide")

    }, [ui.viewport])

    return (
        <>
            {navbarType === "hamburger" && <HamburgerNavBar ui={ui} authed={authed} />}
            {navbarType === "wide" && <TopNavbar ui={ui} authed={authed} ref={ref} />}
        </>
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
