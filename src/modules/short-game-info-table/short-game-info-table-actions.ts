import {createRequest} from "../../utils/create-request";
import {IShortGame, TGetShortGameInfoParams, TResponse} from "./short-game-info-table-types";

export const SET_SHORT_GAME_INFO_LIST = "SET_SHORT_GAME_INFO_LIST";
const setShortGameInfoList = (data: IShortGame[]) => ({
    type: SET_SHORT_GAME_INFO_LIST,
    data,
});

/**
 * Запрос на получение краткой информации по всем играм
 */
export const fetchGames = (params: TGetShortGameInfoParams) => async (
    dispatch: any
) => {
    const shortGameInfoList: { data: TResponse } = await createRequest().get(
        '/get-short-game-info-list',
        { params }
    );

    dispatch(setShortGameInfoList(shortGameInfoList.data.DATA));
}
// test