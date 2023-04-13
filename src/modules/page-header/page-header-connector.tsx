import {connect, ConnectedProps} from "react-redux";
import { createStructuredSelector } from "reselect";
import { getHeaderMenuNavigation } from "./page-header-selectors";
import {fetchMapTypeList} from "./page-header-actions";

const mapStateToProps = createStructuredSelector({
    headerMenuNavigation: getHeaderMenuNavigation,
});

const dispatchToProps = {
    fetchMapTypeList,
};

export const withPageHeaderConnector = connect(mapStateToProps, dispatchToProps);

export type TPageHeaderConnectedProps = ConnectedProps<typeof withPageHeaderConnector>;
