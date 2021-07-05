import {EPlayerColor, ERoundFormat} from "../../common/constants";

/**
 * Данные по участнику раунда
 */
type TTournamentPlayer = {
    // ИД игрока
    user_id?: string;
    // Цвет игрока
    color?: EPlayerColor;
    // Количество побед
    win_count: number;
}

/**
 * Турнирная встреча
 */
export type TTournamentRound = {
    // Список ИД игр, учтенных в раунде
    games: string[];
    // Номера дочерних раундов
    children_rounds: number[];
    // Формат раунда
    round_format: ERoundFormat;
    // Номер родительского раунда
    parent_round?: number;
    // Номер этого раунда
    number_of_round: number;
    // Данные игроков текущего раунда
    players: TTournamentPlayer[];
    // Ид игрока победителя в текущем раунде
    winner_id?: string;
}

/**
 * Тип публичных данных о учаснике матча
 */
export type TTournamentParticipant = {
    // id пользователя в бд
    _id: string;
    // номер дискорда
    discord: string;
    // ник игрока
    nickname: string;
};

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
    // маппинг ид игроков на их краткую информацию
    mapUsersIdToUserInfo: Record<string, TTournamentParticipant>;
    // Формат прочих раундов
    rounds_format: ERoundFormat;
    // Формат суперфинала
    super_final_format: ERoundFormat;
    // Список пользователей, зарегистрированных в турнире
    users: string[];
    // Название турнира
    name: string;
    // Турнир стартовал
    started: boolean;
    // Список всех раундов турнира (Сетка)
    grid: TTournamentRound[];
    // Победитель турнира
    winner_id?: string;
};

/**
 * Тип параметров урла для страницы подробной информации
 */
export type TTournamentParams = {
    id: string;
}
