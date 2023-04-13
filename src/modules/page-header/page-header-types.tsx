import {SemanticICONS} from "semantic-ui-react";

export const PAGE_HEADER_NAMESPACE = '@@PAGE_HEADER_NAMESPACE';

/**
 * Тип ячейки панели навигации
 */
export type THeaderNavItem = {
    active: boolean;
    icon?: SemanticICONS;
    link: string;
    title: string;
};

export const SET_MAP_TYPE_LIST = 'SET_MAP_TYPE_LIST';

export type TSetMapTypeListAction = {
    type: typeof SET_MAP_TYPE_LIST;
    data: string[];
};

export const SET_ERROR_FETCH = 'SET_ERROR_FETCH';

export type TSetErrorFetchAction = {
    type: typeof SET_ERROR_FETCH;
    data: string;
};

export const SET_SELECTED_MAP_TYPE = 'SET_SELECTED_MAP_TYPE';

export type TSetSelectedMapTypeAction = {
    type: typeof SET_SELECTED_MAP_TYPE;
    data: string;
};

export type TPageHeaderActions = TSetMapTypeListAction
    | TSetErrorFetchAction
    | TSetSelectedMapTypeAction;

export type TPageHeaderState = {
    data: string[] | null;
    isFetching: boolean;
    errorMessage: string | undefined;
    selectedMapType: string | undefined;
}
