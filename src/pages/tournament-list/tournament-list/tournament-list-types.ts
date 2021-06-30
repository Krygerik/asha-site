/**
 * Тип турнира
 */
export type TTournament = {
    // id турнира в бд
    _id: string;
    // Дата начала турнира
    start_date: string;
    // Максимальное количество участников турнира
    maximum_player_count: number;
    // Список пользователей, зарегистрированных в турнире
    users: string[];
    // Название турнира
    name: string;
    // Турнир стартовал
    started: boolean;
    // Победитель турнира
    winner_id?: string;
};