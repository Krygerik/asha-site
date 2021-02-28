import {Selector} from "react-redux";
import {createSelector} from "reselect";
import {get} from "lodash/fp";
import {GAME_INFO_NAMESPACE} from "./game-constants";
import {TGame} from "./game-types";

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

/**
 * Получение загруженных данных об игре с сервера
 */
export const getGameInfo: Selector<any, TGame> = createSelector(
    getGameState,
    get('game'),
);
