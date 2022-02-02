import {createRequest} from "../../utils/create-request";
import {
    REMOVE_PROFILE_DATA,
    SET_ERROR_FETCH_PROFILE,
    SET_FETCHING_STATUS,
    SET_PROFILE,
    TAccount,
    TSetErrorFetchProfileAction,
    TSetFetchingStatusAction,
    TSetProfileAction,
} from "./profile-types";

const setFetchingStatus = (data: boolean): TSetFetchingStatusAction => ({
    type: SET_FETCHING_STATUS,
    data,
});

const setProfile = (data: TAccount): TSetProfileAction => ({
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
 * Удаление данных пользователя
 */
export const removeProfileData = () => (
    dispatch: any
) => {
    dispatch(removeProfile);
}

/**
 * Запрос профиля для авторизованного пользователя
 */
export const fetchProfile = () => async (
    dispatch: any
) => {
    try {
        await setFetchingStatus(true);

        const response = await createRequest().get('/account/get-profile');

        dispatch(setProfile(response.data.DATA));
    } catch (error) {
        dispatch(setErrorFetchProfile((error.response?.data?.MESSAGE)));
    } finally {
        await setFetchingStatus(false);
    }
}