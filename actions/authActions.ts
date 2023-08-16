import { LoginBaseType, RetrievedUserData } from "#/types/AuthTypes";
import { CreateUserRequestType, SignupFormType } from "#/state/initial/forms/signup"
import handleAxios from "#/hooks/useAxios";
import store from "#/state/store";
import { authSuccess, logoutUser } from "#/state/slices/auth";
import { ROLE } from "@prisma/client";
import { setNavbarType, showToast } from "#/state/slices/ui";
import { genToastConfig } from "./notificationActions";


export const handleAuthSuccess = (user: RetrievedUserData) => {
    store.dispatch(setNavbarType(true))
    store.dispatch(authSuccess(user))
}

export const loginUser = async (data: LoginBaseType, requireRole?: ROLE[]) => {
    const res = await handleAxios("post", "/api/user/authenticate", { user: data })
    if (res?.data.success) {
        handleAuthSuccess(res.data.user)
    }
    if (requireRole) {
        const hasAppropriateRole = requireRole.indexOf(res?.data.user.role) > -1
        if (!hasAppropriateRole) {
            const toast = genToastConfig({ variant: "error", content: "You need approval to access this part of the app.", title: "Unauthorized" })
            store.dispatch(showToast(toast))
        }
        return { success: hasAppropriateRole, role: res?.data.user.role || undefined }
    }
    return { success: res?.data.success || false, role: res?.data.user.role || undefined }
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


export const clearAuthTokensRequest = async () => {
    let res = await handleAxios("get", "/api/auth/clearAuth")
    return res?.data.success || false
}
