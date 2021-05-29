import {Selector} from "react-redux";
import {createSelector} from "reselect";
import {flow, find, get, getOr} from "lodash/fp";
import {EPlayerColor} from "../../common/constants";
import {GAME_INFO_NAMESPACE} from "./game-constants";
import {TGame, TPlayer} from "./game-types";

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
    getOr({}, 'game'),
);

/**
 * Получение никнейма победителя
 */
export const getWinnerNickname: Selector<any, string> = createSelector(
    getGameInfo,
    (gameInfo: TGame) => {
        if (gameInfo.disconnect) {
            return "Не определен из-за разрыва соединения";
        }

        return flow(
            find((player: TPlayer) => player.color === gameInfo.winner),
            getOr("Неизвестный", 'nickname'),
        )(gameInfo.players)
    },
);

/**
 * Получение данных красного игрока
 */
export const getRedPlayerData: Selector<any, TPlayer> = createSelector(
    getGameInfo,
    (gameInfo: TGame) => find(
        (player: TPlayer) => player.color === EPlayerColor.RED
    )(gameInfo.players) || {} as TPlayer,
);

/**
 * Получение данных синего игрока
 */
export const getBluePlayerData: Selector<any, TPlayer> = createSelector(
    getGameInfo,
    (gameInfo: TGame) => find(
        (player: TPlayer) => player.color === EPlayerColor.BLUE
    )(gameInfo.players) || {} as TPlayer,
);