import store from "#/state/store";
import { AccessType } from "#/types/AuthTypes";


export const logger = (val: any, access?: AccessType[] | AccessType) => {
    if (!access) {
        console.log(val)
        return
    }
    if (access === "DEVELOPMENT" && process.env.NODE_ENV === "development") {
        console.log(val)
    }
    const authState = store.getState().auth.user
    const currentAccess = authState?.role
}
