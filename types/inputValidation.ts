import { CreateUserFormData, SignupFormDataType, SignupFormType } from "#/state/initial/forms/signup"

interface StateItem {
    name: string
    // abbrev: Location['state']
    abbrev: string
}
const states: StateItem[] = [
    { name: "Alabama", abbrev: "AL	" },
    { name: "Kentucky", abbrev: "KY	" },
    { name: "Ohio", abbrev: "OH" },
    { name: "Alaska", abbrev: "AK	" },
    { name: "Louisiana", abbrev: "LA	" },
    { name: "Oklahoma", abbrev: "OK" },
    { name: "Arizona", abbrev: "AZ	" },
    { name: "Maine", abbrev: "ME	" },
    { name: "Oregon", abbrev: "OR" },
    { name: "Arkansas", abbrev: "AR	" },
    { name: "Maryland", abbrev: "MD	" },
    { name: "Pennsylvania", abbrev: "PA" },
    { name: "American Samoa", abbrev: "AS	" },
    { name: "Massachusetts", abbrev: "MA	" },
    { name: "Puerto Rico", abbrev: "PR" },
    { name: "California", abbrev: "CA	" },
    { name: "Michigan", abbrev: "MI	" },
    { name: "Rhode Island", abbrev: "RI" },
    { name: "Colorado", abbrev: "CO	" },
    { name: "Minnesota", abbrev: "MN	" },
    { name: "South Carolina", abbrev: "SC" },
    { name: "Connecticut", abbrev: "CT	" },
    { name: "Mississippi", abbrev: "MS	" },
    { name: "South Dakota", abbrev: "SD" },
    { name: "Delaware", abbrev: "DE	" },
    { name: "Missouri", abbrev: "MO	" },
    { name: "Tennessee", abbrev: "TN" },
    { name: "District of Columbia", abbrev: "DC	" },
    { name: "Montana", abbrev: "MT	" },
    { name: "Texas", abbrev: "TX" },
    { name: "Florida", abbrev: "FL	" },
    { name: "Nebraska", abbrev: "NE	" },
    { name: "Trust Territories", abbrev: "TT" },
    { name: "Georgia", abbrev: "GA	" },
    { name: "Nevada", abbrev: "NV	" },
    { name: "Utah", abbrev: "UT" },
    { name: "Guam", abbrev: "GU	" },
    { name: "New Hampshire", abbrev: "NH	" },
    { name: "Vermont", abbrev: "VT" },
    { name: "Hawaii", abbrev: "HI	" },
    { name: "New Jersey", abbrev: "NJ	" },
    { name: "Virginia", abbrev: "VA" },
    { name: "Idaho", abbrev: "ID	" },
    { name: "New Mexico", abbrev: "NM	" },
    { name: "Virgin Islands", abbrev: "VI" },
    { name: "Illinois", abbrev: "IL	" },
    { name: "New York", abbrev: "NY	" },
    { name: "Washington", abbrev: "WA" },
    { name: "Indiana", abbrev: "IN	" },
    { name: "North Carolina", abbrev: "NC	" },
    { name: "West Virginia", abbrev: "WV" },
    { name: "Iowa", abbrev: "IA	" },
    { name: "North Dakota", abbrev: "ND	" },
    { name: "Wisconsin", abbrev: "WI" },
    { name: "Kansas", abbrev: "KS	" },
    { name: "Northern Mariana Islands", abbrev: "MP	" },
    { name: "Wyoming", abbrev: "WY" }
]



export type Steps = "1" | "2"
export const steps: Steps[] = ["1", "2"]

export interface SignupStepProps {
    form: SignupFormType
    step: number
    setFormData: (v: CreateUserFormData) => void
}
