import {connect, ConnectedProps} from "react-redux";
import { createStructuredSelector } from "reselect";
import {fetchMapTypeList, handleChangeSelectedMapType} from "../page-header-actions";
import {
    getErrorFetchMessage,
    getIsFetching,
    getMapTypeOptionList,
    getSelectedMapType,
} from "../page-header-selectors";

const mapStateToProps = createStructuredSelector({
    errorFetchMessage: getErrorFetchMessage,
    isFetching: getIsFetching,
    mapTypeOptionList: getMapTypeOptionList,
    selectedMapType: getSelectedMapType,
});

const dispatchToProps = {
    fetchMapTypeList,
    handleChangeSelectedMapType,
};

export const withMapTypeSelectConnector = connect(mapStateToProps, dispatchToProps);

export type TMapTypeSelectConnectedProps = ConnectedProps<typeof withMapTypeSelectConnector>;
