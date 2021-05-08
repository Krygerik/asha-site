import {createRequest} from "../../utils/create-request";
import {
    REMOVE_PROFILE_DATA,
    SET_ERROR_FETCH_PROFILE,
    SET_PROFILE,
    TProfile,
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
 * Удаление данных пользователя
 */
export const removeProfileData = () => (
    dispatch: any
) => dispatch(removeProfile);

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
        if (error.response.data.MESSAGE === 'Пользователь не авторизован') {
            return dispatch(setProfile(error.response.data.DATA));
        }

        dispatch(setErrorFetchProfile);
    }
}