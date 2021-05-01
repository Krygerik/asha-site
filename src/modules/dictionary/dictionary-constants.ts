/**
 * Список всех словарей
 */
export enum EDictionaryName {
    Artifacts = 'artifacts',
    Creatures = 'creatures',
    Heroes = 'heroes',
    Perks = 'perks',
    Races = 'races',
    Skills = 'skills',
    Spells = 'spells',
}

export const ERROR_FETCH_DICTIONARY = 'Ошибка при загрузке справочника';

/**
 * Утилита получения сообщения, что запись не найдена
 */
export const recordNotFound = (value: string) => `Запись не найдена в справочнике: ${value}`;
