"use client";
import {
    observeLandingScroll,
    setDarkmode,
    setViewportData,
} from "#/actions/uiActions";
import React, { useEffect, useRef, useState } from "react";
import store, { RootState } from "#/state/store";
import { connect } from "react-redux";
import { usePathname } from "next/navigation";
import { shouldHamburger } from "#/state/initial/ui";
import HamburgerNavBar from "./hamburgerNav";
import TopNavbar from "./topNavbar";
import { setNavbarType } from "#/state/slices/ui";

const connector = connect((state: RootState, props: any) => ({
    ui: state.UI,
    hamburger: state.UI.hamburger,
    props: props,
}));

interface NavbarProps {
    ui: RootState["UI"];
    hamburger: boolean | null
    authed: RootState["auth"]["authenticated"];
    email?: string
}


const Navbar = connector(({ ui, authed, hamburger }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null!);
    const pathname = usePathname();
    useEffect(() => {
        console.log("setting dark mode")
        setDarkmode(ui.darkMode);
    }, [ui.darkMode]);

    useEffect(() => {
        const hamburger = shouldHamburger(authed);
        console.log("hamburger: ", hamburger)
        store.dispatch(setNavbarType(hamburger))
    }, [ui.viewport, authed]);

    useEffect(() => {
        animateDarkmode(ui?.darkMode || true);
    }, [ui.darkMode]);

    const heroObserver = () => {
        if (pathname.toString() !== "/") return;
        observeLandingScroll(ref);
    };

    const monitorViewport = () => {
        heroObserver();
        setViewportData({
            navbarHeight: ref.current
                ? ref.current.getBoundingClientRect().height
                : 96,
            height: window.innerHeight,
            width: window.innerWidth,
        });
    };

    useEffect(() => {
        if (typeof window === "undefined") return;
        monitorViewport();
        window.addEventListener("resize", monitorViewport);
        window.document.addEventListener("scroll", heroObserver);
        return () => {
            window.removeEventListener("resize", monitorViewport);
            window.document.removeEventListener("scroll", heroObserver);
        };
    }, []);

    return (
        <>
            {hamburger === true && <HamburgerNavBar ui={ui} />}
            {hamburger === false && <TopNavbar ui={ui} authed={authed} ref={ref} />}
        </>
    );
});

Navbar.displayName = "Navbar";

export default Navbar;

const animateDarkmode = (dark: boolean) => {
    console.log("animateDarkMode")
    if (typeof window === "undefined") return;
    let dm = document.getElementById("darkmode-icon");
    let lm = document.getElementById("lightmode-icon");
    if (!dm || !lm) return;
    dm.style.transition = "transform 0.3s ease-in-out";
    lm.style.transition = "transform 0.3s ease-in-out";
    console.log("dm.style.rotate: ", dm.style.rotate);
    dm.style.transform = dark ? "rotateX(360deg)" : "0";
    lm.style.transform = dark ? "0" : "rotateX(360deg)";
};
