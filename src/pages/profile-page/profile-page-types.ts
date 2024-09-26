import {TAccount, TProfile} from "../../modules/profile/profile-types";

export const PROFILE_PAGE_NAMESPACE = '@@PROFILE_PAGE_NAMESPACE';

export const SET_PLAYER_PROFILE_DATE = 'SET_PLAYER_PROFILE_DATE';

export type TSetPlayerProfileDataAction = {
    data: TProfile;
    type: typeof SET_PLAYER_PROFILE_DATE;
}

export const SET_ERROR_FETCH_PROFILE_PAGE = 'SET_ERROR_FETCH_PROFILE_PAGE';

export type TSetErrorFetchProfileAction = {
    data: string | undefined;
    type: typeof SET_ERROR_FETCH_PROFILE_PAGE;
}

export type TProfilePageActions = TSetPlayerProfileDataAction | TSetErrorFetchProfileAction;

export type TProfilePageData = {
    mapTournamentNameToId: Record<string, string>;
} & TAccount;

export type TProfilePageState = {
    data: TProfilePageData | null;
    error: boolean;
    errorMessage?: string;
    isFetching: boolean;
}

type TTableConfigRow = {
    emptyValue?: string;
    isList?: boolean;
    key: string;
    label: string;
}

/**
 * Конфиг таблицы информации для чтения
 */
export type TTableConfig = TTableConfigRow[];

/**
 * Начальные значения для формы изменения профиля
 */
export type TEditProfileInitialValues = {
    nickname?: string; // ник, устанавниваемый игроком
    original_rating?: number; // Рейтинг игрока, до создания АСХА
    visible?: boolean; // Видимость аккаунта
};
