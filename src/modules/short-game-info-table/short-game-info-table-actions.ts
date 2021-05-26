import {createRequest} from "../../utils/create-request";
import {
    SET_ERROR_FETCH,
    SET_LOADING_GAME_STATUS,
    SET_SHORT_GAME_INFO_LIST,
    TGetShortGameInfoParams,
    TResponse,
    TResponseData,
    TSearchGamesFormValues,
    TSetErrorFetchAction,
    TSetLoadingGameStatusAction,
    TSetShortGamesInfoListAction,
} from "./short-game-info-table-types";

const setShortGameInfoList = (data: TResponseData): TSetShortGamesInfoListAction => ({
    data,
    type: SET_SHORT_GAME_INFO_LIST,
});

const setErrorFetch: TSetErrorFetchAction = ({
    data: undefined,
    type: SET_ERROR_FETCH,
});

const setLoadingGameStatus = (newStatus: boolean): TSetLoadingGameStatusAction => ({
    data: newStatus,
    type: SET_LOADING_GAME_STATUS,
});

/**
 * Запрос на получение краткой информации по всем играм
 */
export const fetchGames = (params: TGetShortGameInfoParams, filter: TSearchGamesFormValues = {}) => async (
    dispatch: any
) => {
    try {
        await dispatch(setLoadingGameStatus(true));

        const shortGameInfoList: { data: TResponse } = await createRequest().post(
            '/get-short-game-info-list',
            { filter },
            { params }
        );

        dispatch(setShortGameInfoList(shortGameInfoList.data.DATA));
    } catch (e) {
        dispatch(setErrorFetch);
    }
}
