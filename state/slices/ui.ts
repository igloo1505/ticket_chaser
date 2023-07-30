import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initial/initialState";
import { ToastConfigType } from "#/types/uiTypes";
import initialUiState, { InitialUIStateType } from "../initial/ui";
import { v4 as uuid } from 'uuid';
import { ToastErrorTypes } from "#/types/AuthTypes";
import { defaultToastConfigs } from "#/data/defaultToasts";


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
        toggleDrawer(state) {
            state.drawer.open = !state.drawer.open
        },
        showToast(state, action: PayloadAction<ToastConfigType>) {
            state.toasts.push({
                ...action.payload,
                toastId: uuid(),
                isOpen: true
            })
        },
        clearToast(state, action: PayloadAction<string>) {
            state.toasts = state.toasts.filter((t) => t.toastId !== action.payload)
        },
        showDefaultToast(state, action: PayloadAction<ToastErrorTypes>) {
            state.toasts.push({
                ...defaultToastConfigs[action.payload],
                isOpen: true,
                toastId: uuid()
            })
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
        },
        setViewportData(state, action: PayloadAction<InitialUIStateType['viewport']>) {
            state.viewport = action.payload
        },
    }
})


export const { showToast, setDrawerOpen, toggleDrawer, clearToast, showModal, hideModal, hideAllModals, setDarkMode, setViewportData, showDefaultToast } = slice.actions
export default slice.reducer

