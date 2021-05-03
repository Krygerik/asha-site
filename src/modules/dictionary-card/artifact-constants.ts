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
       gameId: "ID85",
       icon: GnomishSmithyHammerIcon,
    },
    {
       gameId: "ID36",
       icon: DragonscaleArmorIcon,
    },
    {
       gameId: "ID74",
       icon: OgresCudgelIcon,
    },
    {
       gameId: "ID25",
       icon: GoldenHorseshoeIcon,
    },
    {
       gameId: "ID95",
       icon: MarvelousQuiverIcon,
    },
    {
       gameId: "ID42",
       icon: DragonEyeRingIcon,
    },
    {
       gameId: "ID21",
       icon: LifeForceRingIcon,
    },
    {
       gameId: "ID65",
       icon: RingOfCautionIcon,
    },
    {
       gameId: "ID23",
       icon: BrokenSpiritRingIcon,
    },
    {
       gameId: "ID41",
       icon: DragonsClawCrownIcon,
    },
    {
       gameId: "ID9",
       icon: IceShieldIcon,
    },
    {
       gameId: "ID58",
       icon: MoonBladeIcon,
    },
    {
       gameId: "ID39",
       icon: DragonwingMantleIcon,
    },
    {
       gameId: "ID31",
       icon: LionManeCapeIcon,
    },
    {
       gameId: "ID40",
       icon: DragonTeethNecklaceIcon,
    },
    {
       gameId: "ID19",
       icon: VictoryNecklaceIcon,
    },
    {
       gameId: "ID43",
       icon: FlameDragonTongueIcon,
    },
    {
       gameId: "ID38",
       icon: DragonboneLeggingsIcon,
    },
    {
       gameId: "ID63",
       icon: CursedRingIcon,
    },
    {
       gameId: "ID82",
       icon: RunedWarHarnessIcon,
    },
    {
       gameId: "ID81",
       icon: RunedBattleAxIcon,
    },
    {
       gameId: "ID2",
       icon: AxOfTheMountainKingIcon,
    },
    {
       gameId: "ID71",
       icon: VolumeOfForceIcon,
    },
    {
       gameId: "ID37",
       icon: DragonscaleShieldIcon,
    },
    {
       gameId: "ID75",
       icon: CannibalShieldIcon,
    },
    {
       gameId: "ID13",
       icon: ForgottenHeroArmorIcon,
    },
    {
       gameId: "ID48",
       icon: BreastplateOfTheDwarfKingIcon,
    },
    {
       gameId: "ID47",
       icon: RingOfSarIssaIcon,
    },
    {
       gameId: "ID59",
       icon: RingOfSwiftnessIcon,
    },
    {
       gameId: "ID88",
       icon: LeadershipCrownIcon,
    },
    {
       gameId: "ID11",
       icon: LionCrownIcon,
    },
    {
       gameId: "ID46",
       icon: CrownOfSarIssaIcon,
    },
    {
       gameId: "ID18",
       icon: PendantOfIcyEmbraceIcon,
    },
    {
       gameId: "ID67",
       icon: PendantOfAbsorptionIcon,
    },
    {
       gameId: "ID4",
       icon: UnicornHornBowIcon,
    },
    {
       gameId: "ID17",
       icon: BloodClawNecklaceIcon,
    },
    {
       gameId: "ID33",
       icon: DeadlyShadowCloakIcon,
    },
    {
       gameId: "ID49",
       icon: LeggingsOfTheDwarfKingIcon,
    },
    {
       gameId: "ID6",
       icon: StaffOfTheUnderworldIcon,
    },
    {
       gameId: "ID45",
       icon: StaffOfSarIssaIcon,
    },
    {
       gameId: "ID68",
       icon: SaintsSandalsIcon,
    },
    {
       gameId: "ID57",
       icon: WanderersBootsIcon,
    },
    {
       gameId: "ID79",
       icon: VolumeOfSummoningMagicIcon,
    },
    {
       gameId: "ID77",
       icon: LightMagicVolumeIcon,
    },
    {
       gameId: "ID78",
       icon: VolumeOfDarkMagicIcon,
    },
    {
       gameId: "ID76",
       icon: ChaosMagicVolumeIcon,
    },
    {
       gameId: "ID5",
       icon: TridentOfTheTitansIcon,
    },
    {
       gameId: "ID44",
       icon: RobeOfSarIssaIcon,
    },
    {
       gameId: "ID83",
       icon: MarkelsSkullIcon,
    },
    {
       gameId: "ID50",
       icon: HelmOfTheDwarfKingIcon,
    },
    {
       gameId: "ID51",
       icon: DwarfKingsShieldIcon,
    },
    {
       gameId: "ID80",
       icon: BeginnersMagicWandIcon,
    },
    {
       gameId: "ID90",
       icon: TheEdgeOfBalanceIcon,
    },
    {
       gameId: "ID56",
       icon: FearlessArmorIcon,
    },
    {
       gameId: "ID87",
       icon: TarotDeckIcon,
    },
    {
       gameId: "ID70",
       icon: RingOfSinnersIcon,
    },
    {
       gameId: "ID20",
       icon: LightningProtectionRingIcon,
    },
    {
       gameId: "ID1",
       icon: SwordOfMightIcon,
    },
    {
       gameId: "ID14",
       icon: ChestpieceOfImmensePowerIcon,
    },
    {
       gameId: "ID16",
       icon: LionCollarIcon,
    },
    {
       gameId: "ID62",
       icon: SilannasCloakIcon,
    },
    {
       gameId: "ID60",
       icon: ElementalBeltIcon,
    },
    {
       gameId: "ID27",
       icon: BootsOfArcaneProtectionIcon,
    },
    {
       gameId: "ID10",
       icon: ManaScrollIcon,
    },
    {
       gameId: "ID84",
       icon: SecretShieldsIcon,
    },
    {
       gameId: "ID64",
       icon: TunicOfFleshIcon,
    },
    {
       gameId: "ID8",
       icon: FourLeafCloverIcon,
    },
    {
       gameId: "ID55",
       icon: NecromancerHelmetIcon,
    },
    {
       gameId: "ID66",
       icon: ChaosHelmetIcon,
    },
];
