import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initial/initialState";
import { FaqFormData } from "../initial/adminState";



const slice = createSlice({
    name: "admin",
    initialState: initialState.admin as typeof initialState['admin'],
    reducers: {
        setFaqData(state, action: PayloadAction<FaqFormData>) {
            state.editing.faq = action.payload
        },
        clearFaqEdit(state) {
            state.editing.faq = initialState.admin.editing.faq
        }
    }
})


export const { setFaqData, clearFaqEdit } = slice.actions
export default slice.reducer

