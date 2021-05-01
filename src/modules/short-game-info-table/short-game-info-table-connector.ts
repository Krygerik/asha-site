import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getIsFetchedShortGameInfoList, getShortGameInfoListTableData} from "./short-game-info-table-selectors";
import {fetchGames} from "./short-game-info-table-actions";

const mapStateToProps = createStructuredSelector({
    isFetchedShortGameInfoList: getIsFetchedShortGameInfoList,
    tableData: getShortGameInfoListTableData,
});

const mapDispatchToProps = {
    fetchGames,
};

export const withShortGameInfoTableConnector = connect(mapStateToProps, mapDispatchToProps);

export type TShortGameInfoTableConnectedProps = ConnectedProps<typeof withShortGameInfoTableConnector>;
