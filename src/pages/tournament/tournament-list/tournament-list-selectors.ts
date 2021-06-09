import { get } from "lodash/fp";
import { createSelector } from "reselect";
import {Selector} from "react-redux";
import {TOURNAMENT_LIST_NAMESPACE, TTournament} from "./tournament-list-types";

const getTournamentPageState = get(TOURNAMENT_LIST_NAMESPACE)

/**
 * Список турниров
 */
export const getTournaments: Selector<any, TTournament[]> = createSelector(
    getTournamentPageState,
    get('tournaments'),
);

/**
 * Статус загрузки турниров
 */
export const getIsFetchingStatus: Selector<any, boolean> = createSelector(
    getTournamentPageState,
    get('isFetching'),
);

/**
 * Произошла ошибка при загрузке
 */
export const getIsErrorFetch: Selector<any, boolean> = createSelector(
    getTournamentPageState,
    get('errorFetch'),
);