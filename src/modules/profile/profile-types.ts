
export const PROFILE_NAMESPACE = '@@PROFILE_NAMESPACE';

export type TProfile = {
    // номер дискорда
    discord: string;
    // почта пользователя, используется вместо логина
    email: string;
    // ник игрока
    nickname: string;
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