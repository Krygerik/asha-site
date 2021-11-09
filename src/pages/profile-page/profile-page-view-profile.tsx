import * as React from "react";
import {useHistory} from "react-router-dom";
import {noop, pick } from "lodash";
import {Button} from "semantic-ui-react";
import {createRequest} from "../../utils/create-request";
import {TProfile} from "../../modules/profile/profile-types";
import {SimpleModalContext} from "../../modules/simple-modal";
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
export const ProfilePageViewProfile = React.memo((props: TProps) => {
    const history = useHistory();
    const { showSimpleModal } = React.useContext(SimpleModalContext);

    /**
     * Запрос на удаление пользователя
     */
    const requestDeleteUser = async () => {
        await createRequest().post(
            '/auth/delete-user',
            {
                id: props.profileData._id,
            }
        );

        history.go(0);
    }

    /**
     * Обработчик клика на кнопку "Удаление пользователя"
     */
    const handleClickDeleteUser = () => {
        showSimpleModal({
            handleClickNo: noop,
            handleClickYes: requestDeleteUser,
            message: `Пользователь "${props.profileData.nickname}" будет удален, вы хотите продолжить?`,
            title: 'Удаление пользователя'
        });
    }

    return (
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
                tableData={pick(props.profileData, ['nickname', 'rating', 'original_rating', 'roles', 'tournaments'])}
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
            {
                props.activeUserIsAdmin && (
                    <Button
                        color='red'
                        content="Удалить"
                        onClick={handleClickDeleteUser}
                        size='large'
                        type="button"
                    />
                )
            }
        </>
    )
});
