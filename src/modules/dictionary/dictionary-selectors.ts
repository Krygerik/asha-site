import {find, flow, get, getOr} from "lodash/fp";
import {Selector} from "react-redux";
import {createSelector} from "reselect";
import {
    DICTIONARY_NAMESPACE,
    EDictionaryName,
} from "./dictionary-constants";
import {TDictionaryState, TGetDictionaryRecord, TGetDictionaryRecordProperty} from "./dictionary-types";

const getDictionaryState = get(DICTIONARY_NAMESPACE);

/**
 * Статус загрузки данных из сервера
 */
export const getIsFetchedDictionaries: Selector<any, boolean> = createSelector(
    getDictionaryState,
    get('isFetched')
);

/**
 * Статус загрузки данных из сервера
 */
export const getIsErrorFetchedDictionaries: Selector<any, boolean> = createSelector(
    getDictionaryState,
    get('error')
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
        get(outputPropertyName),
    )(dictionaryState),
);
