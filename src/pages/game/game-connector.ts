import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {
    getBluePlayerData,
    getGameInfo,
    getHasError,
    getIsFetchedGameInfo,
    getRedPlayerData,
    getWinnerNickname,
} from "./game-selectors";
import {fetchFullGameInfo} from "./game-actions";

const mapStateToProps = createStructuredSelector({
    bluePlayer: getBluePlayerData,
    gameInfo: getGameInfo,
    hasError: getHasError,
    isFetchedGameInfo: getIsFetchedGameInfo,
    redPlayer: getRedPlayerData,
    winnerNickname: getWinnerNickname,
});

const mapDispatchToProps = {
    fetchFullGameInfo
};

export const withGameConnector = connect(mapStateToProps, mapDispatchToProps);

export type TGameConnectedProps = ConnectedProps<typeof withGameConnector>;
