import {createRequest} from "../../utils/create-request";
import {
    REMOVE_PROFILE_DATA,
    SET_ERROR_FETCH_PROFILE,
    SET_PROFILE,
    TLoginRequestData,
    TProfile,
    TRegistrationRequestData,
    TSetProfileAction,
} from "./profile-types";

const setProfile = (data: TProfile): TSetProfileAction => ({
    type: SET_PROFILE,
    data,
});

const setErrorFetchProfile = ({
    type: SET_ERROR_FETCH_PROFILE,
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

        localStorage.setItem('token', authResponse.data.DATA.token);
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
    localStorage.removeItem('token');
    dispatch(removeProfile);
}

const ERROR_MESSAGES = [
    'Пользователь не авторизован',
    'Действите токена истекло',
    'Пользователь не найден'
]

/**
 * Запрос профиля для авторизованного пользователя
 */
export const fetchProfile = () => async (
    dispatch: any
) => {
    try {
        const response = await createRequest().get('/auth/get-profile');

        dispatch(setProfile(response.data.DATA));
    } catch (error) {
        if (ERROR_MESSAGES.includes(error.response?.data?.MESSAGE)) {
            return dispatch(setProfile(error.response?.data?.DATA));
        }

        dispatch(setErrorFetchProfile);
    }
}