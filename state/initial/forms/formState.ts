import { SignupFormType, initialSignupFormState } from './signup'
import { FilterEventsFormType, initialFilterEventFormState } from './events'
export type InitialFormStateType = {
    signUp: SignupFormType
    events: FilterEventsFormType
}

export const initialFormState = {
    signUp: initialSignupFormState,
    events: initialFilterEventFormState
}


