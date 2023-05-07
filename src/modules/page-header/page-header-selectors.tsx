import {createSelector, ParametricSelector} from "reselect";
import {PAGE_HEADER_NAMESPACE, THeaderNavItem} from "./page-header-types";
import {get, map} from "lodash/fp";
import {Selector} from "react-redux";
import {DropdownItemProps} from "semantic-ui-react";

const getPageHeaderState = get(PAGE_HEADER_NAMESPACE);

/**
 * Типы поддерживаемых карт
 */
const getMapTypeList: Selector<any, string[]> = createSelector(
    getPageHeaderState,
    get('data'),
);

/**
 * Опции типов поддерживаемых карт
 */
export const getMapTypeOptionList: Selector<any, DropdownItemProps[]> = createSelector(
    getMapTypeList,
    map(x => ({ value: x, text: x })),
);

/**
 * Статус загрузки поддерживаемых карт
 */
export const getIsFetching: Selector<any, boolean> = createSelector(
    getPageHeaderState,
    get('isFetching'),
);

/**
 * Ошибка загрузки типов карт
 */
export const getErrorFetchMessage: Selector<any, string> = createSelector(
    getPageHeaderState,
    get('errorMessage'),
);

/**
 * Текущий выбранный тип карты
 */
export const getSelectedMapType: Selector<any, string> = createSelector(
    getPageHeaderState,
    get('selectedMapType'),
);

/**
 * Получение данных для панели навигации
 */
export const getHeaderMenuNavigation: ParametricSelector<any, any, THeaderNavItem[]> = createSelector(
    (state: any, props: { match: any }) => props.match,
    (match: { path: string; }) => ([
        {
            active: match.path === "/",
            icon: "chess",
            link: "/",
            title: "Главная",
        },
        {
            active: match.path === "/tournaments",
            link: "/tournaments",
            title: "Турниры",
        },
        {
            active: match.path === "/games-history",
            link: "/games-history",
            title: "История игр",
        },
        {
            active: match.path === "/statistics",
            link: "/statistics",
            title: "Статистика",
        },
        {
            active: match.path === "/about-asha",
            link: "/about-asha",
            title: "Об АСХА",
        }
    ]),
);