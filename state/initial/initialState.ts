import initialSettingsState from "./appSettings";
import authState from "./auth";
import initialUiState from "./ui";

const initialState = {
    auth: authState,
    UI: initialUiState,
    settings: initialSettingsState
}


export default initialState
