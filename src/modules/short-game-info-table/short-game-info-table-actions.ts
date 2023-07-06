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

        const requestBody = {
            map_type: filter.map_type,
            map_version: filter.map_version,
            players: [
                {
                    hero: filter.hero,
                    race: filter.race,
                    user_id: filter.user_id,
                },
                {
                    hero: filter.hero_1,
                    race: filter.race_1,
                    user_id: filter.user_id_1,
                }
            ]
        };

        const shortGameInfoList: { data: TResponse } = await createRequest().post(
            '/get-short-game-info-list',
            requestBody,
            { params }
        );

        dispatch(setShortGameInfoList(shortGameInfoList.data.DATA));
    } catch (e) {
        dispatch(setErrorFetch);
    }
}
