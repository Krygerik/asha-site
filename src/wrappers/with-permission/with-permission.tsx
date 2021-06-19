import * as React from "react";
import {ERoles} from "../../modules/profile";
import {TWithPermissionConnectedProps, withPermissionConnector} from "./with-permission-connector";

/**
 * Контент, показываемый только передаваемым ролям
 */
export const withPermission = (accessRole: ERoles) => (Component: React.FC<any>) => withPermissionConnector(
    (props: any & TWithPermissionConnectedProps) => {
        // Если пользователь не залогинен или роли не подгрузились еще
        if (!props.activeUserRoles) {
            return null;
        }
        // Если пользователь не имеет нужной роли
        if (!props.activeUserRoles.includes(accessRole)) {
            return null;
        }

        return (
            <Component
                {...props}
            />
        )
    }
);