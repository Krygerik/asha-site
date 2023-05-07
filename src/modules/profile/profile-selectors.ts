import {get, includes} from "lodash/fp";
import {Selector} from "react-redux";
import {createSelector} from "reselect";
import {ERoles, PROFILE_NAMESPACE, TAccount} from "./profile-types";

const getProfileState = get(PROFILE_NAMESPACE);

/**
 * Текст ошибки при получении профиля
 */
export const getErrorMessage: Selector<any, string> = createSelector(
    getProfileState,
    get('errorMessage')
);

/**
 * Статус загрузки данных из сервера
 */
export const getIsFetchingProfileStatus: Selector<any, boolean> = createSelector(
    getProfileState,
    get('isFetching')
);

/**
 * Статус загрузки данных из сервера
 */
export const getProfile: Selector<any, TAccount | null> = createSelector(
    getProfileState,
    get('data')
);

/**
 * Ник зарегистрированного игрока
 */
export const getActiveUserNickname: Selector<any, string | null> = createSelector(
    getProfile,
    (profile: TAccount | null) => {
        if (!profile) {
            return null;
        }

        if (profile?.nickname) {
            return profile.nickname;
        }

        return profile.nickname || `${profile?.username}#${profile?.discriminator}`;
    }
);

/**
 * Получение id зарегистрированного игрока
 */
export const getActiveUserId: Selector<any, string | undefined> = createSelector(
    getProfile,
    get('_id'),
);

/**
 * Получение ролей зарегистрированного игрока
 */
export const getActiveUserRoles: Selector<any, ERoles[] | undefined> = createSelector(
    getProfile,
    get('roles'),
);

/**
 * Текущий зарегистрированный пользователь имеет роль админа
 */
export const getCurrentUserIsAdmin: Selector<any, boolean> = createSelector(
    getActiveUserRoles,
    includes('ADMIN'),
);
