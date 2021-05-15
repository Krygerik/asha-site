import { get } from "lodash/fp";
import { createSelector } from "reselect";
import {PROFILE_PAGE_NAMESPACE, TProfilePageState} from "./profile-page-types";
import {Selector} from "react-redux";
import {TProfile} from "../../modules/profile/profile-types";

/**
 * Стейт страницы
 */
const getProfilePageState = get(PROFILE_PAGE_NAMESPACE);

/**
 * Статус получения данных страницы
 */
export const getFetchingStatus: Selector<any, boolean> = createSelector(
    getProfilePageState,
    get('isFetching'),
);

/**
 * Статус ошибки получения данных страницы
 */
export const getError: Selector<any, boolean> = createSelector(
    getProfilePageState,
    get('error'),
);

/**
 * Статус ошибки получения данных страницы
 */
export const getErrorMessage: Selector<any, string | undefined> = createSelector(
    getProfilePageState,
    (pageState: TProfilePageState) => {
        const { errorMessage } = pageState;

        if (
            errorMessage === 'Пользователь не авторизован'
            || errorMessage === 'Действите токена истекло'
        ) {
            return 'Для просмотра страницы необходимо зарегистрироваться'
        }

        return errorMessage;
    },
);

/**
 * Данные профиля открытого пользователя
 */
export const getProfilePageData: Selector<any, TProfile | null> = createSelector(
    getProfilePageState,
    get('data'),
);
