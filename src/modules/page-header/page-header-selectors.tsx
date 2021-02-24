import {createSelector, ParametricSelector} from "reselect";
import {THeaderNavItem} from "./page-header-types";

/**
 * Получение данных для панели навигации
 */
export const getHeaderMenuNavigation: ParametricSelector<any, any, THeaderNavItem[]> = createSelector(
    (state: any, props: { match: any }) => props.match,
    (match: { path: string; }) => ([
        {
            title: "Главная",
            link: "/",
            active: match.path === "/",
        },
        {
            title: "История игр",
            link: "/games",
            active: match.path === "/games",
        },
    ]),
);