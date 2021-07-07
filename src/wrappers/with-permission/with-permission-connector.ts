import {connect, ConnectedProps} from "react-redux";
import { createStructuredSelector } from "reselect";
import {getActiveUserRoles} from "../../modules/profile";

const mapStateToProps = createStructuredSelector({
    activeUserRoles: getActiveUserRoles,
});

export const withPermissionConnector = connect(mapStateToProps);

export type TWithPermissionConnectedProps = ConnectedProps<typeof withPermissionConnector>;
