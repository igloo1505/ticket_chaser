
import { StateByName, Steps } from "#/types/inputValidation"
import { Location } from "@prisma/client"


interface LegalName {
    first: string
    middle?: string | null
    last: string
}


export interface CreateUserReqBody {
    email: string
    password: string
    name: LegalName
    location: LocationFormData
}

export interface LocationFormData extends Omit<Location, "id" | "arena" | "lat" | "long" | "state"> {state: StateByName | ""}

export interface CreateUserFormData extends CreateUserReqBody {
    confirmPassword: ""
}

export interface SignupFormType {
    data: CreateUserFormData
    activeStep: Steps
    firstStep: boolean
    lastStep: boolean
}

export const initialSignupFormState: SignupFormType = {
    data: {
        email: "",
        password: "",
        confirmPassword: "",
        name: {
            first: "",
            middle: null,
            last: ""
        },
        location: {
            street: "",
            zip: 90210,
            city: "",
            state: "",
        }
    },
    activeStep: "2",
    firstStep: true,
    lastStep: false,
}


export type SignupFormDataType = SignupFormType['data']
