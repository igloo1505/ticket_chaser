import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initial/initialState";



const slice = createSlice({
    name: "auth",
    initialState: initialState.auth as typeof initialState['auth'],
    reducers: {

    }
})


export const { } = slice.actions
export default slice.reducer

