import {SET_DICTIONARIES, SET_FETCHING_DICTIONARIES_STATUS} from "./dictionary-constants";
import {TDictionaryActions, TDictionaryState} from "./dictionary-types";

const initialState = {
    error: false,
    dictionaries: undefined,
    isFetching: false,
};

export const dictionaryReducer = (
    state: TDictionaryState = initialState,
    action: TDictionaryActions
) => {
    if (action.type === SET_FETCHING_DICTIONARIES_STATUS) {
        return {
            ...state,
            isFetching: true,
        }
    }
    if (action.type === SET_DICTIONARIES) {
        return {
            error: false,
            dictionaries: action.data,
            isFetching: false,
        }
    }

    return state;
};
