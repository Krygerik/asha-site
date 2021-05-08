import {get} from "lodash/fp";
import {PROFILE_NAMESPACE, TProfile} from "./profile-types";
import {Selector} from "react-redux";
import {createSelector} from "reselect";

const getProfileState = get(PROFILE_NAMESPACE);

/**
 * Статус загрузки данных из сервера
 */
export const getIsErrorFetchingStatus: Selector<any, boolean> = createSelector(
    getProfileState,
    get('error')
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
export const getProfile: Selector<any, TProfile | null> = createSelector(
    getProfileState,
    get('data')
);
