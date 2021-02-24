import {connect, ConnectedProps} from "react-redux";
import { createStructuredSelector } from "reselect";
import {getHeaderMenuNavigation} from "./page-header-selectors";

const mapStateToProps = createStructuredSelector({
    headerMenuNavigation: getHeaderMenuNavigation,
});

export const withPageHeaderConnector = connect(mapStateToProps);

export type TPageHeaderConnectedProps = ConnectedProps<typeof withPageHeaderConnector>;
