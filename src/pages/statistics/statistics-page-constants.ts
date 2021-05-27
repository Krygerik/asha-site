import {EComparisonNames, EPlayerColor, EPlayerStartedBonus} from "../../common/constants";
import {FinalFormDictionarySelectField} from "../../components/final-form-dictionary-select-field";
import {FinalFormInputTextField} from "../../components/final-form-input-text-field";
import {FinalFormSelectField} from "../../components/final-form-select-field";
import {FinalFormUsersSelectField} from "../../components/final-form-users-select-field";
import {EDictionaryName} from "../../modules/dictionary";
import {EFiltersName} from "./statistics-page-types";

/**
 * Мапа фильтров на их лейблы
 */
export const MAP_FILTERS_NAME_TO_LABEL = {
    [EFiltersName.Art]: "Артефакт",
    [EFiltersName.Attack]: "Нападение",
    [EFiltersName.Color]: "Цвет",
    [EFiltersName.Creature]: "Существо",
    [EFiltersName.Defence]: "Защита",
    [EFiltersName.Hero]: "Герой",
    [EFiltersName.Knowledge]: "Знание",
    [EFiltersName.Level]: "Уровень",
    [EFiltersName.Luck]: "Удача",
    [EFiltersName.ManaStart]: "Стартовая мана",
    [EFiltersName.Mentoring]: "Количество ментора",
    [EFiltersName.Morale]: "Боевой дух",
    [EFiltersName.PercentageOfArmyLeft]: "Зрелищность",
    [EFiltersName.Race]: "Раса",
    [EFiltersName.SpellPower]: "Колдовство",
    [EFiltersName.Spell]: "Заклинание",
    [EFiltersName.StartBonus]: "Стартовый бонус",
    [EFiltersName.UserId]: "Никнейм",
    [EFiltersName.WarMachine]: "Боевая машина",
};

/**
 * Список названий полей, в которых используется оператор сравнения
 */
export const FILTERS_WITH_COMPARISON_OPERATORS = [
    EFiltersName.Attack,
    EFiltersName.Defence,
    EFiltersName.Knowledge,
    EFiltersName.Level,
    EFiltersName.Luck,
    EFiltersName.ManaStart,
    EFiltersName.Mentoring,
    EFiltersName.Morale,
    EFiltersName.PercentageOfArmyLeft,
    EFiltersName.SpellPower,
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

/**
 * Данные полей фильтра по его названию
 */
export const MAP_FILTER_NAMES_TO_FIELD_DATA = {
    [EFiltersName.Race]: {
        Component: FinalFormDictionarySelectField,
        staticProps: {
            dictionary: EDictionaryName.Races,
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.Race],
        }
    },
    [EFiltersName.Art]: {
        Component: FinalFormDictionarySelectField,
        staticProps: {
            dictionary: EDictionaryName.Artifacts,
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.Art],
        }
    },
    [EFiltersName.Creature]: {
        Component: FinalFormDictionarySelectField,
        staticProps: {
            dictionary: EDictionaryName.Creatures,
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.Creature],
        }
    },
    [EFiltersName.Spell]: {
        Component: FinalFormDictionarySelectField,
        staticProps: {
            dictionary: EDictionaryName.Spells,
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.Spell],
        }
    },
    [EFiltersName.WarMachine]: {
        Component: FinalFormDictionarySelectField,
        staticProps: {
            dictionary: EDictionaryName.WarMachines,
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.WarMachine],
        }
    },
    [EFiltersName.Mentoring]: {
        Component: FinalFormInputTextField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.Mentoring],
            type: 'number',
        }
    },
    [EFiltersName.PercentageOfArmyLeft]: {
        Component: FinalFormInputTextField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.PercentageOfArmyLeft],
            type: 'number',
        }
    },
    [EFiltersName.Level]: {
        Component: FinalFormInputTextField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.Level],
            type: 'number',
        }
    },
    [EFiltersName.Attack]: {
        Component: FinalFormInputTextField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.Attack],
            type: 'number',
        }
    },
    [EFiltersName.Defence]: {
        Component: FinalFormInputTextField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.Defence],
            type: 'number',
        }
    },
    [EFiltersName.SpellPower]: {
        Component: FinalFormInputTextField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.SpellPower],
            type: 'number',
        }
    },
    [EFiltersName.Knowledge]: {
        Component: FinalFormInputTextField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.Knowledge],
            type: 'number',
        }
    },
    [EFiltersName.Luck]: {
        Component: FinalFormInputTextField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.Luck],
            type: 'number',
        }
    },
    [EFiltersName.Morale]: {
        Component: FinalFormInputTextField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.Morale],
            type: 'number',
        }
    },
    [EFiltersName.ManaStart]: {
        Component: FinalFormInputTextField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.ManaStart],
            type: 'number',
        }
    },
    [EFiltersName.StartBonus]: {
        Component: FinalFormSelectField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.StartBonus],
            options: PLAYER_STARTED_BONUS_OPTIONS
        }
    },
    [EFiltersName.Hero]: {
        Component: FinalFormDictionarySelectField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.Hero],
            dictionary: EDictionaryName.Heroes,
        }
    },
    [EFiltersName.Color]: {
        Component: FinalFormSelectField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.Color],
            options: PLAYER_COLOR_OPTIONS
        }
    },
    [EFiltersName.UserId]: {
        Component: FinalFormUsersSelectField,
        staticProps: {
            label: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.UserId],
        }
    },
}
