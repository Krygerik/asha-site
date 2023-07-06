export const SHORT_GAME_INFO_TABLE_NAMESPACE = "@@SHORT_GAME_INFO_LIST";

export const DEFAULT_PAGE_SIZE = 10;

export type TConfigCell = {
    title: string;
    width: 1 | 2;
}

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
    },
    {
        title: "Карта",
        width: 2,
    },
    {
        title: "Действия",
        width: 1,
    },
];
