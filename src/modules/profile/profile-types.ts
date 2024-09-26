
export const PROFILE_NAMESPACE = '@@PROFILE_NAMESPACE';

/**
 * Тип ролей пользователя
 */
export enum ERoles {
    ADMIN = 'ADMIN',
}

export type TProfile = {
    // id пользователя в бд
    _id: string;
    // номер дискорда
    discord: string;
    // почта пользователя, используется вместо логина
    email: string;
    // ник игрока
    nickname: string;
    // Соотношение имен турниров к их id
    mapTournamentNameToId: Record<string, string>;
    // Рейтинг игрока до
    original_rating: number;
    // Рейтинг игрока
    rating: number;
    // роли пользователя
    roles: ERoles[];
    // ИД турниров, в которых юзверь участвовал или участвует
    tournaments: string[];
}

/**
 * Аккаунт пользователя, привязанный через дискорд
 */
export type TAccount = {
    _id: string; // ИД в монго
    banned: boolean; // Забанен ли аккаунт
    discordId: string; // Ид дискорд аккаунта
    discriminator: string; // Дискорд тег пользователя
    merged_with_old_account: boolean; // Игрок произвел слияние со старым аккаунтом
    nickname?: string; // ник, устанавниваемый игроком
    original_rating?: number; // Рейтинг игрока, до создания АСХА
    rating: number; // Рейтинг игрока внутренний
    roles: ERoles[]; // Роли игрока
    tournaments: string[]; // ИД турниров, в которых юзверь участвовал или участвует
    username: string; // Никнейм пользователя из дискорд аккаунта
    visible: boolean; // Видимость аккаунта
}

export type TProfileState = {
    data: TAccount | null;
    errorMessage: string | null;
    isFetching: boolean;
}

export const SET_PROFILE = 'SET_PROFILE';

export type TSetProfileAction = {
    type: typeof SET_PROFILE;
    data: TAccount;
}

export const SET_ERROR_FETCH_PROFILE = 'SET_ERROR_FETCH_PROFILE';

export type TSetErrorFetchProfileAction = {
    type: typeof SET_ERROR_FETCH_PROFILE;
    data: string;
}

export const REMOVE_PROFILE_DATA = 'REMOVE_PROFILE_DATA';

export type TRemoveProfileDataAction = {
    type: typeof REMOVE_PROFILE_DATA;
}

export const SET_FETCHING_STATUS = 'SET_FETCHING_STATUS';

export type TSetFetchingStatusAction = {
    type: typeof SET_FETCHING_STATUS;
    data: boolean;
}

export type TProfileActions = TSetProfileAction
    | TSetErrorFetchProfileAction
    | TRemoveProfileDataAction
    | TSetFetchingStatusAction;