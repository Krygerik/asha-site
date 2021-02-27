import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getHasError, getIsFetchedGameInfo} from "./game-selectors";
import {fetchFullGameInfo} from "./game-actions";

const mapStateToProps = createStructuredSelector({
    isFetchedGameInfo: getIsFetchedGameInfo,
    hasError: getHasError,
});

const mapDispatchToProps = {
    fetchFullGameInfo
};

export const withGameConnector = connect(mapStateToProps, mapDispatchToProps);

export type TGameConnectedProps = ConnectedProps<typeof withGameConnector>;
