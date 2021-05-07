import {EDictionaryName} from "./dictionary-constants";

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
 * Тип контекста словарей
 */
export type TDictionaryContext = {
    dictionaries: Record<EDictionaryName, TDictionary> | {};
    fetchDictionaries: () => void;
    getDictionaryRecordByGameId: (dictName: EDictionaryName, gameId: string) => TRecord;
    getLocalizeDictionaryValueByGameId: (dictName: EDictionaryName, gameId: string) => string;
    isErrorFetch: boolean;
    isFetching: boolean;
};
