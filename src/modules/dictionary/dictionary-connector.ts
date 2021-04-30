import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {fetchDictionaries} from "./dictionary-actions";
import {getIsErrorFetchedDictionaries, getIsFetchedDictionaries} from "./dictionary-selectors";

const mapStateToProps = createStructuredSelector({
    isErrorFetchedDictionaries: getIsErrorFetchedDictionaries,
    isFetchedDictionary: getIsFetchedDictionaries,
});

const mapDispatchToProps = {
    fetchDictionaries,
};

export const withDictionaryConnector = connect(mapStateToProps, mapDispatchToProps);

export type TDictionaryConnectedProps = ConnectedProps<typeof withDictionaryConnector>;
