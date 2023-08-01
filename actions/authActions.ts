import { LoginBaseType } from "#/types/AuthTypes";
import { CreateUserRequestType, SignupFormType } from "#/state/initial/forms/signup"
import handleAxios from "#/hooks/useAxios";
import store from "#/state/store";
import { authSuccess, logoutUser } from "#/state/slices/auth";
import { ROLE } from "@prisma/client";



export const loginUser = async (data: LoginBaseType, requireRole?: ROLE[]) => {
    const res = await handleAxios("post", "/api/user/authenticate", { user: data })
    store.dispatch(authSuccess(res?.data.user))
    if (requireRole) {
        return requireRole.indexOf(res?.data.user.role) > -1
    }
    return res?.data.success || false
}

export const loginAdmin = async (data: LoginBaseType) => {
    return await loginUser(data, ["ADMIN"])
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

export const logout = async () => {
    await handleAxios("get", "/api/user/logout")
    store.dispatch(logoutUser())
    window.location.pathname = "/"
}
