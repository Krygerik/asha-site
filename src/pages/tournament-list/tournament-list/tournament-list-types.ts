
export const TOURNAMENT_LIST_NAMESPACE = '@@TOURNAMENT_LIST_NAMESPACE';

/**
 * Тип турнира
 */
export type TTournament = {
    // id турнира в бд
    _id: string;
    // Дата начала турнира
    start_date: string;
    // Список пользователей, зарегистрированных в турнире
    users: string[];
    // Название турнира
    name: string;
};

/**
 * Состояние страницы с турнирами
 */
export type TTournamentListState = {
    // Статус ошибки запроса
    errorFetch: boolean;
    // Состояние запроса
    isFetching: boolean;
    // Список турниров
    tournaments: TTournament[];
};

export const SET_TOURNAMENTS = 'SET_TOURNAMENTS';
export const SET_TOURNAMENTS_FETCHING_STATUS = 'SET_TOURNAMENTS_FETCHING_STATUS';
export const SET_TOURNAMENTS_ERROR_FETCH = 'SET_TOURNAMENTS_ERROR_FETCH';

export type TSetTournamentsAction = {
    data: TTournament[];
    type: typeof SET_TOURNAMENTS;
}
export type TSetTournamentsFetchingStatusAction = {
    data: boolean;
    type: typeof SET_TOURNAMENTS_FETCHING_STATUS;
}
export type TSetTournamentsErrorFetchAction = {
    data: undefined;
    type: typeof SET_TOURNAMENTS_ERROR_FETCH;
}

export type TTournamentListAction = TSetTournamentsAction
    | TSetTournamentsFetchingStatusAction
    | TSetTournamentsErrorFetchAction;