import {EDictionaryName} from "../dictionary";
import {ARTIFACTS, TArtifact} from "./artifact-constants";
import {CREATURES, TCreatures} from "./creatures-constants";
import {SPELLS, TSpell} from "./spell-constants";
import {WAR_MACHINES, TWarMachine} from "./war-machines";
import {SKILLS, TSkill} from "./skill-constants";

type TIconsValues = TArtifact[] | TSpell[] | TWarMachine[] | TCreatures[] | TSkill[];

/**
 * Получение справочника по его типу
 */
export const mapTypeToDictionary: Record<string, TIconsValues> = {
    [EDictionaryName.Artifacts]: ARTIFACTS,
    [EDictionaryName.Creatures]: CREATURES,
    [EDictionaryName.Spells]: SPELLS,
    [EDictionaryName.Skills]: SKILLS,
    [EDictionaryName.WarMachines]: WAR_MACHINES,
};

/**
 * Маппинг типа словаря на заголовок перечисления сущностей
 */
export const mapTypeDictionaryToHeader: Record<string, string> = {
    [EDictionaryName.Artifacts]: "Артефакты",
    [EDictionaryName.Creatures]: "Армия",
    [EDictionaryName.Spells]: "Заклинания",
    [EDictionaryName.Skills]: "Базы",
    [EDictionaryName.WarMachines]: "Военные машины",
};
