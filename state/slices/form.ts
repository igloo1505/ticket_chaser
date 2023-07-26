import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initial/initialState";
import {InitialFormStateType} from '../initial/forms/formState'
import { CityApiType } from "#/types/inputValidation";



const slice = createSlice({
    name: "forms",
    initialState: initialState.forms as typeof initialState['forms'],
    reducers: {
        setSignupFormData(state, action: PayloadAction<InitialFormStateType['signUp']>) {
            state.signUp = action.payload
        },
        setRetrievedCities(state, action: PayloadAction<CityApiType[]>) {
            state.signUp.localCities = action.payload
        }
    }
})


export const {setSignupFormData, setRetrievedCities} = slice.actions
export default slice.reducer

