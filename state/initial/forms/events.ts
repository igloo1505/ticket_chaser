import { EventsPageSearchParams } from "#/components/pageSpecific/events/searchBar";
import store from "#/state/store";
import { Event } from "@prisma/client";

export interface FilterEventsFormType extends EventsPageSearchParams {
    panel: {
        open: boolean,
        replaceContent: false
        filter: {
            byDate: Date | Date[] | undefined | null | string
        }
    }
    results: Event[]
}


export const initialFilterState: FilterEventsFormType['panel']['filter'] = {
    byDate: undefined
}

export const isInitialFilterState = () => {
    const fstate = store.getState().form.events.panel.filter
    const istate = initialFilterState
    if (fstate.byDate !== istate.byDate) return false
    return true
}


export const initialFilterEventFormState: FilterEventsFormType = {
    tag: "",
    category: "",
    query: "",
    performer: "",
    panel: {
        replaceContent: false,
        open: false,
        filter: initialFilterState
    },
    results: []
}
