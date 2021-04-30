import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {fetchDictionaries} from "./dictionary-actions";
import {
    getDictionaries,
    getIsErrorFetchedDictionaries,
    getIsFetchingStatusDictionaries,
} from "./dictionary-selectors";

const mapStateToProps = createStructuredSelector({
    dictionaries: getDictionaries,
    isErrorFetchedDictionaries: getIsErrorFetchedDictionaries,
    isFetchingStatusDictionaries: getIsFetchingStatusDictionaries,
});

const mapDispatchToProps = {
    fetchDictionaries,
};

export const withDictionaryConnector = connect(mapStateToProps, mapDispatchToProps);

export type TDictionaryConnectedProps = ConnectedProps<typeof withDictionaryConnector>;
