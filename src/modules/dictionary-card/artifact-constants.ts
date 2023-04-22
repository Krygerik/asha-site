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
    VolumeOfForceIcon,
    GoldenHorseshoeIcon,
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
    LionCrownIcon,
    MarkelsSkullIcon,
    PendantOfAbsorptionIcon,
    PendantOfIcyEmbraceIcon,
    RingOfSarIssaIcon,
    RingOfSwiftnessIcon,
    RobeOfSarIssaIcon,
    SaintsSandalsIcon,
    StaffOfSarIssaIcon,
    StaffOfTheUnderworldIcon,
    TridentOfTheTitansIcon,
    UnicornHornBowIcon,
    VolumeOfDarkMagicIcon,
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
    gameId: string;
    icon: string;
};

/**
 * Перечень всех артефактов
 */
export const ARTIFACTS: TArtifact[] = [
    {
       gameId: "85",
       icon: GnomishSmithyHammerIcon,
    },
    {
       gameId: "36",
       icon: DragonscaleArmorIcon,
    },
    {
       gameId: "74",
       icon: OgresCudgelIcon,
    },
    {
       gameId: "25",
       icon: GoldenHorseshoeIcon,
    },
    {
       gameId: "95",
       icon: MarvelousQuiverIcon,
    },
    {
       gameId: "42",
       icon: DragonEyeRingIcon,
    },
    {
       gameId: "21",
       icon: LifeForceRingIcon,
    },
    {
       gameId: "65",
       icon: RingOfCautionIcon,
    },
    {
       gameId: "23",
       icon: BrokenSpiritRingIcon,
    },
    {
       gameId: "41",
       icon: DragonsClawCrownIcon,
    },
    {
       gameId: "9",
       icon: IceShieldIcon,
    },
    {
       gameId: "58",
       icon: MoonBladeIcon,
    },
    {
       gameId: "39",
       icon: DragonwingMantleIcon,
    },
    {
       gameId: "31",
       icon: LionManeCapeIcon,
    },
    {
       gameId: "40",
       icon: DragonTeethNecklaceIcon,
    },
    {
       gameId: "19",
       icon: VictoryNecklaceIcon,
    },
    {
       gameId: "43",
       icon: FlameDragonTongueIcon,
    },
    {
       gameId: "38",
       icon: DragonboneLeggingsIcon,
    },
    {
       gameId: "63",
       icon: CursedRingIcon,
    },
    {
       gameId: "82",
       icon: RunedWarHarnessIcon,
    },
    {
       gameId: "81",
       icon: RunedBattleAxIcon,
    },
    {
       gameId: "2",
       icon: AxOfTheMountainKingIcon,
    },
    {
       gameId: "94",
       icon: VolumeOfForceIcon,
    },
    {
       gameId: "37",
       icon: DragonscaleShieldIcon,
    },
    {
       gameId: "75",
       icon: CannibalShieldIcon,
    },
    {
       gameId: "13",
       icon: ForgottenHeroArmorIcon,
    },
    {
       gameId: "48",
       icon: BreastplateOfTheDwarfKingIcon,
    },
    {
       gameId: "47",
       icon: RingOfSarIssaIcon,
    },
    {
       gameId: "59",
       icon: RingOfSwiftnessIcon,
    },
    {
       gameId: "88",
       icon: LeadershipCrownIcon,
    },
    {
       gameId: "11",
       icon: LionCrownIcon,
    },
    {
       gameId: "46",
       icon: CrownOfSarIssaIcon,
    },
    {
       gameId: "18",
       icon: PendantOfIcyEmbraceIcon,
    },
    {
       gameId: "67",
       icon: PendantOfAbsorptionIcon,
    },
    {
       gameId: "4",
       icon: UnicornHornBowIcon,
    },
    {
       gameId: "17",
       icon: BloodClawNecklaceIcon,
    },
    {
       gameId: "33",
       icon: DeadlyShadowCloakIcon,
    },
    {
       gameId: "49",
       icon: LeggingsOfTheDwarfKingIcon,
    },
    {
       gameId: "45",
       icon: StaffOfSarIssaIcon,
    },
    {
       gameId: "68",
       icon: SaintsSandalsIcon,
    },
    {
       gameId: "57",
       icon: WanderersBootsIcon,
    },
    {
       gameId: "79",
       icon: VolumeOfSummoningMagicIcon,
    },
    {
       gameId: "77",
       icon: LightMagicVolumeIcon,
    },
    {
       gameId: "78",
       icon: VolumeOfDarkMagicIcon,
    },
    {
       gameId: "76",
       icon: ChaosMagicVolumeIcon,
    },
    {
       gameId: "5",
       icon: TridentOfTheTitansIcon,
    },
    {
       gameId: "44",
       icon: RobeOfSarIssaIcon,
    },
    {
       gameId: "83",
       icon: MarkelsSkullIcon,
    },
    {
       gameId: "50",
       icon: HelmOfTheDwarfKingIcon,
    },
    {
       gameId: "51",
       icon: DwarfKingsShieldIcon,
    },
    {
       gameId: "80",
       icon: BeginnersMagicWandIcon,
    },
    {
       gameId: "90",
       icon: TheEdgeOfBalanceIcon,
    },
    {
       gameId: "56",
       icon: FearlessArmorIcon,
    },
    {
       gameId: "87",
       icon: TarotDeckIcon,
    },
    {
       gameId: "70",
       icon: RingOfSinnersIcon,
    },
    {
       gameId: "20",
       icon: LightningProtectionRingIcon,
    },
    {
       gameId: "1",
       icon: SwordOfMightIcon,
    },
    {
       gameId: "14",
       icon: ChestpieceOfImmensePowerIcon,
    },
    {
       gameId: "16",
       icon: LionCollarIcon,
    },
    {
       gameId: "62",
       icon: SilannasCloakIcon,
    },
    {
       gameId: "60",
       icon: ElementalBeltIcon,
    },
    {
       gameId: "27",
       icon: BootsOfArcaneProtectionIcon,
    },
    {
       gameId: "52",
       icon: ManaScrollIcon,
    },
    {
       gameId: "84",
       icon: SecretShieldsIcon,
    },
    {
       gameId: "64",
       icon: TunicOfFleshIcon,
    },
    {
       gameId: "8",
       icon: FourLeafCloverIcon,
    },
    {
       gameId: "55",
       icon: NecromancerHelmetIcon,
    },
    {
       gameId: "66",
       icon: ChaosHelmetIcon,
    },
    {
       gameId: "6",
       icon: StaffOfTheUnderworldIcon,
    },
];
