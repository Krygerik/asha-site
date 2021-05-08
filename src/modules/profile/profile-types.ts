
export const PROFILE_NAMESPACE = '@@PROFILE_NAMESPACE';

export type TProfile = {
    email: string;
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

export type TProfileActions = TSetProfileAction | TSetErrorFetchProfileAction;