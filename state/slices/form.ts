import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initial/initialState";
import {InitialFormStateType} from '../initial/forms/formState'



const slice = createSlice({
    name: "forms",
    initialState: initialState.forms as typeof initialState['forms'],
    reducers: {
        setSignupFormData(state, action: PayloadAction<InitialFormStateType['signUp']>) {
            state.signUp = action.payload
        },
    }
})


export const {setSignupFormData} = slice.actions
export default slice.reducer

