import {createSelector, Selector} from "reselect";
import {get} from "lodash/fp";
import {SHORT_GAME_INFO_TABLE_NAMESPACE} from "./short-game-info-table-constants";
import {IShortGame, TPagination} from "./short-game-info-table-types";
import {transformShortGameInfoListToTableData} from "./short-game-info-table-utils";

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

export const getShortGameInfoListTableData: Selector<any, any[]> = createSelector(
    getShortGameInfoListResponse,
    transformShortGameInfoListToTableData,
);
