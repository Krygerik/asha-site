import * as React from "react";
import {useHistory} from "react-router-dom";
import {noop, pick } from "lodash";
import {Button, Message} from "semantic-ui-react";
import {createRequest} from "../../../utils/create-request";
import {SimpleModalContext} from "../../../modules/simple-modal";
import { ProfilePageTableSegment } from "./profile-page-table-segment";
import {
    ACCOUNT_BANNED_WARNING,
    GAME_INFO_TABLE_CONFIG,
    PERSONAL_TABLE_CONFIG,
} from "../profile-page-constants";
import {TProfilePageData} from "../profile-page-types";
import { ProfilePageMergingAccounts } from "./profile-page-merging-accounts";

type TProps = {
    activeUserIsAdmin: boolean;
    isProfileOfTheCurrentUser: boolean;
    profileData: TProfilePageData | null;
    setEditableStatus: (status: boolean) => void;
};

/**
 * Данные профиля в режиме просмотра
 */
export const ProfilePageViewProfile = React.memo((
    {
        activeUserIsAdmin,
        isProfileOfTheCurrentUser,
        profileData,
        setEditableStatus,
    }: TProps
) => {
    const history = useHistory();
    const { showSimpleModal } = React.useContext(SimpleModalContext);

    /**
     * Запрос на изменение состояния бана у пользователя
     */
    const requestSetUserBannedStatus = (status: boolean) => async () => {
        try {
            await createRequest().post(
                '/account/change-ban-status',
                {
                    id: profileData?._id,
                    status,
                }
            );

            history.go(0);
        } catch (error) {
            showSimpleModal({
                handleClickYes: noop,
                isPositive: true,
                message: error.response?.data?.MESSAGE,
                title: 'Ошибка при изменении статуса блокировки'
            });

        }
    }

    /**
     * Обработчик клика на кнопку изменения состояния бана у пользователя
     */
    const handleClickChangeUserBannedStatus = () => {
        showSimpleModal({
            handleClickNo: noop,
            handleClickYes: requestSetUserBannedStatus(!profileData?.banned),
            message: `Пользователь "${profileData?.nickname}" будет ${
                profileData?.banned ? 'Разблокирован' : 'заблокирован'
            }, вы хотите продолжить?`,
            title: 'Блокировка пользователя'
        });
    }

    return (
        <React.Fragment>
            {
                profileData?.banned && (
                    <Message
                        color='red'
                        content={ACCOUNT_BANNED_WARNING}
                    />
                )
            }
            {
                isProfileOfTheCurrentUser && !profileData?.merged_with_old_account && (
                    <ProfilePageMergingAccounts
                        id={profileData?._id}
                    />
                )
            }
            <ProfilePageTableSegment
                header="Личные данные"
                tableConfig={PERSONAL_TABLE_CONFIG}
                tableData={pick(profileData, ['username', 'discriminator'])}
            />
            <ProfilePageTableSegment
                header="Игровые данные"
                tableConfig={GAME_INFO_TABLE_CONFIG}
                tableData={pick(
                    profileData,
                    ['nickname', 'rating', 'original_rating', 'roles', 'tournaments']
                )}
            />
            {
                (isProfileOfTheCurrentUser || activeUserIsAdmin) && (
                    <Button
                        color='blue'
                        content="Изменить"
                        onClick={() => setEditableStatus(true)}
                        size='large'
                        type="button"
                    />
                )
            }
            {
                activeUserIsAdmin && (
                    <Button
                        color='red'
                        content={profileData?.banned ? "Разблокировать" : "Заблокировать"}
                        onClick={handleClickChangeUserBannedStatus}
                        size='large'
                        type="button"
                    />
                )
            }
        </React.Fragment>
    )
});
