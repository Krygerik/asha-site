
export const PRIVATE_TABLE_CONFIG = [
    {
        key: "email",
        label: "Почта",
    },
];

export const PERSONAL_TABLE_CONFIG = [
    {
        key: "username",
        label: "Ник в дискорде",
    },
    {
        key: "discriminator",
        label: "Тег в дискорде",
    },
];

export const GAME_INFO_TABLE_CONFIG = [
    {
        key: "nickname",
        label: "Никнейм",
    },
    {
        key: "visible",
        label: "Видимость аккаунта",
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

export const MERGING_ACCOUNT_MESSAGE_TEXT = 'Если у вас был аккаунт до изменения системы'
    + ' авторизации в системе "АСХА", то вы можете произвести слияние старого аккаунта с текущим.'
    + ' Это позволит не потерять текущий прогресс в личной статистике пользователя.';

export const ACCOUNT_BANNED_WARNING = 'Пользователь заблокирован и не может участвовать в активностях проекта';
