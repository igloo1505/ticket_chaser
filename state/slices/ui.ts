import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initial/initialState";
import { ToastConfigType } from "#/types/uiTypes";
import initialUiState, { InitialUIStateType } from "../initial/ui";



const slice = createSlice({
    name: "UI",
    initialState: initialState.UI as typeof initialState['UI'],
    reducers: {
        setDrawerOpen(state, action: PayloadAction<boolean | "toggle">) {
            if (action.payload === "toggle") {
                state.drawer.open = !state.drawer.open
            }
            if (action.payload !== "toggle") {
                state.drawer.open = action.payload
            }
        },
        showToast(state, action: PayloadAction<ToastConfigType>) {
            state.toast = action.payload
        },
        clearToast(state) {
            state.toast = initialUiState.toast
        },
        showModal(state, action: PayloadAction<keyof InitialUIStateType['modals']>) {
            state.modals[action.payload] = true
        },
        hideModal(state, action: PayloadAction<keyof InitialUIStateType['modals']>) {
            state.modals[action.payload] = false
        },
        hideAllModals(state) {
            state.modals = initialUiState.modals
        },
        setDarkMode(state, action: PayloadAction<boolean>) {
            state.darkMode = action.payload
        }
    }
})


export const { showToast, setDrawerOpen, clearToast, showModal, hideModal, hideAllModals, setDarkMode } = slice.actions
export default slice.reducer

