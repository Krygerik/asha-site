/**
 * Список всех словарей
 */
export enum EDictionaryName {
    Artifacts = 'artifacts',
    Creatures = 'creatures',
    Heroes = 'heroes',
    MapVersions = 'mapVersions',
    Perks = 'perks',
    Races = 'races',
    Skills = 'skills',
    Spells = 'spells',
    WarMachines = 'war-machines',
}

/**
 * Список внутренних словарей асхи
 */
export const ASHA_DICTIONARIES = [
    EDictionaryName.MapVersions
];

export const ERROR_FETCH_DICTIONARY = 'Ошибка при загрузке справочника';

/**
 * Утилита получения сообщения, что запись не найдена
 */
export const recordNotFound = (value: string) => `Запись не найдена в справочнике: ${value}`;
