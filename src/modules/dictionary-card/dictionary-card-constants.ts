import {EDictionaryName} from "../dictionary";
import {ARTIFACTS, TArtifact} from "./artifact-constants";
import {SPELLS, TSpell} from "./spell-constants";
import {WAR_MACHINES, TWarMachine} from "./war-machines";

/**
 * Получение справочника по его типу
 */
export const mapTypeToDictionary: Record<string, TArtifact[] | TSpell[] | TWarMachine[]> = {
    [EDictionaryName.Artifacts]: ARTIFACTS,
    [EDictionaryName.Spells]: SPELLS,
    [EDictionaryName.WarMachines]: WAR_MACHINES,
};

/**
 * Маппинг типа словаря на заголовок перечисления сущностей
 */
export const mapTypeDictionaryToHeader: Record<string, string> = {
    [EDictionaryName.Artifacts]: "Артефакты",
    [EDictionaryName.Spells]: "Заклинания",
    [EDictionaryName.WarMachines]: "Военные машины",
};
