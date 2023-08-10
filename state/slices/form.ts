import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initial/initialState";
import { InitialFormStateType } from '../initial/forms/formState'
import { CityApiType } from "#/types/inputValidation";
import { Payload } from "@prisma/client/runtime/library";
import { RootState } from "../store";
import { initialFilterState, isInitialFilterState } from "../initial/forms/events";



const slice = createSlice({
    name: "forms",
    initialState: initialState.forms as typeof initialState['forms'],
    reducers: {
        setSignupFormData(state, action: PayloadAction<InitialFormStateType['signUp']>) {
            state.signUp = action.payload
        },
        setRetrievedCities(state, action: PayloadAction<CityApiType[]>) {
            state.signUp.localCities = action.payload
        },
        setShowPanelContent(state, action: PayloadAction<InitialFormStateType['events']['panel']['replaceContent']>) {
            state.events.panel.replaceContent = action.payload
        },
        setEventsFilterData(state, action: PayloadAction<Partial<InitialFormStateType['events']['panel']['filter']>>) {
            state.events.panel.filter = {
                ...state.events.panel.filter,
                ...action.payload
            }
        },
        resetEventsFilter(state) {
            state.events.panel.filter = initialFilterState
        }
    }
})


export const { setSignupFormData, resetEventsFilter, setShowPanelContent, setEventsFilterData, setRetrievedCities } = slice.actions
export default slice.reducer

