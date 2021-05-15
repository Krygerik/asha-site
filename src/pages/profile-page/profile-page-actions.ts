import {createRequest} from "../../utils/create-request";
import {TProfile} from "../../modules/profile/profile-types";
import {
    SET_ERROR_FETCH_PROFILE_PAGE,
    SET_PLAYER_PROFILE_DATE,
    TSetErrorFetchProfileAction,
    TSetPlayerProfileDataAction
} from "./profile-page-types";

/**
 * Установка профиля запрошенного игрока в стор
 */
const setProfile = (data: TProfile): TSetPlayerProfileDataAction => ({
    type: SET_PLAYER_PROFILE_DATE,
    data,
});

/**
 * Установка сообщения ошибки в сторе
 */
const setErrorFetchProfile = (data?: string): TSetErrorFetchProfileAction => ({
    type: SET_ERROR_FETCH_PROFILE_PAGE,
    data,
});

/**
 * Запрос данных профиля выбранного игрока
 */
export const fetchPlayerProfile = (id: string) => async (
    dispatch: any
) => {
    try {
        const response = await createRequest().get(`/auth/get-profile/${id}`);

        dispatch(setProfile(response.data.DATA));
    } catch (error) {
        dispatch(setErrorFetchProfile(error.response?.data?.MESSAGE));
    }
};
