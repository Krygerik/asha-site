import {connect, ConnectedProps} from "react-redux";
import { createStructuredSelector } from "reselect";
import {fetchPlayerProfile} from "./profile-page-actions";
import {
    getEditProfileInitialValues,
    getError,
    getErrorMessage,
    getFetchingStatus,
    getIsProfileOfTheCurrentUser,
    getProfilePageData,
} from "./profile-page-selectors";

const mapStateToProps = createStructuredSelector({
    editProfileInitialValues: getEditProfileInitialValues,
    errorMessage: getErrorMessage,
    hasError: getError,
    isFetching: getFetchingStatus,
    isProfileOfTheCurrentUser: getIsProfileOfTheCurrentUser,
    profileData: getProfilePageData,
});

const mapDispatchToProps = {
    fetchPlayerProfile,
}

export const withProfilePageConnector = connect(mapStateToProps, mapDispatchToProps);

export type TProfilePageConnectedProps = ConnectedProps<typeof withProfilePageConnector>;
