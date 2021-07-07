import {TConfigCell} from "../../modules/short-game-info-table/short-game-info-table-constants";

export const AUTO_WIN = {
    TITLE: 'Тех. победа',
    VALUE: 'AUTO_WIN'
}

/**
 * Конфиг таблицы краткой информации по играм для попапа раунда
 */
export const SHORT_GAME_INFO_TABLE_CONFIG: TConfigCell[] = [
    {
        title: "Дата",
        width: 2,
    },
    {
        title: "Игрок",
        width: 2,
    },
    {
        title: "Герой",
        width: 2,
    },
    {
        title: "",
        width: 1,
    },
    {
        title: "Герой",
        width: 2,
    },
    {
        title: "Игрок",
        width: 2,
    }
];