import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getIsFetchedShortGameInfoList, getShortGameInfoListTableData} from "./games-selectors";
import {fetchGames} from "./games-actions";

const mapStateToProps = createStructuredSelector({
    isFetchedShortGameInfoList: getIsFetchedShortGameInfoList,
    tableData: getShortGameInfoListTableData,
});

const mapDispatchToProps = {
    fetchGames,
};

export const GamesConnector = connect(mapStateToProps, mapDispatchToProps);

export type TGameConnectedProps = ConnectedProps<typeof GamesConnector>;
