
export const PRIVATE_TABLE_CONFIG = [
    {
        key: "email",
        label: "Почта",
    },
];

export const PERSONAL_TABLE_CONFIG = [
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
        key: "original_rating",
        label: "Рейтинг на half-rta.com",
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
