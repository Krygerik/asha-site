import {createRequest} from "../../../utils/create-request";
import {
    SET_TOURNAMENTS,
    SET_TOURNAMENTS_ERROR_FETCH,
    SET_TOURNAMENTS_FETCHING_STATUS,
    TSetTournamentsAction,
    TSetTournamentsErrorFetchAction,
    TSetTournamentsFetchingStatusAction,
    TTournament,
} from "./tournament-list-types";

const setTournaments = (data: TTournament[]): TSetTournamentsAction => ({
    data,
    type: SET_TOURNAMENTS
});

const setFetchingStatus = (data: boolean): TSetTournamentsFetchingStatusAction => ({
    data,
    type: SET_TOURNAMENTS_FETCHING_STATUS,
});

const setErrorFetch: TSetTournamentsErrorFetchAction = ({
    data: undefined,
    type: SET_TOURNAMENTS_ERROR_FETCH,
});

export const fetchTournaments = () => async (
    dispatch: any
) => {
    try {
        dispatch(setFetchingStatus(true));
        const response: { data: { DATA: TTournament[] } } = await createRequest().get('/tournament-list/get-all');

        dispatch(setTournaments(response.data.DATA));
    } catch (error) {
        dispatch(setErrorFetch);
    } finally {
        dispatch(setFetchingStatus(false));
    }
}
