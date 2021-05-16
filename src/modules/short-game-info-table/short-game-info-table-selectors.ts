import {createSelector, Selector} from "reselect";
import {find, get, map} from "lodash/fp";
import {SHORT_GAME_INFO_TABLE_NAMESPACE} from "./short-game-info-table-constants";
import {EPlayerColor, IShortGame, IShortPlayer } from "./short-game-info-table-types";

const getGamesStoreValue = get(SHORT_GAME_INFO_TABLE_NAMESPACE);

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
        const redHero = find<IShortPlayer>({ color: EPlayerColor.RED })(shortGameInfo.players);
        const blueHero = find<IShortPlayer>({ color: EPlayerColor.BLUE })(shortGameInfo.players);

        const resultIcon = shortGameInfo.winner === EPlayerColor.RED
            ? "angle right"
            : "angle left";

        return {
            blueHero: blueHero?.hero,
            blueNickname: blueHero?.nickname || "Не определено",
            date: shortGameInfo.date,
            id: shortGameInfo._id,
            redHero: redHero?.hero,
            redNickname: redHero?.nickname || "Не определено",
            result: resultIcon,
        };
    }),
);
