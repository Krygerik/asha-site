import {ERoundFormat} from "../../../common/constants";

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