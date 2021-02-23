import {SET_SHORT_GAME_INFO_LIST} from "./games-actions";

const initialState = {
    isFetched: false,
    shortGameInfoList: []
}

export const gamesReducer = (state = initialState, action: any) => {
    console.log("action:", action);
    if (action.type === SET_SHORT_GAME_INFO_LIST) {
        return {
            ...state,
            isFetched: true,
            shortGameInfoList: [
                ...action.data,
            ]
        }
    }

    return state;
}