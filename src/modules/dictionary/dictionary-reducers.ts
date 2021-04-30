import { SET_DICTIONARIES } from "./dictionary-constants";
import {TDictionaryActions, TDictionaryState} from "./dictionary-types";

const initialState = {
    error: false,
    dictionaries: undefined,
    isFetched: false,
};

export const dictionaryReducer = (
    state: TDictionaryState = initialState,
    action: TDictionaryActions
) => {
    if (action.type === SET_DICTIONARIES) {
        return {
            error: false,
            dictionaries: action.data,
            isFetched: true,
        }
    }

    return state;
};
