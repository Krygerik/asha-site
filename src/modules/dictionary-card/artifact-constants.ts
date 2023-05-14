import {
    AxeOfTheMountainLords,
    RingOfTheBrokenWill,
    OgreShield,
    CursedRing,
    DragonEyeRing,
    DragonTeethNecklace,
    DragonBoneGreaves,
    DragonTalonCrown,
    DragonScaleArmor,
    DragonScaleShield,
    DragonWingMantle,
    DragonFlameTongue,
    DwarvenSmithyHammer,
    ShieldOfCrystalIce,
    RingOfVitality,
    CapeOfTheLionsMane,
    TreebornQuiver,
    Moonblade,
    OgreClub,
    RingOfCaution,
    RunicWarAxe,
    RunicWarHarness,
    NecklaceOfVictory,
    BookOfPower,
    GoldenHorseshoe,
    ScaleMailOfEnlightenment,
    HornOfPlenty,
    RuneOfFlame,
    BootsOfTheOpenRoad,
    BootsOfTheSwiftJourney,
    BagOfEndlessGold,
    TurbanOfEnlightenment
} from "../../assets/artifacts/great";
import {
    NecklaceOfTheBloodyClaw,
    CuirassOfTheDwarvenKings,
    TomeOfDestruction,
    CrownOfSarIssus,
    CloakOfDeathsShadow,
    ShieldOfTheDwarvenKings,
    ArmorOfTheForgottenHero,
    HelmOfTheDwarvenKings,
    CrownOfLeadership,
    GreavesOfTheDwarvenKings,
    TomeOfLightMagic,
    LionCrown,
    SkullOfMarkal,
    PendantOfConflux,
    EvercoldIcicle,
    RingOfSarIssus,
    RingOfCelerity,
    RobeOfSarIssus,
    SandalsOfTheBlessed,
    StaffOfSarIssus,
    StaffOfTheNetherworld,
    TridentOfTheTitans,
    UnicornHornBow,
    TomeOfDarkMagic,
    TomeOfSummoningMagic,
    WindstriderBoots,
    AmuletOfNecromancy,
    ShacklesOfTheLastMan,
    RingOfMachineAffinity,
    RingOfSpeed,
    WingsOfTheAngel,
    PendantOfMastery,
    MaskOfEquity,
    SandrosCloak,
    BootsOfLevitation,
    TearOfAsha
} from "../../assets/artifacts/relic";
import {
    BeginnersMagicWand,
    BootsOfMagicalDefense,
    HelmOfChaos,
    BreastplateOfEldritchMight,
    ElementalWaistband,
    ArmorOfValor,
    FourLeafClover,
    RingOfLightningProtection,
    NecklaceOfTheLion,
    MagicScroll,
    NecromancersHelm,
    RingOfTheUnrepentant,
    BearhideWraps,
    CloakOfSylanna,
    SwordOfMight,
    TarotDeck,
    EdgeOfBalance,
    TunicOfTheCarvedFlesh,
    EmeraldSlippers,
    RingOfBanishment,
    AllSeeingCrown,
    SackOfEndlessGold,
    PhoenixFeatherCape,
    Wand,
    ManaScroll,
    SextantOfTheSeaElves
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
        gameId: "1",
        icon: SwordOfMight
    },
    {
        gameId: "2",
        icon: AxeOfTheMountainLords
    },
    {
        gameId: "3",
        icon: Wand
    },
    {
        gameId: "4",
        icon: UnicornHornBow
    },
    {
        gameId: "5",
        icon: TridentOfTheTitans
    },
    {
        gameId: "6",
        icon: StaffOfTheNetherworld
    },
    {
        gameId: "7",
        icon: ShacklesOfTheLastMan
    },
    {
        gameId: "8",
        icon: FourLeafClover
    },
    {
        gameId: "9",
        icon: ShieldOfCrystalIce
    },
    {
        gameId: "10",
        icon: SextantOfTheSeaElves
    },
    {
        gameId: "11",
        icon: LionCrown
    },
    {
        gameId: "12",
        icon: AllSeeingCrown
    },
    {
        gameId: "13",
        icon: ArmorOfTheForgottenHero
    },
    {
        gameId: "14",
        icon: BreastplateOfEldritchMight
    },
    {
        gameId: "15",
        icon: PendantOfMastery
    },
    {
        gameId: "16",
        icon: NecklaceOfTheLion
    },
    {
        gameId: "17",
        icon: NecklaceOfTheBloodyClaw
    },
    {
        gameId: "18",
        icon: EvercoldIcicle
    },
    {
        gameId: "19",
        icon: NecklaceOfVictory
    },
    {
        gameId: "20",
        icon: RingOfLightningProtection
    },
    {
        gameId: "21",
        icon: RingOfVitality
    },
    {
        gameId: "22",
        icon: RingOfSpeed
    },
    {
        gameId: "23",
        icon: RingOfTheBrokenWill
    },
    {
        gameId: "24",
        icon: BootsOfTheSwiftJourney
    },
    {
        gameId: "25",
        icon: GoldenHorseshoe
    },
    {
        gameId: "26",
        icon: BootsOfTheOpenRoad
    },
    {
        gameId: "27",
        icon: BootsOfMagicalDefense
    },
    {
        gameId: "28",
        icon: BagOfEndlessGold
    },
    {
        gameId: "29",
        icon: SackOfEndlessGold
    },
    {
        gameId: "30",
        icon: WingsOfTheAngel
    },
    {
        gameId: "31",
        icon: CapeOfTheLionsMane
    },
    {
        gameId: "32",
        icon: PhoenixFeatherCape
    },
    {
        gameId: "33",
        icon: CloakOfDeathsShadow
    },
    {
        gameId: "34",
        icon: TurbanOfEnlightenment
    },
    {
        gameId: "35",
        icon: ScaleMailOfEnlightenment
    },
    {
        gameId: "36",
        icon: DragonScaleArmor
    },
    {
        gameId: "37",
        icon: DragonScaleShield
    },
    {
        gameId: "38",
        icon: DragonBoneGreaves
    },
    {
        gameId: "39",
        icon: DragonWingMantle
    },
    {
        gameId: "40",
        icon: DragonTeethNecklace
    },
    {
        gameId: "41",
        icon: DragonTalonCrown
    },
    {
        gameId: "42",
        icon: DragonEyeRing
    },
    {
        gameId: "43",
        icon: DragonFlameTongue
    },
    {
        gameId: "44",
        icon: RobeOfSarIssus
    },
    {
        gameId: "45",
        icon: StaffOfSarIssus
    },
    {
        gameId: "46",
        icon: CrownOfSarIssus
    },
    {
        gameId: "47",
        icon: RingOfSarIssus
    },
    {
        gameId: "48",
        icon: CuirassOfTheDwarvenKings
    },
    {
        gameId: "49",
        icon: GreavesOfTheDwarvenKings
    },
    {
        gameId: "50",
        icon: HelmOfTheDwarvenKings
    },
    {
        gameId: "51",
        icon: ShieldOfTheDwarvenKings
    },
    {
        gameId: "52",
        icon: MagicScroll
    },
    {
        gameId: "53",
        icon: TearOfAsha
    },
    {
        gameId: "54",
        icon: BootsOfLevitation
    },
    {
        gameId: "55",
        icon: NecromancersHelm
    },
    {
        gameId: "56",
        icon: ArmorOfValor
    },
    {
        gameId: "57",
        icon: WindstriderBoots
    },
    {
        gameId: "58",
        icon: Moonblade
    },
    {
        gameId: "59",
        icon: RingOfCelerity
    },
    {
        gameId: "60",
        icon: ElementalWaistband
    },
    {
        gameId: "61",
        icon: EmeraldSlippers
    },
    {
        gameId: "62",
        icon: CloakOfSylanna
    },
    {
        gameId: "63",
        icon: CursedRing
    },
    {
        gameId: "64",
        icon: TunicOfTheCarvedFlesh
    },
    {
        gameId: "65",
        icon: RingOfCaution
    },
    {
        gameId: "66",
        icon: HelmOfChaos
    },
    {
        gameId: "67",
        icon: PendantOfConflux
    },
    {
        gameId: "68",
        icon: SandalsOfTheBlessed
    },
    {
        gameId: "69",
        icon: SandrosCloak
    },
    {
        gameId: "70",
        icon: RingOfTheUnrepentant
    },
    {
        gameId: "71",
        icon: AmuletOfNecromancy
    },
    {
        gameId: "74",
        icon: OgreClub
    },
    {
        gameId: "75",
        icon: OgreShield
    },
    {
        gameId: "76",
        icon: TomeOfDestruction
    },
    {
        gameId: "77",
        icon: TomeOfLightMagic
    },
    {
        gameId: "78",
        icon: TomeOfDarkMagic
    },
    {
        gameId: "79",
        icon: TomeOfSummoningMagic
    },
    {
        gameId: "80",
        icon: BeginnersMagicWand
    },
    {
        gameId: "81",
        icon: RunicWarAxe
    },
    {
        gameId: "82",
        icon: RunicWarHarness
    },
    {
        gameId: "83",
        icon: SkullOfMarkal
    },
    {
        gameId: "84",
        icon: BearhideWraps
    },
    {
        gameId: "85",
        icon: DwarvenSmithyHammer
    },
    {
        gameId: "86",
        icon: RuneOfFlame
    },
    {
        gameId: "87",
        icon: TarotDeck
    },
    {
        gameId: "88",
        icon: CrownOfLeadership
    },
    {
        gameId: "89",
        icon: MaskOfEquity
    },
    {
        gameId: "90",
        icon: EdgeOfBalance
    },
    {
        gameId: "91",
        icon: RingOfMachineAffinity
    },
    {
        gameId: "92",
        icon: HornOfPlenty
    },
    {
        gameId: "93",
        icon: RingOfBanishment
    },
    {
        gameId: "94",
        icon: BookOfPower
    },
    {
        gameId: "95",
        icon: TreebornQuiver
    },
    {
        gameId: "HRTA-Mana-Scroll",
        icon: ManaScroll
    },
];
