import { debounce, flow } from "lodash";
import {find, get, getOr} from "lodash/fp";
import * as React from "react";
import {createRequest} from "../../utils/create-request";
import {EDictionaryName, recordNotFound} from "./dictionary-constants";
import {ERacesIds, TCommonDictionaryRecord, TDictionaryContext} from "./dictionary-types";

/**
 * Писец, как это меня бесит
 */
export const DictionaryContext = React.createContext<TDictionaryContext>({
    dictionaries: {},
    fetchDictionaries(): void {},
    getDictionaryRecordByGameId: (dictName: EDictionaryName, gameId: string) => ({}) as TCommonDictionaryRecord,
    getDictionaryRecords: (dictName: EDictionaryName) => [] as TCommonDictionaryRecord[],
    getLocalizeDictionaryValueByGameId: (dictName: EDictionaryName, gameId: any) => '',
    isErrorFetch: false,
    isFetching: false,
} as TDictionaryContext);

export const DictionaryProvider = ({ children }: { children: React.ReactChild}) => {
    const [isFetching, setFetchingStatus] = React.useState(false);
    const [isErrorFetch, setErrorFetchingStatus] = React.useState(false);
    const [dictionaries, setDictionaries] = React.useState({});

    /**
     * Загрузка справочников по дебаунсу
     */
    const fetchDictionaries = debounce(() => {
        if (!isFetching) {
            setFetchingStatus(true);

            createRequest()
                .get(`/get-dictionaries`)
                .then((response) => setDictionaries(response.data.DATA))
                .catch(() => setErrorFetchingStatus(true))
                .finally(() => setFetchingStatus(false))
        }
    }, 100);

    /**
     * Получение записи из справочника по игровому ид
     */
    const getDictionaryRecordByGameId = (
        dictName: EDictionaryName,
        gameId: string | ERacesIds
    ) => flow(
        get(dictName),
        find((record: any) => record.game_id.includes(gameId)),
    )(dictionaries);

    /**
     * Получение всех записей справочника
     */
    const getDictionaryRecords = (
        dictName: EDictionaryName
    ) => {
        const records = get(dictName)(dictionaries);

        return records.map((record: any) => {
            if (typeof record.localize_name === 'string') {
                return record;
            }

            /**
             * Пока все справочники не переведены, используем только рашен лангуаге
             */
            return {
                ...record,
                localize_name: record.localize_name['ru']
            }
        })
    }

    /**
     * Получение локализованное значение из справочника по игровому ид
     */
    const getLocalizeDictionaryValueByGameId = (
        dictName: EDictionaryName,
        gameId: string
    ) => {
        const record = getDictionaryRecordByGameId(dictName, gameId);

        if (!record) {
            return recordNotFound(gameId);
        }

        /**
         * Пока все справочники не переведены, используем только рашен лангуаге
         */
        const path = typeof record.localize_name === 'string'
            ? 'localize_name'
            : 'localize_name.ru';

        return getOr(
            recordNotFound(gameId),
            path,
        )(record);
    }

    /**
     * Значения, доступные по обращению по контексту
     */
    const value = {
        dictionaries,
        fetchDictionaries,
        getDictionaryRecordByGameId,
        getDictionaryRecords,
        getLocalizeDictionaryValueByGameId,
        isErrorFetch,
        isFetching,
    };

    return (
        <DictionaryContext.Provider value={value}>
            {children}
        </DictionaryContext.Provider>
    )
}
