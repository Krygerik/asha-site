import {createRequest} from "../../utils/create-request";
import {
    SET_ALL_RACES_WIN_RATE,
    SET_ERROR_FETCH_ALL_RACE_WIN_RATE,
    TAllWinRateRecord,
    TSetAllRacesWinRateAction,
    TSetErrorFetchAllRaceWinRaceAction
} from "./statistics-page-types";

const setAllRaceWinRate = (data: TAllWinRateRecord): TSetAllRacesWinRateAction => ({
    data,
    type: SET_ALL_RACES_WIN_RATE,
});

const setErrorFetchAllRacesWinRate: TSetErrorFetchAllRaceWinRaceAction = ({
    data: undefined,
    type: SET_ERROR_FETCH_ALL_RACE_WIN_RATE,
});

/**
 * Получение статистики винрейта по расам
 */
export const fetchRacesWinRate = () => async (
    dispatch: any
) => {
    try {
        const allRacesWinRate: { data: { DATA: TAllWinRateRecord } } = await createRequest().get('/get-races-win-rate');

        dispatch(setAllRaceWinRate(allRacesWinRate.data.DATA));
    } catch (e) {
        dispatch(setErrorFetchAllRacesWinRate);
    }
};
