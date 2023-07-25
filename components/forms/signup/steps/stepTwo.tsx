import MultiStepTransition from '#/components/animate/multiStepTransition';
import { SignupStepProps } from '#/types/inputValidation';
import React from 'react'



const SignupStepTwo = (props: SignupStepProps) => {
    return (
        <MultiStepTransition step={props.step} activeStep={parseInt(props.form.activeStep)}>
            <div>Step Two</div>
        </MultiStepTransition>
    )
}


SignupStepTwo.displayName = "StepTwoSignupForm"


export default SignupStepTwo;
