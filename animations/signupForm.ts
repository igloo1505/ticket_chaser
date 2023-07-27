import gsap from 'gsap'
import {signupCardId} from "#/components/pageSpecific/login/authenticateCard.tsx"
import React from 'react'

export const multiStepSignupFormContainer = "multi-step-signup-container-id"

const signupStepTranslateMap: {[k in TransitionStateType]: string} = {
    left:  "-100vw",
    right:"100vw",
    active: "0px"
}


const getNewSignupCardDimensions = (rect) => {
    return {
        width: rect.width,
        height: rect.height
    }
}

const setSignupCardSize = (tl: ReturnType<gsap.timeline>, containerRect, newSize: {width: number, height: number}, duration?: number) => {
    tl.fromTo(`#${multiStepSignupFormContainer}`, {
            width: containerRect.width,
            height: containerRect.height
        }, {
                width: newSize.width,
                height: newSize.height,
                duration: typeof duration === "undefined" ? 0.3 : duration,
                ease: "power4.out"
            })
            return tl
    }


export const animateSignupCardDimensions = async (ref: React.RefObject<HtmlDivElement>): Promise<boolean> => {
    console.log("ref.current!!!", ref.current)
    ref.current.style.display = "flex"
    const rect = ref.current.getBoundingClientRect()
    const tl = gsap.timeline({onComplete: () => {
        ref.current.style.transform = "translateX(0px)"
    }})
    const formContainer = document.getElementById(multiStepSignupFormContainer)
    const containerRect = formContainer?.getBoundingClientRect()
    const signupCard = document.getElementById(signupCardId)
    if(!formContainer || !rect || !containerRect || !signupCard) return 
    const isInitial = signupCard.classList.contains("initialRender")
    const newContainerSize = getNewSignupCardDimensions(rect)
    if(isInitial){
        console.log("in here?", newContainerSize)
        console.log("formContainer", formContainer)
        formContainer.style.opacity = 1
        formContainer.style.transition = "none"
        formContainer.style.width = `${newContainerSize.width}px`
        formContainer.style.height = `${newContainerSize.height}px`
        signupCard.classList.remove("initialRender")
        signupCard.style.opacity = 1
        ref.current.style.opacity = 1
    }
    if(!isInitial){
        let ntl = setSignupCardSize(tl, containerRect, {width: newContainerSize.width, height: newContainerSize.height})
        ntl.to(ref.current, {opacity: 1, duration: 0.15})
    }
        return new Promise((resolve, reject) => {
                        resolve(true)
                    })
}

export const setActivePositionOnResize = (ref: React.Ref<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if(!rect) return    
    const signupCard = document.getElementById(signupCardId)
console.log("In on resize observer...")
}


export const setSignupStepTranstionState = (ref: React.Ref<HTMLDivElement>, state: "left" | "right" ) => {
    const transitionTime = 350
    const transform = signupStepTranslateMap[state]
    ref.current.style.transition = `transform ${transitionTime} ease-in-out`
    ref.current.style.transform = `translateX(${transform})`
    setTimeout(() => ref.current.style.display = "none", transitionTime)
}

export const changeContainerFixedSize = (sizeChange: number): Promise<boolean> => {
    if(sizeChange === 0) return
    console.log("Changing fixed size", sizeChange)
    const formContainer = document.getElementById(multiStepSignupFormContainer)
    if(!formContainer){
        return
    }
    const tl = gsap.timeline()
    const containerRect = formContainer.getBoundingClientRect()
    setSignupCardSize(tl, containerRect, {width: containerRect.width, height: containerRect.height + sizeChange})
    return new Promise((resolve, reject) => {
                resolve(true)
            })
}
