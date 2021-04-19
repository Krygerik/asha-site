/**
 * Цвет игрока
 */
export enum EPlayerColor {
    RED = 1,
    BLUE = 2,
}

/**
 * Тип краткой информации по игроку
 */
export interface IShortPlayer {
    // Цвет игрока
    color: EPlayerColor;
    // Название героя
    hero: string;
    // Никнейм игрока
    nickname: string;
    // Раса
    race: string;
}

/**
 * Тип краткой информации по игре
 */
export interface IShortGame {
    // id в mongodb
    _id: string;
    // id сражения
    combat_id: number;
    // Дата окончания игры
    date?: string;
    // Список данных обоих игроков
    players: IShortPlayer[];
    // Цвет победителя
    winner: EPlayerColor;
}

/**
 * Тип ответа сервера
 */
export type TResponse = {
    DATA: IShortGame[];
    MESSAGE: string;
    STATUS: "SUCCESS",
}

/**
 * Тип параметров запроса списка краткой информации по играм
 */
export type TGetShortGameInfoParams = {
    // undefined - запрос всех записей
    items?: number;
};