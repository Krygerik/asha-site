import {EComparisonNames, EPlayerColor, EPlayerStartedBonus} from "../../common/constants";
import {EFiltersName} from "./statistics-page-types";

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
    {
        name: EFiltersName.Mentoring,
        label: "Количество ментора"
    },
];

/**
 * Список названий полей, в которых используется оператор сравнения
 */
export const FILTERS_WITH_COMPARISON_OPERATORS = [
    EFiltersName.Mentoring,
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

/**
 * Список опций операторов сравнения
 */
export const COMPARISON_OPERATORS_OPTIONS = [
    {
        key: EComparisonNames.Equal,
        text: "Равно",
        value: EComparisonNames.Equal,
    },
    {
        key: EComparisonNames.GreatThen,
        text: "Больше чем",
        value: EComparisonNames.GreatThen,
    },

    {
        key: EComparisonNames.LessThen,
        text: "Меньше чем",
        value: EComparisonNames.LessThen,
    },
];