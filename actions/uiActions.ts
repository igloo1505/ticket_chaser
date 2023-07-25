import { setDarkMode } from "#/state/slices/ui"
import store from "#/state/store"

type LoadedThemes = "dracula" | "light"

const themes: LoadedThemes[] = ["dracula", "light"]

export const setDarkmode = (darkMode: boolean) => {
    if (typeof window === "undefined") return;
    let t = themes[darkMode ? 0 : 1]
    document.body.setAttribute("data-theme", t)
    store.dispatch(setDarkMode(darkMode))
}

