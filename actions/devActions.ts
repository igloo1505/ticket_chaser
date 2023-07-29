import { setSignupFormData } from "#/state/slices/form"
import store from "#/state/store"

export const setDevelopmentState = () => {
    const state = store.getState()
    store.dispatch(setSignupFormData({
        ...state.form.signUp,
        data: {
            email: "aiglinski@icloud.com",
            password: "Password123!",
            confirmPassword: "Password123!",
            name: {
                first: "Andrew",
                middle: "Charles",
                last: "Mueller"
            },
            location: {
                street: "",
                city: {
                    name: "Milwaukee",
                    id: 121923
                },
                state: "Wisconsin"
            }
        }
    }))
}
