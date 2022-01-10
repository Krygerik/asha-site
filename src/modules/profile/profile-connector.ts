import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getErrorMessage, getIsFetchingProfileStatus, getProfile} from "./profile-selectors";
import {fetchProfile, removeProfileData} from "./profile-actions";

const mapStateToProps = createStructuredSelector({
    errorMessage: getErrorMessage,
    isFetchingStatus: getIsFetchingProfileStatus,
    profile: getProfile,
})

const mapDispatchToProps = {
    fetchProfile,
    removeProfileData,
};

export const withProfileConnector = connect(mapStateToProps, mapDispatchToProps);

export type TProfileConnectedProps = ConnectedProps<typeof withProfileConnector>;
