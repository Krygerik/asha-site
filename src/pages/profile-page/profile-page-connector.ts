import {connect, ConnectedProps} from "react-redux";
import { createStructuredSelector } from "reselect";
import {fetchPlayerProfile} from "./profile-page-actions";
import {getError, getErrorMessage, getFetchingStatus, getProfilePageData} from "./profile-page-selectors";

const mapStateToProps = createStructuredSelector({
    errorMessage: getErrorMessage,
    hasError: getError,
    isFetching: getFetchingStatus,
    profileData: getProfilePageData,
});

const mapDispatchToProps = {
    fetchPlayerProfile,
}

export const withProfilePageConnector = connect(mapStateToProps, mapDispatchToProps);

export type TProfilePageConnectedProps = ConnectedProps<typeof withProfilePageConnector>;
