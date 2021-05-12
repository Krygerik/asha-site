import {TProfile} from "../../modules/profile/profile-types";

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

export type TProfilePageState = {
    data: TProfile | null;
    error: boolean;
    errorMessage?: string;
    isFetching: boolean;
}
