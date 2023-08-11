"use client"
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { signupCardId } from "#/components/pageSpecific/login/authenticateCard"
import { RootState } from '#/state/store';
import { connect } from 'react-redux';

const connector = connect((state: RootState, props: any) => ({
    _activeStep: state.form.signUp.activeStep,
    viewport: state.UI.viewport,
    props: props
}))


export interface StepIndicatorStep {
    label: string
    activeRange: number[]
}

interface StepIndicatorProps {
    steps: StepIndicatorStep[]
    viewport: RootState['UI']['viewport']
    _activeStep: string
}

const StepIndicator = connector(({ steps, _activeStep, viewport }: StepIndicatorProps) => {
    const [activeStep, setActiveStep] = useState(parseInt(_activeStep))
    useEffect(() => {
        setActiveStep(parseInt(_activeStep))
    }, [_activeStep])
    const ref = useRef<HTMLUListElement>(null!)
    /* const handleLocation = () => { */
    /*     if (typeof window === "undefined") return; */
    /*     const cardTitle = document.getElementById(`${signupCardId}-title`) */
    /*     if (!cardTitle || !ref.current) return */
    /*     const rect = ref.current.getBoundingClientRect() */
    /*     const cardRect = cardTitle.getBoundingClientRect() */
    /*     console.log("cardRect: ", cardRect) */
    /*     console.log("Here?", cardRect.top) */
    /*     console.log("cardRect.top <= 96 + 150: ", cardRect.top <= 150) */
    /*     if (cardRect.top <= 150) { */
    /*         ref.current.style.display = "none" */
    /*     } */
    /*     if (cardRect.top > 150) { */
    /*         ref.current.style.display = "grid" */
    /*     } */
    /*     const t = cardRect.height + rect.height + 42 */
    /*     ref.current.style.transform = `translate(-50%, -${t}px)` */
    /*     ref.current.style.opacity = "1" */
    /* } */
    /* useEffect(() => { */
    /*     handleLocation() */
    /*     window.addEventListener("resize", handleLocation) */
    /*     return () => window.removeEventListener("resize", handleLocation) */
    /* }, [viewport]) */
    return (
        <ul className="steps absolute left-[50%] lg:steps-horizontal grid-cols-[repeat(3,120px)] hidden md:grid" id={'signup-step-indicator'}
            ref={ref}
            style={{
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
                left: "50%",
            }}
        >
            {steps.map((s, i) => {
                let active = s.activeRange.indexOf(activeStep) >= 0
                let complete = activeStep > s.activeRange[s.activeRange.length - 1]
                return <li className={clsx("step", complete && "step-primary", active && "step-primary")} key={`step-indicator-${i}`}>{s.label}</li>
            })}
        </ul>
    )
})


StepIndicator.displayName = "StepIndicator"


export default StepIndicator;
