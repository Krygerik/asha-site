import {EDictionaryName, SET_DICTIONARIES, SET_FETCHING_DICTIONARIES_STATUS} from "./dictionary-constants";
import {TGame} from "../../pages/game/game-types";

/**
 * Тип одиночной записи в справочнике
 */
type TRecord = {
    // id записи в игре
    game_id: string;
    // Локализованное (русское) название записи
    localize_name: string;
    // id расы текущего героя
    race_game_id: string;
};

/**
 * Тип справочника
 */
export type TDictionary = {
    // Название справочника
    name: string;
    // Список записей справочника
    records: TRecord[];
};

/**
 * Тип экшена для записи справочников в стейт
 */
export type TSetDictionariesAction = {
    type: typeof SET_DICTIONARIES;
    data: TDictionary[];
};

/**
 * Тип экшена при неудачном запросе данных с сервера
 */
export type TSetErrorFetchDictionariesAction = {
    type: typeof SET_DICTIONARIES;
    data: undefined;
};

/**
 * Экшен выставления статуса загрузки словарей
 */
export type TSetFetchingDictionariesStatusAction = {
    type: typeof SET_FETCHING_DICTIONARIES_STATUS;
    data: undefined;
};

/**
 * Тип всех экшенов
 */
export type TDictionaryActions = TSetDictionariesAction
    | TSetErrorFetchDictionariesAction
    | TSetFetchingDictionariesStatusAction;

/**
 * Тип данных в стейте
 */
export type TDictionaryState = {
    error: boolean;
    dictionaries?: TDictionary[];
    isFetching: boolean;
};

/**
 * Тип утилиты, возвращающей данные из справочника
 */
export type TGetDictionaryRecordProperty = (
    dictionaryName: EDictionaryName,
    inputPropertyName: string,
    inputPropertyValue: string,
    outputPropertyName: string,
) => any;

/**
 * Тип утилиты, возвращающей запись из справочника
 */
export type TGetDictionaryRecord = (
    dictionaryName: EDictionaryName,
    inputPropertyName: string,
    inputPropertyValue: string,
) => TRecord | undefined;
