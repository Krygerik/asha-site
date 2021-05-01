import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getDictionaryPropertyUtil} from "../dictionary";

const mapStateToProps = createStructuredSelector({
    getDictionaryProperty: getDictionaryPropertyUtil,
});

export const withDictionaryTableList = connect(mapStateToProps);

export type TDictionaryTableListConnectedProps = ConnectedProps<typeof withDictionaryTableList>;
