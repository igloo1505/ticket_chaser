"use client"
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'



interface MultiStepTransitionProps {
    step: number
    activeStep: number
    translateRight?: string
    translateLeft?: string
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

type TransitionStateType = "right" | "left" | "active"

const MultiStepTransition = ({ step, className, style, activeStep, translateLeft, translateRight, children }: MultiStepTransitionProps) => {
    const [transitionState, setTransitionState] = useState<TransitionStateType>("right")
    useEffect(() => {
        if (activeStep > step) {
            return setTransitionState("left")
        }
        if (activeStep < step) {
            return setTransitionState("right")
        }
        if (activeStep === step) {
            return setTransitionState("active")
        }
    }, [activeStep, step])
    const translateMap: {[k in TransitionStateType]: string} = {
        left: translateLeft ? translateLeft :  "-100vw",
        right: translateRight || "100vw",
        active: "0px"

    }
    return (
        <div
            className={clsx('w-full h-full', className && className)}
            style={{
                transform: `translateX(${translateMap[transitionState]})`,
                ...(style && { ...style })
            }}
        >
            {children}
        </div>
    )
}


MultiStepTransition.displayName = "MultiStepTransition"


export default MultiStepTransition;
