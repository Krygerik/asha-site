import * as React from "react";
import { pick } from "lodash";
import {Button} from "semantic-ui-react";
import {TProfile} from "../../modules/profile/profile-types";
import { ProfilePageTableSegment } from "./profile-page-table-segment";
import {
    GAME_INFO_TABLE_CONFIG,
    PERSONAL_TABLE_CONFIG,
    PRIVATE_TABLE_CONFIG,
} from "./profile-page-constants";

type TProps = {
    activeUserIsAdmin: boolean;
    isProfileOfTheCurrentUser: boolean;
    profileData: TProfile;
    setEditableStatus: (status: boolean) => void;
};

/**
 * Данные профиля в режиме просмотра
 */
export const ProfilePageViewProfile = React.memo((props: TProps) => (
    <>
        {
            (props.isProfileOfTheCurrentUser || props.activeUserIsAdmin) && (
                <ProfilePageTableSegment
                    header="Приватные данные"
                    tableConfig={PRIVATE_TABLE_CONFIG}
                    tableData={pick(props.profileData, ['email'])}
                />
            )
        }
        <ProfilePageTableSegment
            header="Личные данные"
            tableConfig={PERSONAL_TABLE_CONFIG}
            tableData={pick(props.profileData, ['discord'])}
        />
        <ProfilePageTableSegment
            header="Игровые данные"
            tableConfig={GAME_INFO_TABLE_CONFIG}
            tableData={pick(props.profileData, ['nickname', 'rating', 'roles', 'tournaments'])}
        />
        {
            (props.isProfileOfTheCurrentUser || props.activeUserIsAdmin) && (
                <Button
                    color='blue'
                    content="Изменить"
                    onClick={() => props.setEditableStatus(true)}
                    size='large'
                    type="button"
                />
            )
        }
    </>
));
