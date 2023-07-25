import initialSettingsState from "./appSettings";
import authState from "./auth";
import initialUiState from "./ui";
import networkState from "./network";

const initialState = {
    auth: authState,
    UI: initialUiState,
    settings: initialSettingsState,
    network: networkState
}


export default initialState
