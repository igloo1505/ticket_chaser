import { InterestType, MappedInterestType, initialInterests } from "#/data/interests"
import { setDarkMode } from "#/state/slices/ui"
import store from "#/state/store"
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
    let interests =  initialInterests
    let o = {} as MappedInterestType
    for(var i = 0; i < interests.length; i ++){
        let j = interests[i]
        if(!o[j.category]){
            o[j.category] = []
        }
        o[j.category].push(j)
    }
    return o
}
