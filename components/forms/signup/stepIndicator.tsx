"use client"
import clsx from 'clsx'
import React, { useEffect, useRef } from 'react'

import { RootState } from '#/state/store';
import { connect } from 'react-redux';

const connector = connect((state: RootState, props: any) => ({
    activeStep: state.form.signUp.activeStep,
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
    let activeStep = parseInt(_activeStep)
    const ref = useRef<HTMLUListElement>(null!)
    const handleLocation = () => {
        if (typeof window === "undefined") return;
        const cardTitle = document.getElementById("signup-card-container-title")
        if (!cardTitle || !ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const t = cardTitle.getBoundingClientRect().height + rect.height + 32
        console.log("t: ", t)
        console.log("top: ", rect.y)
        console.log("difference: ", rect.y - t)
        ref.current.style.transform = `translate(-50%, -${t}px)`
        ref.current.style.display = rect.y < viewport.navbarHeight ? "none" : "grid"
        ref.current.style.opacity = "1"
    }
    useEffect(() => {
        handleLocation()
        window.addEventListener("resize", handleLocation)
        return () => window.removeEventListener("resize", handleLocation)
    }, [])
    return (
        <ul className="steps mb-4 absolute left-[50%]  lg:steps-horizontal" id={'signup-step-indicator'}
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
