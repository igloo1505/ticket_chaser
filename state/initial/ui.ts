import { ToastConfigType } from "#/types/uiTypes"

type modalValue = boolean | number


export interface InitialUIStateType {
    darkMode: boolean,
    modals: {
        tos: modalValue
        privacy: modalValue
        payment: modalValue
        idVerification: boolean
    },
    toasts: ToastConfigType[]
    drawer: {
        open: boolean
    },
    viewport: {
        height: number
        width: number
        navbarHeight: number
    }
}


const initialUiState: InitialUIStateType = {
    darkMode: true,
    modals: {
        tos: false,
        privacy: false,
        payment: false,
        idVerification: false
    },
    toasts: [],
    drawer: {
        open: false
    },
    viewport: {
        navbarHeight: -1,
        height: -1,
        width: -1
    }
}


export type ModalKeyType = keyof InitialUIStateType['modals']

export default initialUiState
