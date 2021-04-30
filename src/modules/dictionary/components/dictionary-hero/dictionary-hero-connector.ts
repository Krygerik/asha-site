import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getDictionaryPropertyUtil, getDictionaryRecordUtil} from "../../dictionary-selectors";

const mapStateToProps = createStructuredSelector({
    getDictionaryProperty: getDictionaryPropertyUtil,
    getDictionaryRecord: getDictionaryRecordUtil,
});

export const withDictionaryHeroConnector = connect(mapStateToProps);

export type TDictionaryHeroConnectedProps = ConnectedProps<typeof withDictionaryHeroConnector>;
