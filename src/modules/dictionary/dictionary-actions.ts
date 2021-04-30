import {createRequest} from "../../utils/create-request";
import {TDictionary, TSetDictionariesAction} from "./dictionary-types";
import {SET_DICTIONARIES, SET_ERROR_FETCH_DICTIONARIES} from "./dictionary-constants";

const setDictionaries = (data: TDictionary[]): TSetDictionariesAction => ({
    type: SET_DICTIONARIES,
    data,
});

const setErrorFetchDictionaries = ({
    type: SET_ERROR_FETCH_DICTIONARIES,
});

/**
 * Запрос всех справочников
 */
export const fetchDictionaries = () => async (dispatch: any) => {
    try {
        const response = await createRequest().get(`/get-dictionaries`);

        dispatch(setDictionaries(response.data.DATA));
    } catch {
        dispatch(setErrorFetchDictionaries);
    }
}