import {createRequest} from "../../utils/create-request";
import {TDictionary, TSetDictionariesAction} from "./dictionary-types";
import {
    SET_DICTIONARIES,
    SET_ERROR_FETCH_DICTIONARIES,
    SET_FETCHING_DICTIONARIES_STATUS,
} from "./dictionary-constants";

const setDictionaries = (data: TDictionary[]): TSetDictionariesAction => ({
    type: SET_DICTIONARIES,
    data,
});

const setErrorFetchDictionaries = ({
    type: SET_ERROR_FETCH_DICTIONARIES,
});

const setFetchingDictionariesStatus = ({
    type: SET_FETCHING_DICTIONARIES_STATUS,
});

/**
 * Запрос всех справочников
 */
export const fetchDictionaries = () => async (dispatch: any) => {
    try {
        dispatch(setFetchingDictionariesStatus);
        const response = await createRequest().get(`/get-dictionaries`);

        dispatch(setDictionaries(response.data.DATA));
    } catch {
        dispatch(setErrorFetchDictionaries);
    }
}