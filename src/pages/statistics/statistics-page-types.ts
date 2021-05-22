import {ERacesIds} from "../../modules/dictionary/dictionary-types";

/**
 * Тип количества побед/поражений в одном МА
 */
export type TWinRateRecord = {
    // Количество проигранных игр
    lose: number;
    // Количество выигранных игр
    win: number;
}

/**
 * Тип винрейта одной расы со всеми остальными
 */
export type TRaceWinRate = Record<ERacesIds, TWinRateRecord>;

/**
 * Тип винрейта всех рас со всеми
 */
export type TAllWinRateRecord = Record<ERacesIds, TRaceWinRate>;

export const SET_ALL_RACES_WIN_RATE = 'SET_ALL_RACES_WIN_RATE';
export const SET_ERROR_FETCH_ALL_RACE_WIN_RATE = 'SET_ERROR_FETCH_ALL_RACE_WIN_RATE';

export type TSetAllRacesWinRateAction = {
    data: TAllWinRateRecord;
    type: typeof SET_ALL_RACES_WIN_RATE;
}

export type TSetErrorFetchAllRaceWinRaceAction = {
    data: undefined;
    type: typeof SET_ERROR_FETCH_ALL_RACE_WIN_RATE;
}

export type TStatisticsPageState = {
    allRacesWinRate?: TAllWinRateRecord;
    errorFetch: boolean;
    isFetchingRacesWinRate: boolean;
}

export type TStatisticsPageActions = TSetAllRacesWinRateAction | TSetErrorFetchAllRaceWinRaceAction;

export const STATISTICS_PAGE_NAMESPACE = '@@STATISTICS_PAGE_NAMESPACE';
