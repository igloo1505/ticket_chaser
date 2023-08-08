import { EventsPageSearchParams } from "#/components/pageSpecific/events/searchBar";
import { Event } from "@prisma/client";

export interface FilterEventsFormType extends EventsPageSearchParams {
    panel: {
        open: boolean
    }
    results: Event[]
}

// WARNING: Consider removing this.Might not need this in global state at all.
export const initialFilterEventFormState: FilterEventsFormType = {
    tag: "",
    category: "",
    query: "",
    performer: "",
    panel: {
        open: false
    },
    results: []
}
