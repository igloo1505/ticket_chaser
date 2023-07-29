import { LoginBaseType } from "#/types/AuthTypes";
import { CreateUserRequestType, SignupFormType } from "#/state/initial/forms/signup"
import handleAxios from "#/hooks/useAxios";

const login = async (data: LoginBaseType) => {
    // let res = await axios
}

export const loginUser = async (data: LoginBaseType) => {
    // TODO: Resume by handling this
    console.log("data: ", data)
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
