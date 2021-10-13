import * as React from "react";
import { pick } from "lodash";
import {Button} from "semantic-ui-react";
import {TProfile} from "../../modules/profile/profile-types";
import { ProfilePageTableSegment } from "./profile-page-table-segment";
import {GAME_INFO_TABLE_CONFIG, PERSONAL_TABLE_CONFIG} from "./profile-page-constants";

type TProps = {
    isProfileOfTheCurrentUser: boolean;
    profileData: TProfile;
    setEditableStatus: (status: boolean) => void;
};

/**
 * Данные профиля в режиме просмотра
 */
export const ProfilePageViewProfile = React.memo((props: TProps) => (
    <>
        <ProfilePageTableSegment
            header="Личные данные"
            tableConfig={PERSONAL_TABLE_CONFIG}
            tableData={pick(props.profileData, ['email', 'discord'])}
        />
        <ProfilePageTableSegment
            header="Игровые данные"
            tableConfig={GAME_INFO_TABLE_CONFIG}
            tableData={pick(props.profileData, ['nickname', 'roles', 'tournaments'])}
        />
        {
            props.isProfileOfTheCurrentUser && (
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
