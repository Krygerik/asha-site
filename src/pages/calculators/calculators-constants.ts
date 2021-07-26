
/**
 * Перечисление всех возможных эффектов, влияющих на инициативу
 */
export enum EEffectName {
    // Ускорение с базовой магией Света
    BasicLightHaste = "BasicLightHaste",
    // Ускорение с развитой магией Света
    AdvancedLightHaste = "AdvancedLightHaste",
    // Ускорение с искусной магией Света
    ExpertLightHaste = "ExpertLightHaste",
    // Замедление с базовой магией Тьмы
    BasicDarkSlow = "BasicDarkSlow",
    // Замедление с развитой магией Тьмы
    AdvancedDarkSlow = "AdvancedDarkSlow",
    // Замедление с искусной магией Тьмы
    ExpertDarkSlow = "ExpertDarkSlow",
    // Специальность Орнеллы
    SpecialityOrnella = "SpecialityOrnella",
    // Навык "Крик баньши"
    SkillBansheeHowl = "SkillBansheeHowl",
    // Артефакт "Кольцо Глаз дракона"
    ArtEyeOfTheDragon = "ArtEyeOfTheDragon",
    // Артефакт "Мантия из крыльев дракона"
    ArtDragonWingMantle = "ArtDragonWingMantle",
    // Артефакт "Ожерелье из зубов дракона"
    ArtDragonTeethNecklace = "ArtDragonTeethNecklace",
    // Артефакт "Дубина людоеда"
    ArtOgresCudgel = "ArtOgresCudgel",
    // Артефакт "Щит людоеда"
    ArtOgresShield = "ArtOgresShield",
    // Артефакт "Доспехи из чешуи дракона"
    ArtDragonScaleArmor = "ArtDragonScaleArmor",
    // Артефакт "Поножи из кости дракона"
    ArtDragonBoneLeggings = "ArtDragonBoneLeggings",
    // Артефакт "Щит из чешуи дракона"
    ArtDragonScaleShield = "ArtDragonScaleShield",
    // Артефакт "Кольцо стремительности"
    ArtRingOfSwiftness = "ArtRingOfSwiftness",
    // Артефакт "Посох Преисподней"
    ArtStaffOfTheUnderworld = "ArtStaffOfTheUnderworld",
    // Набор "Объятие смерти"
    SetDeathsEmbrace = "SetDeathsEmbrace",
    // Набор "Штормовой ветер"
    SkillStormWind = "SkillStormWind",
    // Набор "Туманная завеса"
    SkillMistyCurtain = "SkillMistyCurtain",
}

/**
 * Соотношение ключей эффектов к их названиям
 */
export const MAP_EFFECTS_NAME_TO_LABEL = {
    [EEffectName.BasicLightHaste]: "Ускорение с базовой магией Света",
    [EEffectName.AdvancedLightHaste]: "Ускорение с развитой магией Света",
    [EEffectName.ExpertLightHaste]: "Ускорение с искусной магией Света",
    [EEffectName.BasicDarkSlow]: "Замедление с базовой магией Тьмы",
    [EEffectName.AdvancedDarkSlow]: "Замедление с развитой магией Тьмы",
    [EEffectName.ExpertDarkSlow]: "Замедление с искусной магией Тьмы",
    [EEffectName.SpecialityOrnella]: "Специальность Орнеллы",
    [EEffectName.SkillBansheeHowl]: "Крик баньши",
    [EEffectName.ArtEyeOfTheDragon]: "Кольцо Глаз дракона",
    [EEffectName.ArtDragonWingMantle]: "Мантия из крыльев дракона",
    [EEffectName.ArtDragonTeethNecklace]: "Ожерелье из зубов дракона",
    [EEffectName.ArtOgresCudgel]: "Дубина людоеда",
    [EEffectName.ArtOgresShield]: "Щит людоеда",
    [EEffectName.ArtDragonScaleArmor]: "Доспехи из чешуи дракона",
    [EEffectName.ArtDragonBoneLeggings]: "Поножи из кости дракона",
    [EEffectName.ArtDragonScaleShield]: "Щит из чешуи дракона",
    [EEffectName.ArtRingOfSwiftness]: "Кольцо стремительности",
    [EEffectName.ArtStaffOfTheUnderworld]: "Посох Преисподней",
    [EEffectName.SetDeathsEmbrace]: "Набор \"Объятие смерти\"",
    [EEffectName.SkillStormWind]: "Штормовой ветер",
    [EEffectName.SkillMistyCurtain]: "Туманная завеса",
}

/**
 * Типы эффектов по виду вычисления
 */
export enum EEffectTypes {
    // Эффект зависит от уровня героя
    ByLevel = "ByLevel",
    // У эффекта строго 1 значение
    Simple = "Simple",
    // Прямое вычитание инициативы
    Subtraction = "Subtraction",
}

/**
 * Соотношение ключей эффектов к их параметрам
 */
export const MAP_EFFECT_NAME_TO_PROPS = {
    [EEffectName.BasicLightHaste]: {
        type: EEffectTypes.Simple,
        value: 1.15,
    },
    [EEffectName.AdvancedLightHaste]: {
        type: EEffectTypes.Simple,
        value: 1.2,
    },
    [EEffectName.ExpertLightHaste]: {
        type: EEffectTypes.Simple,
        value: 1.25,
    },
    [EEffectName.BasicDarkSlow]: {
        type: EEffectTypes.Simple,
        value: 0.85,
    },
    [EEffectName.AdvancedDarkSlow]: {
        type: EEffectTypes.Simple,
        value: 0.8,
    },
    [EEffectName.ExpertDarkSlow]: {
        type: EEffectTypes.Simple,
        value: 0.75,
    },
    [EEffectName.SpecialityOrnella]: {
        formula: (level: number) => Number(1 - level * 0.004).toFixed(2),
        type: EEffectTypes.ByLevel,
    },
    [EEffectName.SkillBansheeHowl]: {
        type: EEffectTypes.Simple,
        value: 0.9,
    },
    [EEffectName.ArtEyeOfTheDragon]: {
        type: EEffectTypes.Simple,
        value: 1.1,
    },
    [EEffectName.ArtDragonWingMantle]: {
        type: EEffectTypes.Simple,
        value: 1.1,
    },
    [EEffectName.ArtDragonTeethNecklace]: {
        type: EEffectTypes.Simple,
        value: 1.1,
    },
    [EEffectName.ArtOgresCudgel]: {
        type: EEffectTypes.Simple,
        value: 0.95,
    },
    [EEffectName.ArtOgresShield]: {
        type: EEffectTypes.Simple,
        value: 0.95,
    },
    [EEffectName.ArtDragonScaleArmor]: {
        type: EEffectTypes.Simple,
        value: 1.05,
    },
    [EEffectName.ArtDragonBoneLeggings]: {
        type: EEffectTypes.Simple,
        value: 1.1,
    },
    [EEffectName.ArtDragonScaleShield]: {
        type: EEffectTypes.Simple,
        value: 1.05,
    },
    [EEffectName.ArtRingOfSwiftness]: {
        type: EEffectTypes.Simple,
        value: 1.1,
    },
    [EEffectName.ArtStaffOfTheUnderworld]: {
        type: EEffectTypes.Subtraction,
        value: -1,
    },
    [EEffectName.SetDeathsEmbrace]: {
        type: EEffectTypes.Simple,
        value: 0.85,
    },
    [EEffectName.SkillStormWind]: {
        type: EEffectTypes.Simple,
        value: 0.8,
    },
    [EEffectName.SkillMistyCurtain]: {
        type: EEffectTypes.Simple,
        value: 0.9,
    },
}
