import { LoginBaseType } from "#/types/AuthTypes";
import { CreateUserRequestType, SignupFormType } from "#/state/initial/forms/signup"
import handleAxios from "#/hooks/useAxios";
import store from "#/state/store";
import { authSuccess } from "#/state/slices/auth";



export const loginUser = async (data: LoginBaseType) => {
    const res = await handleAxios("post", "/api/user/authenticate", { user: data })
    store.dispatch(authSuccess(res?.data.user))
    return res?.data.success || false
}

export const loginAdmin = async (data: LoginBaseType) => {
    const res = await loginUser(data)
    // if(!res.data.success)
    // TODO: Resume by handling this
    console.log("data: ", data)
}

export const registerUser = async (data: SignupFormType["data"]) => {
    let d: CreateUserRequestType = {
        ...data,
        location: {
            ...data.location,
            street: undefined,
            city: {
                ...data.location.city,
            }
        }
    }
    try {
        const res = await handleAxios("post", "/api/user/create", { user: d })
        return res?.data.success || false
    } catch (err) {
        console.log("In this catch?")
    }
}
