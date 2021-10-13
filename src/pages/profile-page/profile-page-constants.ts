
export const PERSONAL_TABLE_CONFIG = [
    {
        key: "email",
        label: "Почта",
    },
    {
        key: "discord",
        label: "Дискорд",
    },
];

export const GAME_INFO_TABLE_CONFIG = [
    {
        key: "nickname",
        label: "Никнейм",
    },
    {
        key: "rating",
        label: "Рейтинг (АСХА)",
    },
    {
        emptyValue: "Отсутствуют назначенные роли",
        isList: true,
        key: "roles",
        label: "Роли",
    },
    {
        emptyValue: "Игрок не участвовал ни в одном турнире",
        isList: true,
        key: "tournaments",
        label: "Турниры",
    },
];
