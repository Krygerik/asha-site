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
    // Произошел ли разрыв соединения
    disconnect: boolean;
    // Список данных обоих игроков
    players: IShortPlayer[];
    // Цвет победителя
    winner: EPlayerColor;
}

/**
 * Тип данных пагинации компонента
 */
export type TPagination = {
    // Количество страниц в бд по текущему поиску
    totalPages: number;
    // Номер текущей страницы в бд по текущему поиску
    activePage: number;
};

/**
 * Значения успешного ответа
 */
export type TResponseData = {
    // Данные пагинации
    pagination: TPagination;
    // Список игр
    shortGameInfoList: IShortGame[];
};

/**
 * Тип ответа сервера
 */
export type TResponse = {
    DATA: TResponseData;
    MESSAGE: string;
    STATUS: "SUCCESS",
}

/**
 * Тип параметров запроса списка краткой информации по играм
 */
export type TGetShortGameInfoParams = {
    // undefined - запрос всех записей
    items: number;
    // запрашиваемая страница
    requestPage: number;
};

/**
 * Тип состояния таблицы
 */
export type TShortGameInfoTableState = {
    // Ошибка при загрузке данных
    error: boolean;
    // Статус загрузки данных
    isFetching: boolean;
    // Запрошенные данные
    shortGameInfoList: IShortGame[];
    // Данные пагинации
    pagination: TPagination;
};

export const SET_SHORT_GAME_INFO_LIST = "SET_SHORT_GAME_INFO_LIST";
export const SET_ERROR_FETCH = 'SET_ERROR_FETCH';
export const SET_LOADING_GAME_STATUS = 'SET_LOADING_GAME_STATUS';

/**
 * Тип экшена установки списка игр в стор
 */
export type TSetShortGamesInfoListAction = {
    data: TResponseData;
    type: typeof SET_SHORT_GAME_INFO_LIST;
};

/**
 * Тип экшена при ошибке запроса
 */
export type TSetErrorFetchAction = {
    data: undefined;
    type: typeof SET_ERROR_FETCH;
};

/**
 * Тип экшена при установки статуса загрузки
 */
export type TSetLoadingGameStatusAction = {
    data: boolean;
    type: typeof SET_LOADING_GAME_STATUS;
};

export type TShortGameInfoTableAction = TSetShortGamesInfoListAction
    | TSetErrorFetchAction
    | TSetLoadingGameStatusAction;

/**
 * Тип значений формы поиска игр
 */
export type TSearchGamesFormValues = {
    // ID героя
    hero?: string;
    // ID фракции
    race?: string;
    // ID пользователя
    user_id?: string;
};
