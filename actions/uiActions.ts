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
    const startOp = 0.7
    const endOp = 1
    const em = document.getElementById(id)
    if (typeof window === "undefined" || !em) return;
    const rect = em.getBoundingClientRect()
    if (!rect) return
    const vh = window.innerHeight
    const stop = window.scrollY
    const ratio = (vh - stop) / vh
    let overlay = document.getElementById(`${id}-title`)
    if (!overlay) return
    console.log("overlay: ", overlay)
    const newBg = `hsl(var(--n) / ${startOp + (endOp - startOp) * (1 - ratio)})`
    console.log("newBg: ", newBg)

    overlay.style.backgroundColor = newBg
}

export const isSoon = (d: Date) => {
    const diff = new Date(d).valueOf() - Date.now()
    console.log("diff: ", diff)
    return diff > 0 && diff < daysInMilliseconds(3)
}
