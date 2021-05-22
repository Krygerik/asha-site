import {
    SET_ALL_RACES_WIN_RATE,
    SET_ERROR_FETCH_ALL_RACE_WIN_RATE,
    TStatisticsPageActions,
    TStatisticsPageState
} from "./statistics-page-types";

const initialState = {
    allRacesWinRate: undefined,
    errorFetch: false,
    isFetchingRacesWinRate: true,
};

export const statisticsPageReducer = (
    state: TStatisticsPageState = initialState,
    action: TStatisticsPageActions
) => {
    if (action.type === SET_ALL_RACES_WIN_RATE) {
        return {
            ...state,
            allRacesWinRate: action.data,
            isFetchingRacesWinRate: false,
        }
    }

    if (action.type === SET_ERROR_FETCH_ALL_RACE_WIN_RATE) {
        return {
            ...state,
            errorFetch: true,
            isFetchingRacesWinRate: false,
        }
    }

    return state;
}
