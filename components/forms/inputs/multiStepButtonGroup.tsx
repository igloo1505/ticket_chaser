import Button from '#/components/ui/button'
import React from 'react'



interface MultiStepButtonGroupProps {
    maxStep: number
    activeStep: number
    handleNext: () => void
    handlePrev: () => void
    completeButtonLabel?: string
    children?: React.ReactNode
}

const MultiStepButtonGroup = (props: MultiStepButtonGroupProps) => {
    return (
        <div className={"w-full flex flex-row justify-end items-center gap-4 mt-6"}>
            {props.children && props.children}
            {props.activeStep < props.maxStep && <Button label="Back" onClick={props.handlePrev} />
            }
            <Button label={props.activeStep === props.maxStep ? props.completeButtonLabel || "Submit" : "Continue"} onClick={props.handleNext} />
        </div>
    )
}


MultiStepButtonGroup.displayName = "MultiStepButtonGroup"


export default MultiStepButtonGroup;
