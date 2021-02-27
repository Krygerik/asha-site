import {SET_GAME_INFO, SET_GAME_INFO_FETCH_FAILURE} from "./game-constants";
import {TGameActions, TGameState} from "./game-types";

const initialState: TGameState = {
    error: false,
    game: undefined,
    isFetched: false,
};

export const gameReducer = (state: TGameState = initialState, action: TGameActions) => {
    if (action.type === SET_GAME_INFO) {
        return {
            error: false,
            game: action.data,
            isFetched: true,
        };
    }

    if (action.type === SET_GAME_INFO_FETCH_FAILURE) {
        return {
            error: true,
            game: action.data,
            isFetched: true,
        };
    }

    return state;
};
