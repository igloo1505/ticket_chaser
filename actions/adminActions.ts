import { EditTeamFormType } from "#/components/forms/editTeam/mainForm"
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


export const submitTeamData = async (data: EditTeamFormType) => {
    delete data._homeArenaName
    const _data = {
        ...data,
        league: data.league || "NFL",
        events: !data.events || data.events?.length === 0 ? undefined : data.events,
        eventIds: !data.eventIds || data.eventIds?.length === 0 ? undefined : data.eventIds,
    }

    const res = await handleAxios("post", "/api/teams/create", { data: _data })
    console.log("res: ", res)
    return res?.data.success
}
