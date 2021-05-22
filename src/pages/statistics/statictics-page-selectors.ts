import {Selector} from "react-redux";
import {get} from "lodash/fp";
import {createSelector} from "reselect";
import {STATISTICS_PAGE_NAMESPACE, TAllWinRateRecord} from "./statistics-page-types";

const getStatisticsPageState = get(STATISTICS_PAGE_NAMESPACE);

/**
 * Статус загрузки винрейтов
 */
export const getStatisticsPageFetchingStatus: Selector<any, boolean> = createSelector(
    getStatisticsPageState,
    get('isFetchingRacesWinRate'),
);

/**
 * Статус ошибки загрузки винрейтов
 */
export const getStatisticsPageErrorStatus: Selector<any, boolean> = createSelector(
    getStatisticsPageState,
    get('errorFetch'),
);

/**
 * Винрейт по всем расам
 */
export const getAllRacesWinRate: Selector<any, TAllWinRateRecord> = createSelector(
    getStatisticsPageState,
    get('allRacesWinRate'),
);
