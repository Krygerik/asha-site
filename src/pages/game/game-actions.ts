import {createRequest} from "../../utils/create-request";
import {SET_GAME_INFO, SET_GAME_INFO_FETCH_FAILURE} from "./game-constants";
import {TGame, TSetGameAction} from "./game-types";

const setGameInfo = (data: TGame): TSetGameAction => ({
    type: SET_GAME_INFO,
    data,
});

const setGameInfoFetchFailure = ({
    type: SET_GAME_INFO_FETCH_FAILURE,
});

/**
 * Запрос полной информации об игре по id
 */
export const fetchFullGameInfo = (id: string) => async (
    dispatch: any
) => {
    try {
        const response = await createRequest().get(`/game/${id}`);

        dispatch(setGameInfo(response.data.DATA));
    } catch {
        dispatch(setGameInfoFetchFailure);
    }
};
