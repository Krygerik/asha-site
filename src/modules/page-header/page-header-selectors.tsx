import {createSelector, ParametricSelector} from "reselect";
import {THeaderNavItem} from "./page-header-types";

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
            title: "Half Random Tactical Arena",
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