import {
    AxOfTheMountainKingIcon,
    BrokenSpiritRingIcon,
    CannibalShieldIcon,
    CursedRingIcon,
    DragonEyeRingIcon,
    DragonTeethNecklaceIcon,
    DragonboneLeggingsIcon,
    DragonsClawCrownIcon,
    DragonscaleArmorIcon,
    DragonscaleShieldIcon,
    DragonwingMantleIcon,
    FlameDragonTongueIcon,
    GnomishSmithyHammerIcon,
    IceShieldIcon,
    LifeForceRingIcon,
    LionManeCapeIcon,
    MarvelousQuiverIcon,
    MoonBladeIcon,
    OgresCudgelIcon,
    RingOfCautionIcon,
    RunedBattleAxIcon,
    RunedWarHarnessIcon,
    VictoryNecklaceIcon,
    VolumeOfForceIcon
} from "../../assets/artifacts/great";
import {
    BloodClawNecklaceIcon,
    BreastplateOfTheDwarfKingIcon,
    ChaosMagicVolumeIcon,
    CrownOfSarIssaIcon,
    DeadlyShadowCloakIcon,
    DwarfKingsShieldIcon,
    ForgottenHeroArmorIcon,
    HelmOfTheDwarfKingIcon,
    LeadershipCrownIcon,
    LeggingsOfTheDwarfKingIcon,
    LightMagicVolumeIcon,
    LionCrownIcon, MarkelsSkullIcon,
    PendantOfAbsorptionIcon,
    PendantOfIcyEmbraceIcon,
    RingOfSarIssaIcon,
    RingOfSwiftnessIcon,
    RobeOfSarIssaIcon,
    SaintsSandalsIcon,
    StaffOfSarIssaIcon,
    StaffOfTheUnderworldIcon,
    TridentOfTheTitansIcon,
    UnicornHornBowIcon, VolumeOfDarkMagicIcon,
    VolumeOfSummoningMagicIcon,
    WanderersBootsIcon
} from "../../assets/artifacts/relic";
import {
    BeginnersMagicWandIcon,
    BootsOfArcaneProtectionIcon,
    ChaosHelmetIcon,
    ChestpieceOfImmensePowerIcon,
    ElementalBeltIcon,
    FearlessArmorIcon,
    FourLeafCloverIcon,
    LightningProtectionRingIcon,
    LionCollarIcon,
    ManaScrollIcon,
    NecromancerHelmetIcon,
    RingOfSinnersIcon,
    SecretShieldsIcon,
    SilannasCloakIcon,
    SwordOfMightIcon,
    TarotDeckIcon,
    TheEdgeOfBalanceIcon,
    TunicOfFleshIcon
} from "../../assets/artifacts/small";

/**
 * Тип артефакта для представления
 */
export type TArtifact = {
    name: string;
    locale: string;
    icon: string;
};

/**
 * Перечень всех артефактов
 */
export const ARTIFACTS: TArtifact[] = [
    {
       name: "Гномий кузнечный молот",
       locale: "Гномий кузнечный молот",
       icon: GnomishSmithyHammerIcon,
    },
    {
       name: "Доспехи из чешуи дракона",
       locale: "Доспехи из чешуи дракона",
       icon: DragonscaleArmorIcon,
    },
    {
       name: "Дубина людоеда",
       locale: "Дубина людоеда",
       icon: OgresCudgelIcon,
    },
    {
       name: "Изумительный колчан",
       locale: "Изумительный колчан",
       icon: MarvelousQuiverIcon,
    },
    {
       name: "Кольцо Глаз дракона",
       locale: "Кольцо Глаз дракона",
       icon: DragonEyeRingIcon,
    },
    {
       name: "Кольцо жизненной силы",
       locale: "Кольцо жизненной силы",
       icon: LifeForceRingIcon,
    },
    {
       name: "Кольцо предостережения",
       locale: "Кольцо предостережения",
       icon: RingOfCautionIcon,
    },
    {
       name: "Кольцо сломленного духа",
       locale: "Кольцо сломленного духа",
       icon: BrokenSpiritRingIcon,
    },
    {
       name: "Корона из когтей дракона",
       locale: "Корона из когтей дракона",
       icon: DragonsClawCrownIcon,
    },
    {
       name: "Ледяной щит",
       locale: "Ледяной щит",
       icon: IceShieldIcon,
    },
    {
       name: "Лунный клинок",
       locale: "Лунный клинок",
       icon: MoonBladeIcon,
    },
    {
       name: "Мантия из крыльев дракона",
       locale: "Мантия из крыльев дракона",
       icon: DragonwingMantleIcon,
    },
    {
       name: "Накидка с гривой льва",
       locale: "Накидка с гривой льва",
       icon: LionManeCapeIcon,
    },
    {
       name: "Ожерелье из зубов дракона",
       locale: "Ожерелье из зубов дракона",
       icon: DragonTeethNecklaceIcon,
    },
    {
       name: "Ожерелье победы",
       locale: "Ожерелье победы",
       icon: VictoryNecklaceIcon,
    },
    {
       name: "Пламенный язык дракона",
       locale: "Пламенный язык дракона",
       icon: FlameDragonTongueIcon,
    },
    {
       name: "Поножи из кости дракона",
       locale: "Поножи из кости дракона",
       icon: DragonboneLeggingsIcon,
    },
    {
       name: "Проклятое кольцо",
       locale: "Проклятое кольцо",
       icon: CursedRingIcon,
    },
    {
       name: "Рунная боевая упряжь",
       locale: "Рунная боевая упряжь",
       icon: RunedWarHarnessIcon,
    },
    {
       name: "Рунный боевой топор",
       locale: "Рунный боевой топор",
       icon: RunedBattleAxIcon,
    },
    {
       name: "Секира горного короля",
       locale: "Секира горного короля",
       icon: AxOfTheMountainKingIcon,
    },
    {
       name: "Том Силы",
       locale: "Том Силы",
       icon: VolumeOfForceIcon,
    },
    {
       name: "Щит из чешуи дракона",
       locale: "Щит из чешуи дракона",
       icon: DragonscaleShieldIcon,
    },
    {
       name: "Щит людоеда",
       locale: "Щит людоеда",
       icon: CannibalShieldIcon,
    },
    {
       name: "Доспехи Забытого Героя",
       locale: "Доспехи Забытого Героя",
       icon: ForgottenHeroArmorIcon,
    },
    {
       name: "Кираса короля гномов",
       locale: "Кираса короля гномов",
       icon: BreastplateOfTheDwarfKingIcon,
    },
    {
       name: "Кольцо Сар-Иссы",
       locale: "Кольцо Сар-Иссы",
       icon: RingOfSarIssaIcon,
    },
    {
       name: "Кольцо стремительности",
       locale: "Кольцо стремительности",
       icon: RingOfSwiftnessIcon,
    },
    {
       name: "Корона лидерства",
       locale: "Корона лидерства",
       icon: LeadershipCrownIcon,
    },
    {
       name: "Корона льва",
       locale: "Корона льва",
       icon: LionCrownIcon,
    },
    {
       name: "Корона Сар-Иссы",
       locale: "Корона Сар-Иссы",
       icon: CrownOfSarIssaIcon,
    },
    {
       name: "Кулон ледяных объятий",
       locale: "Кулон ледяных объятий",
       icon: PendantOfIcyEmbraceIcon,
    },
    {
       name: "Кулон Поглощения",
       locale: "Кулон Поглощения",
       icon: PendantOfAbsorptionIcon,
    },
    {
       name: "Лук из рога Единорога",
       locale: "Лук из рога Единорога",
       icon: UnicornHornBowIcon,
    },
    {
       name: "Ожерелье кровавого когтя",
       locale: "Ожерелье Кровавого Когтя",
       icon: BloodClawNecklaceIcon,
    },
    {
       name: "Плащ Смертоносной Тени",
       locale: "Плащ Смертоносной Тени",
       icon: DeadlyShadowCloakIcon,
    },
    {
       name: "Поножи короля гномов",
       locale: "Поножи короля гномов",
       icon: LeggingsOfTheDwarfKingIcon,
    },
    {
       name: "Посох Преисподней",
       locale: "Посох Преисподней",
       icon: StaffOfTheUnderworldIcon,
    },
    {
       name: "Посох Сар-Иссы",
       locale: "Посох Сар-Иссы",
       icon: StaffOfSarIssaIcon,
    },
    {
       name: "Сандалии Святого",
       locale: "Сандалии Святого",
       icon: SaintsSandalsIcon,
    },
    {
       name: "Сапоги странника",
       locale: "Сапоги странника",
       icon: WanderersBootsIcon,
    },
    {
       name: "Том магии Призыва",
       locale: "Том магии Призыва",
       icon: VolumeOfSummoningMagicIcon,
    },
    {
       name: "Том магии Света",
       locale: "Том магии Света",
       icon: LightMagicVolumeIcon,
    },
    {
       name: "Том магии Тьмы",
       locale: "Том магии Тьмы",
       icon: VolumeOfDarkMagicIcon,
    },
    {
       name: "Том магии Хаоса",
       locale: "Том магии Хаоса",
       icon: ChaosMagicVolumeIcon,
    },
    {
       name: "Трезубец Титанов",
       locale: "Трезубец Титанов",
       icon: TridentOfTheTitansIcon,
    },
    {
       name: "Халат Сар-Иссы",
       locale: "Халат Сар-Иссы",
       icon: RobeOfSarIssaIcon,
    },
    {
       name: "Череп Маркела",
       locale: "Череп Маркела",
       icon: MarkelsSkullIcon,
    },
    {
       name: "Шлем короля гномов",
       locale: "Шлем короля гномов",
       icon: HelmOfTheDwarfKingIcon,
    },
    {
       name: "Щит короля гномов",
       locale: "Щит короля гномов",
       icon: DwarfKingsShieldIcon,
    },
    {
       name: "Волшебная палочка новичка",
       locale: "Волшебная палочка новичка",
       icon: BeginnersMagicWandIcon,
    },
    {
       name: "На грани равновесия",
       locale: "Грань равновесия",
       icon: TheEdgeOfBalanceIcon,
    },
    {
       name: "Доспехи бесстрашия",
       locale: "Доспехи бесстрашия",
       icon: FearlessArmorIcon,
    },
    {
       name: "Колода Таро",
       locale: "Колода Таро",
       icon: TarotDeckIcon,
    },
    {
       name: "Кольцо Грешников",
       locale: "Кольцо грешников",
       icon: RingOfSinnersIcon,
    },
    {
       name: "Кольцо защиты от молний",
       locale: "Кольцо защиты от молний",
       icon: LightningProtectionRingIcon,
    },
    {
       name: "Меч мощи",
       locale: "Меч мощи",
       icon: SwordOfMightIcon,
    },
    {
       name: "Нагрудник огромной мощи",
       locale: "Нагрудник огромной мощи",
       icon: ChestpieceOfImmensePowerIcon,
    },
    {
       name: "Ошейник льва",
       locale: "Ошейник льва",
       icon: LionCollarIcon,
    },
    {
       name: "Плащ Силанны",
       locale: "Плащ Силанны",
       icon: SilannasCloakIcon,
    },
    {
       name: "Пояс элементалей",
       locale: "Пояс элементалей",
       icon: ElementalBeltIcon,
    },
    {
       name: "Сапоги магической защиты",
       locale: "Сапоги магической защиты",
       icon: BootsOfArcaneProtectionIcon,
    },
    {
       name: "Свиток маны",
       locale: "Свиток маны",
       icon: ManaScrollIcon,
    },
    {
       name: "Тайные защитные покровы",
       locale: "Тайные защитные покровы",
       icon: SecretShieldsIcon,
    },
    {
       name: "Туника из плоти",
       locale: "Туника из плоти",
       icon: TunicOfFleshIcon,
    },
    {
       name: "Четырехлистный клевер",
       locale: "Четырехлистный клевер",
       icon: FourLeafCloverIcon,
    },
    {
       name: "Шлем некроманта",
       locale: "Шлем некроманта",
       icon: NecromancerHelmetIcon,
    },
    {
       name: "Шлем Хаоса",
       locale: "Шлем Хаоса",
       icon: ChaosHelmetIcon,
    },
];
