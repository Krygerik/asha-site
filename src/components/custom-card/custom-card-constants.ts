import {ARTIFACTS, TArtifact} from "./artifact-constants";
import {SPELLS, TSpell} from "./spell-constants";

/**
 * Доступные типы справочников
 */
export enum EDictionaryType {
    ARTS="ARTS",
    SPELLS="SPELLS",
}

/**
 * Получение справочника по его типу
 */
export const mapTypeToDictionary: Record<EDictionaryType, TArtifact[] | TSpell[]> = {
    [EDictionaryType.ARTS]: ARTIFACTS,
    [EDictionaryType.SPELLS]: SPELLS,
};

/**
 * Маппинг типа словаря на заголовок перечисления сущностей
 */
export const mapTypeDictionaryToHeader: Record<EDictionaryType, string> = {
    [EDictionaryType.ARTS]: "Артефакты",
    [EDictionaryType.SPELLS]: "Заклинания",
};
