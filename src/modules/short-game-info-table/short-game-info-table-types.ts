/**
 * Цвет игрока
 */
export enum EPlayerColor {
    RED = 1,
    BLUE = 2,
}

/**
 * Краткая информация об игроке
 */
export type IShortPlayer = {
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
 * Краткая информация по игре
 */
export type IShortGame = {
    // id в mongodb
    _id: string;
    // id сражения
    combat_id: number;
    // Дата окончания игры
    date: string;
    // Данные проигравшего игрока
    loosing_player: IShortPlayer;
    // Данные победившего игрока
    winning_player: IShortPlayer;
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