import {Icon} from "semantic-ui-react";
import * as React from "react";
import {createSelector, Selector} from "reselect";
import {find, get, map} from "lodash/fp";
import {GAMES_NAMESPACE} from "./games-constants";
import {EPlayerColor, IShortGame, IShortPlayer} from "./games-types";

const getGamesStoreValue = get(GAMES_NAMESPACE);

/**
 * Статус загрузки данных для таблицы из сервера
 */
export const getIsFetchedShortGameInfoList: Selector<any, boolean> = createSelector(
    getGamesStoreValue,
    get('isFetched')
);

/**
 * Получение данных из ответа запроса краткой информации
 */
const getShortGameInfoListResponse: Selector<any, IShortGame[]> = createSelector(
    getGamesStoreValue,
    get('shortGameInfoList'),
);

export const getShortGameInfoListTableData: Selector<any, any[]> = createSelector(
    getShortGameInfoListResponse,
    map((shortGameInfo: IShortGame) => {
        const allPlayer: IShortPlayer[] = [
            shortGameInfo.winning_player,
            shortGameInfo.loosing_player,
        ];

        const redHero = find<IShortPlayer>({ color: EPlayerColor.RED })(allPlayer);
        const blueHero = find<IShortPlayer>({ color: EPlayerColor.BLUE })(allPlayer);

        const resultIcon = redHero?.nickname === shortGameInfo.winning_player.nickname
            ? "angle right"
            : "angle left";

        return {
            date: shortGameInfo.date,
            redNickname: redHero?.nickname,
            redHero: redHero?.hero,
            result: resultIcon,
            blueHero: blueHero?.hero,
            blueNickname: blueHero?.nickname,
        };
    }),
);
