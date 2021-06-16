import {connect, ConnectedProps} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getActiveUserId} from "../../../modules/profile";

const mapStateToProps = createStructuredSelector({
    activeUserId: getActiveUserId,
});

export const withUserListConnector = connect(mapStateToProps);

export type TWithUserListConnectedProps = ConnectedProps<typeof withUserListConnector>;
