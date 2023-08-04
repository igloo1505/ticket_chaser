import { InterestType, MappedInterestType, initialInterests } from "#/data/interests"
import { InitialUIStateType } from "#/state/initial/ui"
import { setDarkMode, setViewportDataState } from "#/state/slices/ui"
import store from "#/state/store"
import { daysInMilliseconds } from "#/utils/dates/dayjs"
import { CATEGORY } from "@prisma/client"

type LoadedThemes = "dracula" | "light"

const themes: LoadedThemes[] = ["dracula", "light"]

export const setDarkmode = (darkMode: boolean) => {
    if (typeof window === "undefined") return;
    let t = themes[darkMode ? 0 : 1]
    document.body.setAttribute("data-theme", t)
    store.dispatch(setDarkMode(darkMode))
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

export const setViewportData = (data: InitialUIStateType['viewport']) => {
    handleUnderNavbarWrapper(data.navbarHeight)
    setViewportDataState(data)
}

interface ScrollPosType {
    top: number
    height: number
}

export const handleHeroScroll = (id: string): ScrollPosType | undefined => {
    const startOp = 0.5
    const endOp = 1
    const em = document.getElementById(id)
    const container = getScrollSnapContainer()
    if (typeof window === "undefined" || !em) return;
    const rect = em.getBoundingClientRect()
    if (!rect || !container) return
    const vh = window.innerHeight
    const stop = container.scrollTop
    const ratio = (vh - stop) / vh
    let overlay = document.getElementById(`${id}-overlay`)
    if (!overlay) return
    overlay.style.opacity = `${startOp + (endOp - startOp) * (1 - ratio)}`
}

export const isSoon = (d: Date) => {
    const diff = new Date(d).valueOf() - Date.now()
    console.log("diff: ", diff)
    return diff > 0 && diff < daysInMilliseconds(3)
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

const scrollDirection = (e: Event): "up" | "down" => {
    console.log("e?: ", e)
}

export const observeLandingScroll = (e: Event, navbar: React.RefObject<HTMLDivElement>) => {
    handleHeroScroll("hero-section-container")
    let em = document.getElementById("landing-scroll-snap-container")
    if (!em || !navbar.current) return
    navbar.current.style.transition = "all 0.3s ease-in-out"
    navbar.current.style.transform = em.scrollTop > 100 ? "translateY(-200px)" : "translateY(0px)"
    navbar.current.style.opacity = em.scrollTop > 100 ? "0" : "1"
    console.log("scrollDirection(e): ", scrollDirection(e))
}
