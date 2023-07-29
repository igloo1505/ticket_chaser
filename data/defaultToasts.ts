import { ToastError, ToastErrorTypes } from "#/classes/ErrorHandling";


export const toastConfigs: { [k in ToastErrorTypes]: Omit<ToastError, "toastId"> } = {
    unauthenticated: {
        variant: "error",
        content: "You must be logged to do that.",
        title: "Unauthenticated"
    },
    tokenExpired: {
        variant: "error",
        content: "Please try logging in again.",
        title: "Session Expired"
    },
    mustBeVerified: {
        variant: "info",
        content: "Please verify your account before continuing.",
        title: "Please Verify"
    },
    faqNotFound: {
        variant: "warn",
        content: "That question was not found",
        title: "Not Found"
    },
    emailExists: {
        variant: "warn",
        content: "That email appears to already be in use.",
        title: "Account exists."
    }
}
