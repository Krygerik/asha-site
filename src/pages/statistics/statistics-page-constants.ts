import {EFiltersName} from "./statistics-page-types";
import {EPlayerColor} from "../../common/constants";

/**
 * Список свойств всех фильтров
 */
export const FILTERS_LIST = [
    {
        name: EFiltersName.UserId,
        label: "Никнейм"
    },
    {
        name: EFiltersName.Color,
        label: "Цвет"
    },
    {
        name: EFiltersName.Race,
        label: "Раса"
    },
];

/**
 * Список опций цвета игрока
 */
export const PLAYER_COLOR_OPTIONS = [
    {
        key: EPlayerColor.BLUE,
        text: "Синий",
        value: EPlayerColor.BLUE,
    },
    {
        key: EPlayerColor.RED,
        text: "Красный",
        value: EPlayerColor.RED,
    },
];