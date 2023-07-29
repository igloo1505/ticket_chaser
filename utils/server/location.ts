import cData from '#/data/server/USOnly.json'
import { LocationJSONData, StateByName, states } from '#/types/inputValidation'
const cityData = cData as LocationJSONData
import { Prisma } from "@prisma/client"

export const getLocationValues = (stateName: StateByName, cityName: string, cityId?: number | null | undefined): { success: true, data: Prisma.LocationCreateWithoutPersonalDetailsInput } | { success: false, error: string } => {
    const state = cityData[stateName]
    if (!state) {
        return {
            success: false,
            error: "State not found in database"
        }
    }
    const cityLower = cityName.toLowerCase()
    const stateLower = stateName.toLowerCase()
    const cities = cityId ? state.cities.filter((c) => c.id === cityId) : state.cities.filter((c) => c.name.toLowerCase() === cityLower)
    const stateAbbrev = states.filter((s) => s.name.toLowerCase() === stateLower)[0].abbrev
    if (!stateAbbrev) {
        return {
            success: false,
            error: "State not found in database"
        }
    }
    if (cities.length === 1) {
        const c = cities[0]
        return {
            success: true,
            data: {
                state: stateAbbrev,
                city: c.name,
                cityId: c.id,
                lat: parseFloat(c.latitude),
                long: parseFloat(c.longitude)
            }
        }
    }
    if (cities.length === 0) {
        return {
            success: false,
            error: "That city was not found in our database."
        }
    }
    if (cities.length > 1) {
        return {
            success: false,
            error: "There appears to be multiple cities with that name."
        }
    }
    return {
        success: false,
        error: "unknown"
    }
}
