import { setSignupFormData } from "#/state/slices/form"
import { showToast } from "#/state/slices/ui"
import store from "#/state/store"
import { genToastConfig } from "./notificationActions"

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


export const showDemoToasts = () => {
    const sampleBody = "Libero ut suscipit nam sit ut at. Metus amet eros molestie tristique nam faucibus convallis est praesent nibh enim tortor feugiat convallis imperdiet porttitor arcu praesent et ac diam pulvinar."
    const toasts = [
        genToastConfig({ variant: "info", content: "Information", title: "Info" }),
        genToastConfig({ variant: "success", content: "Success" }),
        genToastConfig({ variant: "warn", content: "Warning" }),
        genToastConfig({ variant: "error", content: "Error" }),
        // genToastConfig({ variant: "info", content: sampleBody }),
        // genToastConfig({ variant: "success", content: sampleBody }),
        // genToastConfig({ variant: "warn", content: sampleBody }),
        // genToastConfig({ variant: "error", content: sampleBody }),
    ]
    toasts.forEach((t) => store.dispatch(showToast(t)))
}
