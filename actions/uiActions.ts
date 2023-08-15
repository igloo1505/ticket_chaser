"use client"
import { MappedInterestType, initialInterests } from "#/data/interests"
import { InitialUIStateType } from "#/state/initial/ui"
import { setEventsPanelState, setViewportDataState } from "#/state/slices/ui"
import store from "#/state/store"
import { eventsFilterOpenClass, eventsSearchPageInput, filterEventsToggleBtn, filterPanelsContainer } from "#/types/DomIds"
import { darkTheme } from "#/daisy/dark.js"
import { lightTheme } from "#/daisy/light.js"
import { gsap } from "gsap"

type LoadedThemes = typeof darkTheme | typeof lightTheme

const themes: LoadedThemes[] = [darkTheme, lightTheme]



export const setDarkmode = (darkMode: boolean) => {
    if (typeof window === "undefined") return;
    let t = themes[darkMode ? 0 : 1]
    document.body.setAttribute("data-theme", t)
    const htmlEm = document.querySelector("html")
    if (htmlEm) {
        if (!darkMode) {
            htmlEm.classList.remove("dark")
        }
        if (darkMode) {
            htmlEm.classList.add("dark")
        }
    }
}

type Animation = "rubberBand" | "shakeX" | "shakeY" | "headShake" | "swing" | "tada" | "wobble" | "heartBeat" | "bounce"

export const animateCSS = (id: string, animation: Animation, prefix = 'animate__') =>
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.getElementById(id);
        if (!node) return
        node.classList.add(`${prefix}animated`, animationName);
        function handleAnimationEnd(event: Event) {
            event.stopPropagation();
            if (!node) return
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

export const getInitialInterestList = (): MappedInterestType => {
    let interests = initialInterests
    let o = {} as MappedInterestType
    for (var i = 0; i < interests.length; i++) {
        let j = interests[i]
        if (!o[j.category]) {
            o[j.category] = []
        }
        o[j.category].push(j)
    }
    return o
}

export const handleUnderNavbarWrapper = (height: number) => {
    if (typeof window === "undefined") return;
    let ems = document.getElementsByClassName("underNavbarWrapper")
    for (var i = 0; i < ems.length; i++) {
        /// @ts-ignore
        if (ems[i]?.style) {
            /// @ts-ignore
            ems[i].style.minHeight = `calc(100vh-${height}px)`
        }
    }

}


interface ScrollPosType {
    top: number
    height: number
}

export const handleHeroScroll = (id: string): ScrollPosType | undefined => {
    const startOp = 0.5
    const endOp = 1
    const em = document.getElementById(id)
    if (typeof window === "undefined" || !em) return;
    const rect = em.getBoundingClientRect()
    if (!rect) return
    const vh = window.innerHeight * 1.1
    const stop = window.scrollY
    const ratio = (vh - stop) / vh
    let overlay = document.getElementById(`${id}-overlay`)
    if (!overlay) return
    const newOpacity = `${startOp + (endOp - startOp) * (1 - ratio)}`
    overlay.style.opacity = newOpacity
}


export const getScrollSnapContainer = () => {
    if (typeof window === "undefined") return;
    let em = document.getElementById("landing-scroll-snap-container")
    return em || false
}

export const scrollToSection = (section: number) => {
    if (typeof window === "undefined") return;
    const em = document.getElementById(`landing-scroll-section-${section}`)
    if (!em) return
    em.scrollTo({ top: 0 })
}

let prevScroll = 0
let minScrollTrigger = 20
const scrollDirection = (): { scrollDir: "up" | "down", diff: number } => {
    const diff = window.scrollY - prevScroll
    const val = prevScroll < window.scrollY ? "down" : "up"
    prevScroll = window.scrollY
    return { scrollDir: val, diff: diff }
}

export const observeLandingScroll = (navbar: React.RefObject<HTMLDivElement>) => {
    handleHeroScroll("hero-section-container")
    const { scrollDir, diff } = scrollDirection()
    // if (scrollDir === "down") {
    //     e.preventDefault()
    //     e.stopPropagation()
    // }
    if (!navbar.current) return
    navbar.current.style.transition = "all 0.3s ease-in-out"
    navbar.current.style.transform = window.scrollY > 100 ? "translateY(-200px)" : "translateY(0px)"
    navbar.current.style.opacity = window.scrollY > 100 ? "0" : "1"
    if (diff >= minScrollTrigger) {
        console.log("SHOULD SCROLL")
    }
    // if (Boolean(window.scrollY <= window.innerHeight * 0.3 && scrollDir === "down" && diff > minScrollTrigger) || Boolean(window.scrollY >= window.innerHeight * 0.3 && scrollDir === "down")) {
    //     isScrolling = true
    //     let em = document.getElementById("landing-scroll-section-2")
    // scroll.animateScroll(em)
    // isScrolling = false
    // if (!em) return
    // em.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
    // em.scrollIntoView({ behavior: "smooth" })
    // }
}

const searchInputWidthDiff = 60
const searchInputPadding = 50
const closeEventFilterPanel = (em: HTMLDivElement, minimal?: boolean) => {
    const pw = getEventsPanelWidth()
    if (!minimal) {

        gsap.fromTo(`#${filterPanelsContainer}`, {
            width: window.innerWidth,
            x: 0
        }, {
            width: window.innerWidth + pw,
            x: -pw
        })
        gsap.fromTo(`#${filterEventsToggleBtn}`, {
            x: 0,
            rotate: 180
        }, {
            x: 60,
            rotate: 0
        })
        gsap.fromTo(`#${eventsSearchPageInput}`, {
            width: window.innerWidth - pw - searchInputPadding
        }, {
            width: window.innerWidth - searchInputWidthDiff - searchInputPadding
        })
    }

    if (minimal) {
        gsap.to(`#${filterPanelsContainer}`, {
            width: window.innerWidth + pw,
            x: -pw,
            duration: 0
        })
        gsap.to(`#${filterEventsToggleBtn}`, {
            x: 60,
            rotate: 0,
            duration: 0
        })
        gsap.to(`#${eventsSearchPageInput}`, {
            width: window.innerWidth - searchInputWidthDiff - searchInputPadding,
            duration: 0
        })
    }
    em.classList.add(eventsFilterOpenClass)
    store.dispatch(setEventsPanelState(false))
}


const openEventFilterPanel = (em: HTMLDivElement, minimal?: boolean) => {
    const pw = getEventsPanelWidth()
    if (!minimal) {

        gsap.fromTo(`#${filterPanelsContainer}`, {
            width: window.innerWidth + pw,
            x: -pw
        }, {
            width: window.innerWidth,
            x: 0
        })
        gsap.fromTo(`#${filterEventsToggleBtn}`, {
            x: 60,
            rotate: 0
        }, {
            x: 0,
            rotate: 180
        })
        // const inputContainer = document.getElementById(`${eventsSearchPageInput}-container`)?.getBoundingClientRect()
        // if (!inputContainer) return
        gsap.fromTo(`#${eventsSearchPageInput}`, {
            width: window.innerWidth - searchInputWidthDiff - searchInputPadding
        }, {
            width: window.innerWidth - pw - searchInputPadding
        })
    }
    if (minimal) {
        gsap.to(`#${filterPanelsContainer}`, {
            width: window.innerWidth,
            x: 0,
            duration: 0
        })
        gsap.to(`#${filterEventsToggleBtn}`, {
            x: 0,
            rotate: 180,
            duration: 0
        })
        gsap.to(`#${eventsSearchPageInput}`, {
            width: window.innerWidth - pw - searchInputPadding,
            duration: 0
        })
    }
    em.classList.remove(eventsFilterOpenClass)
    store.dispatch(setEventsPanelState(true))
}

export const toggleEventsPageFilterPanel = (open: boolean | "toggle") => {
    if (typeof window === "undefined") return;
    let em = document.getElementById(filterPanelsContainer) as HTMLDivElement
    if (!em) return
    if (open === "toggle") {
        let isOpen = em.classList.contains(eventsFilterOpenClass)
        if (isOpen) {
            closeEventFilterPanel(em)
        }
        if (!isOpen) {
            openEventFilterPanel(em)
        }
        return
    }
    if (open) {
        openEventFilterPanel(em)
        return
    }
    closeEventFilterPanel(em)
}


export const handlePanelResize = () => {
    let em = document.getElementById(filterPanelsContainer) as HTMLDivElement
    if (!em) return
    closeEventFilterPanel(em, true)
}

export const getEventsPanelWidth = () => {
    return 380
}



export const setViewportData = (data: InitialUIStateType['viewport']) => {
    console.log("data: ", data)
    handleUnderNavbarWrapper(data.navbarHeight)
    store.dispatch(setViewportDataState(data))
}
