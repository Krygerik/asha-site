import {createRequest} from "../../utils/create-request";
import {removeToken, setToken } from "../../utils/token-utils";
import {
    REMOVE_PROFILE_DATA,
    SET_ERROR_FETCH_PROFILE,
    SET_FETCHING_STATUS,
    SET_PROFILE,
    TLoginRequestData,
    TProfile,
    TRegistrationRequestData,
    TSetErrorFetchProfileAction,
    TSetFetchingStatusAction,
    TSetProfileAction,
} from "./profile-types";

const setFetchingStatus = (data: boolean): TSetFetchingStatusAction => ({
    type: SET_FETCHING_STATUS,
    data,
});

const setProfile = (data: TProfile): TSetProfileAction => ({
    type: SET_PROFILE,
    data,
});

const setErrorFetchProfile = (data: string): TSetErrorFetchProfileAction => ({
    type: SET_ERROR_FETCH_PROFILE,
    data,
});

const removeProfile = ({
    type: REMOVE_PROFILE_DATA,
})

/**
 * Запрос токена авторизации
 */
export const login = async (values: TLoginRequestData) => {
    try {
        const authResponse = await createRequest().post('/auth/login', values);

        setToken(authResponse.data.DATA.token);
    } catch (e) {
        throw new Error(e.response?.data?.MESSAGE || e);
    }
}

/**
 * Регистрация пользователя в бд
 */
export const registration = async (values: TRegistrationRequestData) => {
    try {
        await createRequest().post('/auth/registration', values);
    } catch (e) {
        throw new Error(e.response?.data?.MESSAGE || e);
    }
}

/**
 * Удаление данных пользователя
 */
export const removeProfileData = () => (
    dispatch: any
) => {
    removeToken();
    dispatch(removeProfile);
}

const TOKEN_EXPIRED_ERROR = 'TokenExpiredError';

/**
 * Запрос профиля для авторизованного пользователя
 */
export const fetchProfile = () => async (
    dispatch: any
) => {
    try {
        dispatch(setFetchingStatus(true));
        const response = await createRequest().get('/auth/get-profile');

        dispatch(setProfile(response.data.DATA));
    } catch (error) {
        /**
         * Если токен истек
         */
        if (error.response?.data?.DATA?.error?.name === TOKEN_EXPIRED_ERROR) {
            return removeToken();
        }

        dispatch(setErrorFetchProfile((error.response?.data?.MESSAGE)));
    } finally {
        dispatch(setFetchingStatus(false));
    }
}