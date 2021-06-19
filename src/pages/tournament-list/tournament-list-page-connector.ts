import {connect, ConnectedProps} from "react-redux";
import { createStructuredSelector } from "reselect";
import { getActiveUserRoles } from "../../modules/profile";

const mapStateToProps = createStructuredSelector({
    activeUserRoles: getActiveUserRoles,
});

export const withTournamentListConnector = connect(mapStateToProps);

export type TWithTournamentListConnectedProps = ConnectedProps<typeof withTournamentListConnector>;
