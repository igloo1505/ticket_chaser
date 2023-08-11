import handleAxios from "#/hooks/useAxios";
import { resetEventsFilter, setEventsFilterData, setRetrievedCities } from "#/state/slices/form";
import store from "#/state/store";
import { CityApiType, StateByName } from "#/types/inputValidation";
import { parseDateForQueryParams } from "#/utils/dates/dayjs";

export const getCitiesFromQuery = async (query: string, state: StateByName) => {
    const res = await handleAxios("post", "/api/locations/cityFilter", {
        query: {
            cityInput: query,
            state: state
        }
    })
    if (!res) {
        return []
    }
    if (res.data.success && res.data.cities) {
        store.dispatch(setRetrievedCities(res.data.cities))
        return res.data.cities as CityApiType[]
    }
    return []
}

export const clearEventFilter = async () => {
    // TODO: Handle actual retrieving of unfiltered events here.
    store.dispatch(resetEventsFilter())
}

export const setEventsDateFilter = (val: Date | Date[] | string) => {
    console.log("val: ", val)
    let d = parseDateForQueryParams(val)
    console.log("d: ", d)
    store.dispatch(setEventsFilterData({ byDate: d }));
}
