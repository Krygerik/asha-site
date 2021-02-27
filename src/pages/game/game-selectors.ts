import {Selector} from "react-redux";
import {createSelector} from "reselect";
import {get} from "lodash/fp";
import {GAME_INFO_NAMESPACE} from "./game-constants";

export const getGameState = get(GAME_INFO_NAMESPACE);

/**
 * Статус загрузки данных из сервера
 */
export const getIsFetchedGameInfo: Selector<any, boolean> = createSelector(
    getGameState,
    get('isFetched'),
);

/**
 * Статус загрузки данных из сервера
 */
export const getHasError: Selector<any, boolean> = createSelector(
    getGameState,
    get('error'),
);
