import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {
    getErrorFetchingStatus,
    getIsFetchingStatusShortGameInfoList,
    getPagination,
    getShortGameInfoListTableData,
    getUserNicknamesOptionList
} from "./short-game-info-table-selectors";
import {fetchGames, fetchUsersIdWithNicknames} from "./short-game-info-table-actions";

const mapStateToProps = createStructuredSelector({
    isErrorFetch: getErrorFetchingStatus,
    isFetchingStatus: getIsFetchingStatusShortGameInfoList,
    pagination: getPagination,
    tableData: getShortGameInfoListTableData,
    userNicknamesOptionList: getUserNicknamesOptionList,
});

const mapDispatchToProps = {
    fetchGames,
    fetchUsersIdWithNicknames,
};

export const withShortGameInfoTableConnector = connect(mapStateToProps, mapDispatchToProps);

export type TShortGameInfoTableConnectedProps = ConnectedProps<typeof withShortGameInfoTableConnector>;
