import handleAxios from "#/hooks/useAxios"
import { clearFaqEdit } from "#/state/slices/admin"
import store, { RootState } from "#/state/store"

export const SubmitFaqData = async () => {
    const data = store.getState().admin.editing.faq
    let p = "/api/faqs/create"
    if (data.id) {
        p = "/api/faqs/update"
    }
    const res = await handleAxios("post", p, { data: data })
    if (res?.data.success) {
        store.dispatch(clearFaqEdit())
    }
}

export const removeFaq = async (id: number | string) => {
    const res = await handleAxios("delete", `/api/faqs/remove/${id}`)
    console.log("res.data: ", res?.data)
    return res?.data.success
}
