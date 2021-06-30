
/**
 * Возможные форматы раундов
 */
export enum ERoundFormat {
    // До 2 побед
    Bo3 = 'Bo3',
    // До 3 побед
    Bo5 = 'Bo5',
}

/**
 * Тип данных формы "Создание турнира"
 */
export type TCreateTournamentModalFormValues = {
    // Название турнира
    name: string;
    // Дата начала турнира
    start_date: string;
    // Максимальное количество участников турнира
    maximum_player_count: number;
    // Формат прочих раундов
    rounds_format: ERoundFormat;
    // Формат суперфинала
    super_final_format: ERoundFormat;
};