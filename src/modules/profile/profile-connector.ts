import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getIsErrorFetchingStatus, getIsFetchingProfileStatus, getProfile} from "./profile-selectors";
import {fetchProfile} from "./profile-actions";

const mapStateToProps = createStructuredSelector({
    isErrorFetch: getIsErrorFetchingStatus,
    isFetchingStatus: getIsFetchingProfileStatus,
    profile: getProfile,
})

const mapDispatchToProps = {
    fetchProfile
};

export const withProfileConnector = connect(mapStateToProps, mapDispatchToProps);

export type TProfileConnectedProps = ConnectedProps<typeof withProfileConnector>;
