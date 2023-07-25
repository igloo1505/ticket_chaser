import {darkBackground, shadeGradient} from './variables'
export const darkTheme = "night"

export const darkEvelations = {
    ".elevate-100": {
        "background-color": `color-mix(in srgb, ${darkBackground} ${shadeGradient[0]}%, white)`
    },
    ".elevate-200": {
        "background-color": `color-mix(in srgb, ${darkBackground} ${shadeGradient[1]}%, white)`
    },
    ".elevate-300": {
        "background-color": `color-mix(in srgb, ${darkBackground} ${shadeGradient[2]}%, white)`
    },
    ".elevate-400": {
        "background-color": `color-mix(in srgb, ${darkBackground} ${shadeGradient[3]}%, white)`
    },

    ".elevate-500": {
        "background-color": `color-mix(in srgb, ${darkBackground} ${shadeGradient[4]}%, white)`
    },

    ".elevate-600": {
        "background-color": `color-mix(in srgb, ${darkBackground} ${shadeGradient[5]}%, white)`
    },
    ".elevate-700": {
        "background-color": `color-mix(in srgb, ${darkBackground} ${shadeGradient[6]}%, white)`
    },
    ".elevate-800": {
        "background-color": `color-mix(in srgb, ${darkBackground} ${shadeGradient[7]}%, white)`
    },
    ".elevate-900": {
        "background-color": `color-mix(in srgb, ${darkBackground} ${shadeGradient[8]}%, white)`
    },
}
