
import { CityApiType, StateByName, Steps } from "#/types/inputValidation"
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

export interface LocationFormData extends Omit<Location, "id" | "city" | "arena" | "lat" | "long" | "state"> {state: StateByName | "", city: {name: string, id?: number | null}}

export interface CreateUserFormData extends CreateUserReqBody {
    confirmPassword: ""
}

export interface SignupFormType {
    data: CreateUserFormData
    activeStep: Steps
    firstStep: boolean
    lastStep: boolean
    localCities: CityApiType[]
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
            city: {
                name: "",
                id: null
            },
            state: "",
        }
    },
    activeStep: "1",
    firstStep: true,
    lastStep: false,
    localCities: []
}


export type SignupFormDataType = SignupFormType['data']
