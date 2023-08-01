import { showDefaultToast } from "#/state/slices/ui"
import store, { RootState } from "#/state/store"


const minPassLength = 8
export const twoValuesMatch = (val1: string, val2: string, validateMin: number = 3) => {
    if (val1.length < validateMin || val2.length < validateMin) {
        return true
    }
    return val1 === val2
}

export const minimumCharacters = (val: string, minLength: number = 8, validateMin: number = 3) => val.length > validateMin ? val.length > minLength : true


export const validatePassword = (val1: string, val2: string): null | string => {
    if (val1.length === 0 && val2.length === 0) return "A password is required."
    if (val1.length !== 0 && val2.length === 0) return "Please confirm your password."
    if (val1.length < minPassLength || val2.length < minPassLength) return `Passwords must be at least ${minPassLength} characters`
    let match = twoValuesMatch(val1, val2, 0)
    if (!match) {
        return "Passwords do not match."
    }
    let hasMin = minimumCharacters(val1, 8, 0)
    if (!hasMin) {
        return "password must be at least 8 characters."
    }
    return null
}

export const validateEmail = (val: string) => {
    const validDomains = [
        "com",
        "edu",
        "gov",
        "io",
        "net"
    ]
    const invalidMessage = "Please enter a valid email."
    if (val.indexOf("@") === -1 || val.indexOf(".") === -1) return invalidMessage
    let _dom = val.split(".")
    let dom = _dom[_dom.length - 1]
    if (validDomains.indexOf(dom) === -1) return invalidMessage
    return null
}

export const validateFormInput = (data: RootState['form']['signUp']['data']) => {
    if (data.password !== data.confirmPassword) {
        store.dispatch(showDefaultToast("passwordsDontMatch"))
        return false
    }
    return true
}

