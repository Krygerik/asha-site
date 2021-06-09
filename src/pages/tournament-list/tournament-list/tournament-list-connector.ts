import {connect, ConnectedProps} from "react-redux";
import { createStructuredSelector } from "reselect";
import {fetchTournaments} from "./tournament-list-actions";
import {getIsErrorFetch, getIsFetchingStatus, getTournaments} from "./tournament-list-selectors";

const mapStateToProps = createStructuredSelector({
    isErrorFetch: getIsErrorFetch,
    isFetching: getIsFetchingStatus,
    tournaments: getTournaments,
});

const mapDispatchToProps = {
    fetchTournaments,
};

export const withTournamentPageConnector = connect(mapStateToProps, mapDispatchToProps);

export type TTournamentPageConnectedProps = ConnectedProps<typeof withTournamentPageConnector>;
