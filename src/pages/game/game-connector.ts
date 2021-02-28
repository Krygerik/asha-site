import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getGameInfo, getHasError, getIsFetchedGameInfo} from "./game-selectors";
import {fetchFullGameInfo} from "./game-actions";

const mapStateToProps = createStructuredSelector({
    gameInfo: getGameInfo,
    hasError: getHasError,
    isFetchedGameInfo: getIsFetchedGameInfo,
});

const mapDispatchToProps = {
    fetchFullGameInfo
};

export const withGameConnector = connect(mapStateToProps, mapDispatchToProps);

export type TGameConnectedProps = ConnectedProps<typeof withGameConnector>;
