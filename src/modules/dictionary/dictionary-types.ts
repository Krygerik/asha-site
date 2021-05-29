import {EDictionaryName} from "./dictionary-constants";

/**
 * Перечисление id всех рас
 */
export enum ERacesIds {
    Haven = 1,
    Inferno = 2,
    Necropolis = 3,
    Sylvan = 4,
    Academy = 5,
    Dungeon = 6,
    Fortress = 7,
    Stronghold = 8,
}

export type TRaceRecord = {
    // id записи в игре
    game_id: ERacesIds;
    // Локализованное (русское) название записи
    localize_name: string;
};

export type THeroRecord = {
    // id записи в игре
    game_id: ERacesIds;
    // Локализованное (русское) название записи
    localize_name: string;
    // id расы текущего героя
    race_game_id: string;
}

export type TCommonDictionaryRecord = TRaceRecord | THeroRecord;

export type TRacesDictionary = {
    // Название справочника
    name: EDictionaryName.Races;
    // Список записей справочника
    records: TRaceRecord[];
}

export type THeroesDictionary = {
    // Название справочника
    name: EDictionaryName.Heroes;
    // Список записей справочника
    records: THeroRecord[];
}

/**
 * Тип справочника
 */
export type TDictionary = TRacesDictionary | THeroesDictionary;

/**
 * Тип контекста словарей
 */
export type TDictionaryContext = {
    dictionaries: Record<EDictionaryName, TDictionary> | {};
    fetchDictionaries: () => void;
    getDictionaryRecordByGameId: (dictName: EDictionaryName, gameId: string | ERacesIds) => TRaceRecord | THeroRecord;
    getDictionaryRecords: (dictName: EDictionaryName) => TRaceRecord[] | THeroRecord[];
    getLocalizeDictionaryValueByGameId: (dictName: EDictionaryName, gameId: string) => string;
    isErrorFetch: boolean;
    isFetching: boolean;
};
