
/**
 * Поля ид с ником пользователя
 */
export type TUserIdWithNickname = {
    // Дискорд ник
    username: string;
    // user_id
    _id: string;
    // Видимость
    visible: boolean;
}