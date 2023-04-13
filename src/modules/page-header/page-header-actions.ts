import {
    SET_ERROR_FETCH,
    SET_MAP_TYPE_LIST,
    SET_SELECTED_MAP_TYPE,
    TSetErrorFetchAction,
    TSetMapTypeListAction,
    TSetSelectedMapTypeAction
} from "./page-header-types";
import {createRequest} from "../../utils/create-request";
import {SyntheticEvent} from "react";
import {DropdownProps} from "semantic-ui-react";

const setMapTypeList = (data: string[]): TSetMapTypeListAction => ({
    data,
    type: SET_MAP_TYPE_LIST,
});

const setErrorFetch = (data: string): TSetErrorFetchAction => ({
    data,
    type: SET_ERROR_FETCH,
});

const setSelectedMapType = (data: string): TSetSelectedMapTypeAction => ({
    data,
    type: SET_SELECTED_MAP_TYPE,
});

export const fetchMapTypeList = () => async (dispatch: any) => {
    try {
        const response = await createRequest().get('/map-version/get-map-list');

        dispatch(setMapTypeList(response.data.DATA));
    } catch (error) {
        dispatch(setErrorFetch(error.response?.data?.MESSAGE))
    }
}

export const handleChangeSelectedMapType = (event: SyntheticEvent<HTMLElement>, { value }: DropdownProps) => (dispatch: any) => {
    dispatch(setSelectedMapType(value as string));
}
