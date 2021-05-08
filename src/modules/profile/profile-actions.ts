import {createRequest} from "../../utils/create-request";
import {
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

/**
 * Запрос профиля для авторизованного пользователя
 */
export const fetchProfile = () => async (
    dispatch: any
) => {
    try {
        const response = await createRequest().get('/auth/get-profile');

        dispatch(setProfile(response.data.DATA));
    } catch {
        dispatch(setErrorFetchProfile);
    }
}