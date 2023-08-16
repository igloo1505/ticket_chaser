import { clearToast } from "#/state/slices/ui"
import store from "#/state/store"
import { ToastConfigType } from "#/types/uiTypes"

const titleMap: { [k in ToastConfigType['variant']]: string } = {
    success: "Success",
    warn: "Warning",
    error: "Error",
    info: ""
}

export const genToastConfig = (data: Partial<Omit<ToastConfigType, "content">> & { content: string }): Omit<ToastConfigType, "toastId"> => {
    const variant: ToastConfigType['variant'] = data.variant || "info"
    const title = titleMap[variant]
    return {
        timeout: 5000,
        variant: variant,
        title: title === "" ? undefined : title,
        ...data,
        isOpen: true
    }
}


export const removeToast = (id: string) => store.dispatch(clearToast(id))
