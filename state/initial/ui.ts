import { ToastConfigType } from "#/types/uiTypes"

type modalValue = boolean | number

export interface InitialUIStateType {
    modals: {
        tos: modalValue
        privacy: modalValue
        payment: modalValue
    },
    toast: ToastConfigType
    drawer: {
        open: boolean
    }
}


const initialUiState: InitialUIStateType = {
    modals: {
        tos: false,
        privacy: false,
        payment: false
    },
    toast: {
        variant: "info",
        isOpen: false,
        content: "",
        title: "",
        timeout: 0
    },
    drawer: {
        open: false
    }
}


export type ModalKeyType = keyof InitialUIStateType['modals']

export default initialUiState
