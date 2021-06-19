
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
    // роли пользователя
    roles: ERoles[];
}

/**
 * Тип данных запроса на авторизацию
 */
export type TLoginRequestData = {
    email: string;
    hash_password: string;
}

/**
 * Тип данных формы регистрации
 */
export type TRegistrationFormValues = {
    discord: string;
    email: string;
    nickname: string;
    password: string;
    second_password: string;
}

/**
 * Тип данных запроса на регистрацию
 */
export type TRegistrationRequestData = {
    discord: string;
    email: string;
    nickname: string;
    hash_password: string;
}

export type TProfileState = {
    data: TProfile | null;
    error: boolean;
    isFetching: boolean;
}

export const SET_PROFILE = 'SET_PROFILE';

export type TSetProfileAction = {
    type: typeof SET_PROFILE;
    data: TProfile;
}

export const SET_ERROR_FETCH_PROFILE = 'SET_ERROR_FETCH_PROFILE';

export type TSetErrorFetchProfileAction = {
    type: typeof SET_ERROR_FETCH_PROFILE;
}

export const REMOVE_PROFILE_DATA = 'REMOVE_PROFILE_DATA';

export type TRemoveProfileDataAction = {
    type: typeof REMOVE_PROFILE_DATA;
}

export type TProfileActions = TSetProfileAction | TSetErrorFetchProfileAction | TRemoveProfileDataAction;