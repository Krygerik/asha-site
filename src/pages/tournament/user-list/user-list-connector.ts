import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getActiveUserId, getCurrentUserIsAdmin} from "../../../modules/profile";

const mapStateToProps = createStructuredSelector({
    activeUserId: getActiveUserId,
    activeUserIsAdmin: getCurrentUserIsAdmin,
});

export const withUserListConnector = connect(mapStateToProps);

export type TWithUserListConnectedProps = ConnectedProps<typeof withUserListConnector>;
