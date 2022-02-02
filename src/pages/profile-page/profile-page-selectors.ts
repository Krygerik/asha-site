import { get, pick } from "lodash/fp";
import { createSelector } from "reselect";
import {
    PROFILE_PAGE_NAMESPACE,
    TEditProfileInitialValues,
    TProfilePageData,
    TProfilePageState,
} from "./profile-page-types";
import {Selector} from "react-redux";
import {getActiveUserId} from "../../modules/profile";

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
 * Запрошенные данные открытого профиля
 */
const getFetchedData: Selector<any, TProfilePageData | null> = createSelector(
    getProfilePageState,
    get('data'),
);

/**
 * Ник просматриваемого игрока
 */
export const getProfilePageNickname: Selector<any, string | null> = createSelector(
    getFetchedData,
    (profile: TProfilePageData | null) => {
        if (!profile) return null;

        return profile.nickname || `${profile?.username}#${profile?.discriminator}`;
    },
);

/**
 * Данные профиля открытого пользователя
 */
export const getProfilePageData: Selector<any, TProfilePageData | null> = createSelector(
    getFetchedData,
    (fetchedData: TProfilePageData | null) => {
        if (!fetchedData) return null;

        return ({
            ...fetchedData,
            tournaments: fetchedData.tournaments.map(
                (tourId: string) => fetchedData?.mapTournamentNameToId[tourId] || "Неизвестный турнир"
            )
        })
    },
);

/**
 * Открытый профиль - профиль текущего пользователя
 */
export const getIsProfileOfTheCurrentUser: Selector<any, boolean> = createSelector(
    getFetchedData,
    getActiveUserId,
    (
        fetchedData: TProfilePageData | null,
        activeUserId: string | undefined
    ) => fetchedData?._id === activeUserId
);

/**
 * Начальные значения для редактирования профиля
 */
export const getEditProfileInitialValues: Selector<any, TEditProfileInitialValues> = createSelector(
    getFetchedData,
    pick([
        'nickname',
        'original_rating',
    ]),
);