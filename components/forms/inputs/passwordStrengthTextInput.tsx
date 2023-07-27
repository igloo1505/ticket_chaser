import React, { ChangeEvent, useState } from 'react'
import TextInput, { TextInputProps } from './textInput'
import { passwordStrength } from 'check-password-strength'



const PasswordStrengthInput = (props: TextInputProps) => {
    const [strength, setPasswordStrength] = useState(-1)
    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        const s = passwordStrength(target.value)
        console.log("s: ", s)
         setPasswordStrength(s.id)
        props.onChange(e)
    }

    return (
        <div className={"w-full min-w-fit"}>
            <TextInput {...props} />
        </div>
    )
}


PasswordStrengthInput.displayName = "PasswordStrengthInput"


export default PasswordStrengthInput;
