import {find, flow, get, getOr} from "lodash/fp";
import {Selector} from "react-redux";
import {createSelector} from "reselect";
import {
    DICTIONARY_NAMESPACE,
    EDictionaryName,
    recordNotFound,
} from "./dictionary-constants";
import {
    TDictionary,
    TDictionaryState,
    TGetDictionaryRecord,
    TGetDictionaryRecordProperty,
} from "./dictionary-types";

const getDictionaryState = get(DICTIONARY_NAMESPACE);

/**
 * Статус загрузки данных из сервера
 */
export const getIsFetchingStatusDictionaries: Selector<any, boolean> = createSelector(
    getDictionaryState,
    get('isFetching')
);

/**
 * Статус загрузки данных из сервера
 */
export const getIsErrorFetchedDictionaries: Selector<any, boolean> = createSelector(
    getDictionaryState,
    get('error')
);

/**
 * Данные справочника из стейта
 */
export const getDictionaries: Selector<any, TDictionary[] | undefined> = createSelector(
    getDictionaryState,
    get('dictionaries')
);

/**
 * Получение утилиты для получение полной записи из справочника
 */
export const getDictionaryRecordUtil: Selector<any, TGetDictionaryRecord> = createSelector(
    getDictionaryState,
    (dictionaryState: TDictionaryState) => (
        dictionaryName: EDictionaryName,
        inputPropertyName: string,
        inputPropertyValue: string,
    ) => flow(
        get('dictionaries'),
        find({ name: dictionaryName }),
        get('records'),
        find({ [inputPropertyName]: inputPropertyValue }),
    )(dictionaryState)
);

/**
 * Получение утилиты для получение данных из справочника
 */
export const getDictionaryPropertyUtil: Selector<any, TGetDictionaryRecordProperty> = createSelector(
    getDictionaryState,
    (dictionaryState: TDictionaryState) => (
        dictionaryName: EDictionaryName,
        inputPropertyName: string,
        inputPropertyValue: string,
        outputPropertyName: string,
    ) => flow(
        get('dictionaries'),
        find({ name: dictionaryName }),
        get('records'),
        find({ [inputPropertyName]: inputPropertyValue }),
        getOr(recordNotFound(inputPropertyValue), outputPropertyName),
    )(dictionaryState),
);
