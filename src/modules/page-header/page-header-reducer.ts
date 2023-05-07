import {
    SET_ERROR_FETCH,
    SET_MAP_TYPE_LIST,
    SET_SELECTED_MAP_TYPE,
    TPageHeaderActions,
    TPageHeaderState
} from "./page-header-types";

const initialState: TPageHeaderState = {
    data: null,
    errorMessage: undefined,
    isFetching: true,
    selectedMapType: undefined,
};

export const pageHeaderReducer = (
    state: TPageHeaderState = initialState,
    action: TPageHeaderActions,
) => {
    if (action.type === SET_MAP_TYPE_LIST) {
        return {
            ...state,
            data: action.data,
            isFetching: false,
            selectedMapType: action.data[0],
        }
    }

    if (action.type === SET_ERROR_FETCH) {
        return {
            ...state,
            errorMessage: action.data,
            isFetching: false,
        }
    }

    if (action.type === SET_SELECTED_MAP_TYPE) {
        return {
            ...state,
            selectedMapType: action.data
        }
    }

    return state;
}
