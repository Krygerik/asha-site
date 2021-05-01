import {EDictionaryName} from "../dictionary";
import {ARTIFACTS, TArtifact} from "./artifact-constants";
import {SPELLS, TSpell} from "./spell-constants";

/**
 * Получение справочника по его типу
 */
export const mapTypeToDictionary: Record<string, TArtifact[] | TSpell[]> = {
    [EDictionaryName.Artifacts]: ARTIFACTS,
    [EDictionaryName.Spells]: SPELLS,
};

/**
 * Маппинг типа словаря на заголовок перечисления сущностей
 */
export const mapTypeDictionaryToHeader: Record<string, string> = {
    [EDictionaryName.Artifacts]: "Артефакты",
    [EDictionaryName.Spells]: "Заклинания",
};
