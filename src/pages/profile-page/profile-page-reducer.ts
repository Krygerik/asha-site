import {SET_ERROR_FETCH_PROFILE_PAGE, SET_PLAYER_PROFILE_DATE, TProfilePageActions} from "./profile-page-types";
import {TProfilePageState} from "./profile-page-types";

const initialState = {
    data: null,
    error: false,
    errorMessage: undefined,
    isFetching: true,
}

export const profilePageReducer = (
    state: TProfilePageState = initialState,
    action: TProfilePageActions
) => {
    if (action.type === SET_PLAYER_PROFILE_DATE) {
        return {
            ...state,
            data: action.data,
            isFetching: false,
        };
    }

    if (action.type === SET_ERROR_FETCH_PROFILE_PAGE) {
        return {
            ...state,
            error: true,
            errorMessage: action.data,
            isFetching: false,
        };
    }

    return state;
}