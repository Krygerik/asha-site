import {EComparisonNames, EPlayerColor, EPlayerStartedBonus} from "../../common/constants";
import {ERacesIds} from "../../modules/dictionary/dictionary-types";

/**
 * Тип количества побед/поражений в одном МА
 */
export type TWinRateRecord = {
    // Количество проигранных игр
    loses: number;
    // Количество выигранных игр
    wins: number;
}

/**
 * Тип винрейта одной расы со всеми остальными
 */
export type TRaceWinRate = Record<ERacesIds, TWinRateRecord>;

/**
 * Тип винрейта всех рас со всеми
 */
export type TAllWinRateRecord = Record<ERacesIds, TRaceWinRate>;

export const SET_LOADING_STATISTICS_STATUS = 'SET_LOADING_STATISTICS_STATUS';
export const SET_ALL_RACES_WIN_RATE = 'SET_ALL_RACES_WIN_RATE';
export const SET_ERROR_FETCH_ALL_RACE_WIN_RATE = 'SET_ERROR_FETCH_ALL_RACE_WIN_RATE';

export type TSetLoadingStatisticsStatusAction = {
    data: undefined;
    type: typeof SET_LOADING_STATISTICS_STATUS;
}

export type TSetAllRacesWinRateAction = {
    data: TAllWinRateRecord;
    type: typeof SET_ALL_RACES_WIN_RATE;
}

export type TSetErrorFetchAllRaceWinRaceAction = {
    data: undefined;
    type: typeof SET_ERROR_FETCH_ALL_RACE_WIN_RATE;
}

export type TStatisticsPageState = {
    allRacesWinRate?: TAllWinRateRecord;
    errorFetch: boolean;
    isFetchingRacesWinRate: boolean;
}

export type TStatisticsPageActions = TSetAllRacesWinRateAction
    | TSetErrorFetchAllRaceWinRaceAction
    | TSetLoadingStatisticsStatusAction;

export const STATISTICS_PAGE_NAMESPACE = '@@STATISTICS_PAGE_NAMESPACE';


/**
 * Перечисление полей фильтров
 */
export enum EFiltersName {
    // PercentageOfArmyLeft = 'percentage_of_army_left',
    // Race = 'race',
    Art = 'arts',
    Attack = 'attack',
    Color = 'color',
    Creature = 'army.name',
    Defence = 'defence',
    Hero = 'hero',
    Knowledge = 'knowledge',
    Level = 'level',
    Luck = 'luck',
    ManaStart = 'mana_start',
    MapVersion = 'map_version',
    Mentoring = 'mentoring',
    Morale = 'morale',
    Perks = 'perks',
    Spell = 'spells',
    SpellPower = 'spell_power',
    StartBonus = 'start_bonus',
    UserId = 'user_id',
    WarMachine = 'war_machines',
}

/**
 * Тип одного фильтра формы
 */
export type TSingleStatisticsFilter = {
    name: EFiltersName;
    operator?: EComparisonNames;
    value?: EPlayerColor | ERacesIds | string | number;
};

/**
 * Перечисление названий секций
 */
export enum EFilterSectionsName {
    Game = 'game',
    MainPlayer = 'main_player',
    OtherPlayer = 'other_player',
}

/**
 * Тип формы фильтров статистики
 */
export type TFilterStatisticsFormValues = {
    [EFilterSectionsName.Game]: TSingleStatisticsFilter[];
    [EFilterSectionsName.MainPlayer]: TSingleStatisticsFilter[];
    [EFilterSectionsName.OtherPlayer]: TSingleStatisticsFilter[];
};

/**
 * Значение фильтра со сравнением
 */
type TComparisonField = Record<EComparisonNames, number>;

/**
 * Тип полей фильтра игрока
 */
export type TPlayerFilterFields = {
    // Нападение героя
    attack?: TComparisonField;
    // Защита героя
    defence?: TComparisonField;
    // Колдовство героя
    spell_power?: TComparisonField;
    // Знание героя
    knowledge?: TComparisonField;
    // Удача героя
    luck?: TComparisonField;
    // Мораль героя
    morale?: TComparisonField;
    // ID цвета игрока
    color?: EPlayerColor;
    // ID героя
    hero?: string;
    // ID фракции
    race?: ERacesIds;
    // Уровень героя
    level?: TComparisonField;
    // ID игрока
    user_id?: string;
    // Стартовый бонус игрока
    start_bonus?: EPlayerStartedBonus;
    // Количество ментора
    mentoring?: TComparisonField;
    // Стартовая мана героя
    mana_start?: TComparisonField;
    // Один артефакт героя
    arts?: string;
    // Одно из заклинаний героя
    spells?: string;
    // Существо из армии героя
    "army.name"?: string;
    // Боевая машина игрока
    war_machines?: string;
    // Является ли текущий фильтр по главному игроку
    main?: boolean;
}

/**
 * Перечисление всех возможных значений версий карты
 */
export type TMapVersionValue = string;

/**
 * Тип фильтра в запросе статистик по расам
 */
export type TFetchStatisticsRequestFilter = {
    // Фильтры по игрокам
    players: TPlayerFilterFields[];
    // Процент оставшейся силы армии
    percentage_of_army_left?: TComparisonField;
    // Версия карты
    map_version?: TMapVersionValue;
}
