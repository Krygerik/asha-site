import {EFiltersName} from "./statistics-page-types";
import {EPlayerColor, EPlayerStartedBonus} from "../../common/constants";

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
    {
        name: EFiltersName.Hero,
        label: "Герой"
    },
    {
        name: EFiltersName.StartBonus,
        label: "Стартовый бонус"
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

/**
 * Список опций стартовых бонусов игрока
 */
export const PLAYER_STARTED_BONUS_OPTIONS = [
    {
        key: EPlayerStartedBonus.Artifact,
        text: "Артефакт",
        value: EPlayerStartedBonus.Artifact,
    },
    {
        key: EPlayerStartedBonus.Gold,
        text: "Золото",
        value: EPlayerStartedBonus.Gold,
    },
    {
        key: EPlayerStartedBonus.Spell,
        text: "Заклинание",
        value: EPlayerStartedBonus.Spell,
    },
];