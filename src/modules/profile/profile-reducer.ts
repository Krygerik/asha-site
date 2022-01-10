import {
    REMOVE_PROFILE_DATA,
    SET_ERROR_FETCH_PROFILE,
    SET_FETCHING_STATUS,
    SET_PROFILE,
    TProfileActions,
    TProfileState
} from "./profile-types";

const initialState = {
    data: null,
    errorMessage: null,
    isFetching: false,
};

export const profileReducer = (
    state: TProfileState = initialState,
    action: TProfileActions,
) => {
    if (action.type === SET_FETCHING_STATUS) {
        return {
            ...state,
            isFetching: action.data,
        }
    }
    if (action.type === SET_PROFILE) {
        return {
            ...state,
            data: action.data,
        }
    }

    if (action.type === SET_ERROR_FETCH_PROFILE) {
        return {
            ...state,
            errorMessage: action.data,
        }
    }

    if (action.type === REMOVE_PROFILE_DATA) {
        return {
            ...state,
            data: null,
        }
    }

    return state;
}