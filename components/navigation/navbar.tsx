"use client"
import { setDarkmode } from '#/actions/uiActions'
import React, { useEffect } from 'react'
import Button from '../ui/button'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { RootState } from '#/state/store';
import { connect } from 'react-redux';
import IconButton from '../ui/iconButton';
import clsx from 'clsx'
import NavbarButton, { NavbarButtonProps } from './navbarButton'

const connector = connect((state: RootState, props: any) => ({
    ui: state.UI,
    props: props
}))

interface NavbarProps {
    ui: RootState['UI']
}

const navbarButtons: NavbarButtonProps[] = [

    {
        href: "/login",
        label: "Login",
        displayAuth: "unauthenticated"
    },
    {
        href: "/admin",
        label: "Admin Login",
        displayAuth: "development"
    },
]

/* const Navbar = connector(({ ui }: NavbarProps) => { */
/*     useEffect(() => { */
/*         animateDarkmode(ui.darkMode) */
/*     }, [ui.darkMode]) */
/*     const toggleDark = () => { */
/*         setDarkmode(!ui.darkMode) */
/*     } */

/*     return ( */
/*         <div className={'flex flex-row justify-between items-center px-6 py-6'}> */
/*             <div className={'text-2xl'}>Title or Logo Here</div> */
/*             <div className={'flex flex-row justify-center items-center gap-4'}> */
/*                 <IconButton onClick={toggleDark} circle className={'relative flex justify-center items-center'}> */
/*                     <label className={clsx("h-full w-full swap swap-rotate", ui.darkMode && "swap-active")}> */
/*                     <BsFillMoonStarsFill  className={clsx('swap-on')} /> */
/*                     <BsFillSunFill className={clsx('swap-off')} /> */
/*                     </label> */
/*                 </IconButton> */
/*                 {navbarButtons.map((b, i) => <NavbarButton {...b} key={`navbar-button-${i}`}/>)} */
/*             </div> */
/*         </div> */
/*     ) */
/* }) */


const Navbar = connector(({ ui }: NavbarProps) => {
    useEffect(() => {
        animateDarkmode(ui.darkMode)
    }, [ui.darkMode])
    const toggleDark = () => {
        setDarkmode(!ui.darkMode)
    }
    return (
        <div className="drawer">
            <input id="mainDrawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar">
                    <div className="flex-none md:hidden">
                        <label htmlFor="mainDrawer" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-row w-full justify-between items-center flex-nowrap hidden md:flex py-3 px-4">
                        <div className={'text-xl pl-2'}>Title or Logo Here</div>
                        <div className={'flex flex-row justify-center items-center gap-4'}>
                            <IconButton onClick={toggleDark} circle className={'relative flex justify-center items-center'}>
                                <label className={clsx("h-full w-full swap swap-rotate", ui.darkMode && "swap-active")}>
                                    <BsFillMoonStarsFill className={clsx('swap-on')} />
                                    <BsFillSunFill className={clsx('swap-off')} />
                                </label>
                            </IconButton>
                            {navbarButtons.map((b, i) => <NavbarButton {...b} key={`navbar-button-${i}`} />)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="drawer-side z-[999]">
                <label htmlFor="mainDrawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-fit h-full bg-base-100">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>

                </ul>

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
