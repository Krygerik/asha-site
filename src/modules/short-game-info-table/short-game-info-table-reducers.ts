import {
    SET_ERROR_FETCH,
    SET_SHORT_GAME_INFO_LIST,
    SET_USERS_ID_WITH_NICKNAME_LIST,
    TShortGameInfoTableAction,
    TShortGameInfoTableState
} from "./short-game-info-table-types";

const initialState = {
    allUserList: [],
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

    if (action.type === SET_USERS_ID_WITH_NICKNAME_LIST) {
        return {
            ...state,
            allUserList: action.data
        }
    }

    return state;
}