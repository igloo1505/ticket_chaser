import { CreateUserReqBody } from "#/types/AuthTypes"
import { Steps } from "#/types/inputValidation"

export interface CreateUserFormData extends CreateUserReqBody {
    confirmPassword: ""
}

export interface SignupFormType {
        data: CreateUserFormData
        activeStep: Steps
        firstStep: boolean
        lastStep: boolean
}

export const initialSignupFormState: SignupFormType  = {
        data: {
            email: "",
            password: "",
            confirmPassword: "",
            name: {
                first: "",
                middle: null,
                last: ""
            },
        },
        activeStep: "1",
        firstStep: true,
        lastStep: false
}


export type SignupFormDataType = SignupFormType['data']
