import * as React from "react"
import {ERoles} from "../../modules/profile";
import {TWithPermissionConnectedProps, withPermissionConnector } from "./with-permission-connector";

type TProps = {
    accessRole: ERoles;
    children: any;
} & TWithPermissionConnectedProps

/**
 * Декоратор для отображения дочернего компонента только разрешенным ролям
 */
export const WithPermissionWrapper = React.memo((props: TProps) => {
    if (!props.activeUserRoles || !props.activeUserRoles.includes(props.accessRole)) {
        return null;
    }

    return props.children;
})

export const WithPermissionWrapperController = withPermissionConnector(WithPermissionWrapper);
