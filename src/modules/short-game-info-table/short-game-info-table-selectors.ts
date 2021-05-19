import {createSelector, Selector} from "reselect";
import {find, flow, get, map} from "lodash/fp";
import {SHORT_GAME_INFO_TABLE_NAMESPACE} from "./short-game-info-table-constants";
import {EPlayerColor, IShortGame, IShortPlayer, TPagination, TUserIdWithNickname} from "./short-game-info-table-types";
import {DropdownItemProps} from "semantic-ui-react";

const getGamesStoreValue = get(SHORT_GAME_INFO_TABLE_NAMESPACE);

/**
 * Статус загрузки данных для таблицы из сервера
 */
export const getIsFetchingStatusShortGameInfoList: Selector<any, boolean> = createSelector(
    getGamesStoreValue,
    get('isFetching')
);

/**
 * Наличие ошибок при загрузке данных для таблицы из сервера
 */
export const getErrorFetchingStatus: Selector<any, boolean> = createSelector(
    getGamesStoreValue,
    get('error')
);

/**
 * Данные пагинации
 */
export const getPagination: Selector<any, TPagination> = createSelector(
    getGamesStoreValue,
    get('pagination')
);

/**
 * Получение данных из ответа запроса краткой информации
 */
const getShortGameInfoListResponse: Selector<any, IShortGame[]> = createSelector(
    getGamesStoreValue,
    get('shortGameInfoList'),
);

/**
 * Список всех ников всех пользователей
 */
export const getUserNicknamesOptionList: Selector<any, DropdownItemProps[]> = createSelector(
    getGamesStoreValue,
    flow(
        get('allUserList'),
        map((item: TUserIdWithNickname) => ({
            key: item._id,
            text: item.nickname,
            value: item._id,
        }))
    )
);

export const getShortGameInfoListTableData: Selector<any, any[]> = createSelector(
    getShortGameInfoListResponse,
    map((shortGameInfo: IShortGame) => {
        const redHero = find<IShortPlayer>({ color: EPlayerColor.RED })(shortGameInfo.players);
        const blueHero = find<IShortPlayer>({ color: EPlayerColor.BLUE })(shortGameInfo.players);


        const resultIcon = shortGameInfo.disconnect
            ? "broken chain"
            : shortGameInfo.winner === EPlayerColor.RED
                ? "angle right"
                : "angle left";

        return {
            blueHero: blueHero?.hero,
            blueNickname: blueHero?.nickname || "Неизвестный",
            date: shortGameInfo.date,
            id: shortGameInfo._id,
            redHero: redHero?.hero,
            redNickname: redHero?.nickname || "Неизвестный",
            result: resultIcon,
        };
    }),
);
