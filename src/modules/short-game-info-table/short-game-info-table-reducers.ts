import {
    SET_ERROR_FETCH,
    SET_SHORT_GAME_INFO_LIST,
    TShortGameInfoTableAction,
    TShortGameInfoTableState
} from "./short-game-info-table-types";

const initialState = {
    error: false,
    isFetching: true,
    pagination: {
        activePage: 1,
        totalPages: 0,
    },
    shortGameInfoList: [],
}

export const shortGameInfoTableReducer = (
    state: TShortGameInfoTableState = initialState,
    action: TShortGameInfoTableAction,
) => {
    if (action.type === SET_SHORT_GAME_INFO_LIST) {
        return {
            ...state,
            isFetching: false,
            pagination: {
               ...action.data.pagination,
            },
            shortGameInfoList: [
                ...action.data.shortGameInfoList,
            ]
        }
    }
    if (action.type === SET_ERROR_FETCH) {
        return {
            ...state,
            error: true,
            isFetching: false,
        }
    }

    return state;
}