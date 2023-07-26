import { darkBackground, shadeGradient } from './variables'
export const darkTheme = "night"

export const darkEvelations = {
    ".elevate-100": {
        "background-color": `color-mix(in srgb, ${darkBackground} ${shadeGradient[0]}%, white)`,
        "box-shadow": "19px 19px 38px #0b1221, -19px -19px 38px #111c31"
    },
    ".elevate-200": {
        "background-color": `color-mix(in srgb, ${darkBackground} ${shadeGradient[1]}%, white)`,
        "box-shadow": "28px 28px 56px #0b1220, -28px -28px 56px #111c32"
    },
    ".elevate-300": {
        "background-color": `color-mix(in srgb, ${darkBackground} ${shadeGradient[2]}%, white)`,
        "box-shadow": "33px 33px 66px #090f1a, -33px -33px 66px #131f38"
    },
    ".elevate-400": {
        "background-color": `color-mix(in srgb, ${darkBackground} ${shadeGradient[3]}%, white)`,
        "box-shadow": "40px 40px 80px #080d17, -40px -40px 80px #14213b"
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
