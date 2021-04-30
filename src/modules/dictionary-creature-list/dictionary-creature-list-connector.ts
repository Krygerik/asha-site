import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getDictionaryPropertyUtil} from "../dictionary";

const mapStateToProps = createStructuredSelector({
    getDictionaryProperty: getDictionaryPropertyUtil,
});

export const withDictionaryCreatureList = connect(mapStateToProps);

export type TDictionaryCreatureListConnectedProps = ConnectedProps<typeof withDictionaryCreatureList>;
