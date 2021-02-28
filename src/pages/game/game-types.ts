import {SET_GAME_INFO, SET_GAME_INFO_FETCH_FAILURE} from "./game-constants";

/**
 * Цвет игрока
 */
export enum EPlayerColor {
    RED = 1,
    BLUE = 2,
}

/**
 * Тип ячейки существ
 */
export type TCreatures = {
    // Количество
    count: number;
    // Название
    name: string;
};

/**
 * Тип всех данных игрока в игре
 */
export type TPlayer = {
    // id в mongodb
    _id: string;
    // Список войск героя
    army: TCreatures[];
    // Список оставшихся войск героя
    army_remainder: TCreatures[];
    // Артефакты героя
    arts: string[];
    // Нападение героя
    attack: number;
    // цвет игрока
    color: EPlayerColor;
    // Защита героя
    defence: number;
    // Название героя
    hero: string;
    // Знание героя
    knowledge: number;
    // Уровень героя
    level: number;
    // Удача героя
    luck: number;
    // Конечная мана героя
    mana_end: number;
    // Стартовая мана героя
    mana_start: number;
    // Количество использования ментора
    mentoring: number;
    // Мораль героя
    morale: number;
    // Никнейм игрока
    nickname: string;
    // Умения, способности
    perks: string[];
    // Раса
    race: string;
    // Школы героя
    skills: string[];
    // Колдовство героя
    spell_power: number;
    // Заклинания героя
    spells: string[];
    // Выбранный стартовый бонус
    start_bonus: string;
    // Ходов осталось
    turns_left: number;
};

/**
 * Тип полной информации об игре
 */
export type TGame = {
    // id в mongodb
    _id: string;
    // id сражения
    combat_id: number;
    // Дата окончания игры
    date: string;
    // Данные проигравшего игрока
    loosing_player: TPlayer;
    // Данные победившего игрока
    winning_player: TPlayer;
};

/**
 * Тип экшена для записи игры в стейт
 */
export type TSetGameAction = {
    type: typeof SET_GAME_INFO;
    data: TGame;
};

/**
 * Тип экшена при неудачном запросе данных с сервера
 */
export type TFetchGameErrorAction = {
    type: typeof SET_GAME_INFO_FETCH_FAILURE;
    data: undefined;
};

export type TGameActions = TSetGameAction | TFetchGameErrorAction;

/**
 * Тип данных в стейте
 */
export type TGameState = {
    error: boolean;
    game?: TGame;
    isFetched: boolean;
};
