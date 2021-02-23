export const GAMES_NAMESPACE = "@@GAMES";

type TConfigCell = {
    title: string;
    width: 1 | 2;
}

export const SHORT_GAME_INFO_TABLE_CONFIG: TConfigCell[] = [
    {
        title: "Дата",
        width: 1,
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
        width: 2,
    },
    {
        title: "Герой",
        width: 2,
    },
    {
        title: "Герой",
        width: 2,
    },
    {
        title: "Действия",
        width: 1,
    },
];
