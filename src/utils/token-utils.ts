
const TOKEN_KEY = 'token';

/**
 * Получение токена пользователя, если он был авторизован ранее
 */
export const getToken = () => localStorage.getItem(TOKEN_KEY);

/**
 * Установка нового значения для токена
 */
export const setToken = (value: string) => localStorage.setItem(TOKEN_KEY, value);

/**
 * Получение токена пользователя, если он был авторизован ранее
 */
export const removeToken = () => localStorage.removeItem(TOKEN_KEY);
