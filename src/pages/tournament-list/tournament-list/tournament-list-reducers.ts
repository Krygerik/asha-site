import {
    SET_TOURNAMENTS,
    SET_TOURNAMENTS_ERROR_FETCH,
    SET_TOURNAMENTS_FETCHING_STATUS,
    TTournamentListAction,
    TTournamentListState,
} from "./tournament-list-types";

const initState = {
    errorFetch: false,
    isFetching: true,
    tournaments: [],
};

export const tournamentListReducer = (
    state: TTournamentListState = initState,
    action: TTournamentListAction,
) => {
    if (action.type === SET_TOURNAMENTS) {
        return {
            ...state,
            tournaments: action.data,
        };
    }

    if (action.type === SET_TOURNAMENTS_FETCHING_STATUS) {
        return {
            ...state,
            isFetching: action.data,
        };
    }

    if (action.type === SET_TOURNAMENTS_ERROR_FETCH) {
        return {
            ...state,
            errorFetch: true,
        };
    }

    return state;
}