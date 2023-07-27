import handleAxios from "#/hooks/useAxios";
import { setRetrievedCities } from "#/state/slices/form";
import store from "#/state/store";
import { CityApiType, StateByName } from "#/types/inputValidation";

export const getCitiesFromQuery = async (query: string, state: StateByName) => {
    const res = await handleAxios("post", "/api/locations/cityFilter", {
        query: {
            cityInput: query,
            state: state
        }
    })
    if (res.data.success && res.data.cities) {
        store.dispatch(setRetrievedCities(res.data.cities))
        return res.data.cities as CityApiType[]
    }
    return []
}