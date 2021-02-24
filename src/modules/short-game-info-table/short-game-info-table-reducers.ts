import {SET_SHORT_GAME_INFO_LIST} from "./short-game-info-table-actions";

const initialState = {
    isFetched: false,
    shortGameInfoList: []
}

export const shortGameInfoTableReducer = (state = initialState, action: any) => {
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