import initialSettingsState from "./appSettings";
import authState from "./auth";
import initialUiState from "./ui";
import networkState from "./network";
import { initialFormState } from "./forms/formState";

const initialState = {
    auth: authState,
    UI: initialUiState,
    settings: initialSettingsState,
    network: networkState,
    forms: initialFormState
}


export default initialState
