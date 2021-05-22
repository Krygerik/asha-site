import {connect, ConnectedProps} from "react-redux";
import { createStructuredSelector } from "reselect";
import {fetchRacesWinRate} from "./statistics-page-actions";
import {
    getAllRacesWinRate,
    getStatisticsPageErrorStatus,
    getStatisticsPageFetchingStatus
} from "./statictics-page-selectors";

const mapStateToProps = createStructuredSelector({
    allRacesWinRate: getAllRacesWinRate,
    isErrorFetch: getStatisticsPageErrorStatus,
    isFetching: getStatisticsPageFetchingStatus,
})

const mapDispatchToProps = {
    fetchRacesWinRate,
}

export const withStatisticsPageConnector = connect(mapStateToProps, mapDispatchToProps);

export type TStatisticsPageConnectedProps = ConnectedProps<typeof withStatisticsPageConnector>;
