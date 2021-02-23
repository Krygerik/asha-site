import {createRequest} from "../../utils/create-request";
import {IShortGame, TResponse} from "./games-types";

export const SET_SHORT_GAME_INFO_LIST = "SET_SHORT_GAME_INFO_LIST";
const setShortGameInfoList = (data: IShortGame[]) => ({
    type: SET_SHORT_GAME_INFO_LIST,
    data,
});

/**
 * Запрос на получение краткого списка игр
 */
export const fetchGames = () => async (
    dispatch: any
) => {
    const shortGameInfoList: { data: TResponse } = await createRequest().get('/get-all-short-game-info');

    dispatch(setShortGameInfoList(shortGameInfoList.data.DATA));
}
