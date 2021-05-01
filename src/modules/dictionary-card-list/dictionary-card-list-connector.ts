import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getDictionaryPropertyUtil} from "../dictionary";

const mapStateToProps = createStructuredSelector({
    getDictionaryProperty: getDictionaryPropertyUtil,
});

export const withDictionaryCardListConnector = connect(mapStateToProps);

export type TDictionaryCardListConnectedProps = ConnectedProps<typeof withDictionaryCardListConnector>;
