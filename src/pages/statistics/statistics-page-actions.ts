import {createRequest} from "../../utils/create-request";
import {
    SET_ALL_RACES_WIN_RATE,
    SET_ERROR_FETCH_ALL_RACE_WIN_RATE,
    SET_LOADING_STATISTICS_STATUS,
    TAllWinRateRecord,
    TFetchStatisticsRequestFilter,
    TSetAllRacesWinRateAction,
    TSetErrorFetchAllRaceWinRaceAction,
    TSetLoadingStatisticsStatusAction
} from "./statistics-page-types";

const setLoadingStatus: TSetLoadingStatisticsStatusAction = ({
    data: undefined,
    type: SET_LOADING_STATISTICS_STATUS
});

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
export const fetchRacesWinRate = (filter: TFetchStatisticsRequestFilter) => async (
    dispatch: any
) => {
    try {
        await dispatch(setLoadingStatus);

        const allRacesWinRate: { data: { DATA: TAllWinRateRecord } } = await createRequest()
            .post('/get-races-win-rate', { filter });

        dispatch(setAllRaceWinRate(allRacesWinRate.data.DATA));
    } catch (e) {
        dispatch(setErrorFetchAllRacesWinRate);
    }
};
