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
 * Тип параметров урла для страницы подробной информации
 */
export type TTournamentParams = {
    id: string;
}
