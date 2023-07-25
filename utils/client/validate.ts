export const twoValuesMatch = (val1: string, val2: string, validateMin: number = 3) => {
    if(val1.length < validateMin || val2.length < validateMin) {
        return true
    }
    return val1 === val2
}

export const minimumCharacters = (val: string, minLength: number = 8, validateMin: number = 3) => val.length > validateMin ? val.length > minLength : true


export const validatePassword = (val1: string, val2: string): null | string => {
    let match = twoValuesMatch(val1, val2, 0)
    if(!match){
        return "Passwords do not match."
    }
    let hasMin =  minimumCharacters(val1, 8, 0)
    if(!hasMin){
        return "password must be at least 8 characters."
    }
    return null
}
