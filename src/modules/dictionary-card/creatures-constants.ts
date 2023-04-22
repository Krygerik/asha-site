/**
 * Тип артефакта для представления
 */
import {
    AirElemental,
    DeathKnight,
    EarthElemental,
    FireElemental,
    Mummy,
    WaterElemental,
    Wolf
} from "../../assets/creatures/neutral";
import {
    Archmage,
    BattleMage,
    DjinnSultan,
    DjinnVizier,
    ElementalGargoyle,
    GremlinSaboteur,
    MagneticGolem,
    MasterGremlin,
    ObsidianGargoyle,
    RakshasaKshatra,
    RakshasaRaja,
    SteelGolem,
    StormTitan,
    Titan
} from "../../assets/creatures/academy";
import {
    Assassin,
    BlackDragon,
    BloodFury,
    BloodSister,
    BriskRaider,
    DeepHydra,
    FoulHydra,
    GrimRaider,
    MinotaurGuard,
    MinotaurTaskmaster,
    RedDragon,
    ShadowMatriarch,
    ShadowMistress,
    Stalker
} from "../../assets/creatures/dungeon";
import {
    Archangel,
    BattleGriffin,
    Brute,
    Champion,
    Conscript,
    Crossbowman,
    ImperialGriffin,
    Inquisitor,
    Marksman,
    Paladin,
    Seraph,
    Squire,
    Vindicator,
    Zealot
} from "../../assets/creatures/haven";
import {
    ArchDemon,
    ArchDevil,
    Cerberus,
    Familiar,
    Firehound,
    HellStallion,
    HornedGrunt,
    HornedOverseer,
    Nightmare,
    PitLord,
    PitSpawn,
    SuccubusMistress,
    SuccubusSeducer,
    Vermin
} from "../../assets/creatures/inferno";
import {
    Archlich,
    Banshee,
    GhostDragon,
    LichMaster,
    PlagueZombie,
    Poltergeist,
    RotZombie,
    SkeletonArcher,
    SkeletonWarrior,
    SpectralDragon,
    Spectre,
    VampireLord,
    VampirePrince,
    Wraith
} from "../../assets/creatures/necropolis";
import {
    AncientTreant,
    ArcaneArcher,
    CrystalDragon,
    DruidElder,
    Dryad,
    EmeraldDragon,
    HighDruid,
    MasterHunter,
    PristineUnicorn,
    SavageTreant,
    SilverUnicorn,
    Sprite,
    WarDancer,
    WindDancer
} from "../../assets/creatures/sylvan";
import {
    Battlerager,
    Berserker,
    BlackbearRider,
    FlameLord,
    Harpooner,
    LavaDragon,
    MagmaDragon,
    MountainGuard,
    RuneKeeper,
    RunePatriarch,
    Shieldguard,
    Skirmisher,
    ThunderThane,
    WhitebearRider
} from "../../assets/creatures/fortress";
import {
    BloodeyedCyclops,
    CentaurMarauder,
    CentaurNomad,
    Chieftain,
    EarthDaughter,
    Executioner,
    FoulWyvern,
    GoblinTrapper,
    GoblinWitchDoctor,
    Mauler,
    Paokai,
    SkyDaughter,
    UntamedCyclops,
    Warmonger
} from "../../assets/creatures/stronghold";

export type TCreatures = {
    gameId: string;
    icon: string;
};

export const CREATURES: TCreatures[] = [
    {
        gameId: "113",
        icon: Wolf
    },
    {
        gameId: "85",
        icon: FireElemental
    },
    {
        gameId: "86",
        icon: WaterElemental
    },
    {
        gameId: "88",
        icon: AirElemental
    },
    {
        gameId: "87",
        icon: EarthElemental
    },
    {
        gameId: "116",
        icon: Mummy
    },
    {
        gameId: "90",
        icon: DeathKnight
    },
    {
        gameId: "58",
        icon: MasterGremlin
    },
    {
        gameId: "159",
        icon: GremlinSaboteur
    },
    {
        gameId: "60",
        icon: ObsidianGargoyle
    },
    {
        gameId: "160",
        icon: ElementalGargoyle
    },
    {
        gameId: "62",
        icon: SteelGolem
    },
    {
        gameId: "161",
        icon: MagneticGolem
    },
    {
        gameId: "64",
        icon: Archmage
    },
    {
        gameId: "162",
        icon: BattleMage
    },
    {
        gameId: "66",
        icon: DjinnSultan
    },
    {
        gameId: "163",
        icon: DjinnVizier
    },
    {
        gameId: "68",
        icon: RakshasaRaja
    },
    {
        gameId: "164",
        icon: RakshasaKshatra
    },
    {
        gameId: "70",
        icon: Titan
    },
    {
        gameId: "165",
        icon: StormTitan
    },
    {
        gameId: "72",
        icon: Assassin
    },
    {
        gameId: "138",
        icon: Stalker
    },
    {
        gameId: "74",
        icon: BloodFury
    },
    {
        gameId: "139",
        icon: BloodSister
    },
    {
        gameId: "76",
        icon: MinotaurGuard
    },
    {
        gameId: "140",
        icon: MinotaurTaskmaster
    },
    {
        gameId: "78",
        icon: GrimRaider
    },
    {
        gameId: "141",
        icon: BriskRaider
    },
    {
        gameId: "80",
        icon: DeepHydra
    },
    {
        gameId: "142",
        icon: FoulHydra
    },
    {
        gameId: "143",
        icon: ShadowMistress
    },
    {
        gameId: "84",
        icon: BlackDragon
    },
    {
        gameId: "144",
        icon: RedDragon
    },
    {
        gameId: "2",
        icon: Conscript
    },
    {
        gameId: "106",
        icon: Brute
    },
    {
        gameId: "4",
        icon: Marksman
    },
    {
        gameId: "107",
        icon: Crossbowman
    },
    {
        gameId: "6",
        icon: Squire
    },
    {
        gameId: "108",
        icon: Vindicator
    },
    {
        gameId: "109",
        icon: BattleGriffin
    },
    {
        gameId: "10",
        icon: Inquisitor
    },
    {
        gameId: "110",
        icon: Zealot
    },
    {
        gameId: "12",
        icon: Paladin
    },
    {
        gameId: "111",
        icon: Champion
    },
    {
        gameId: "112",
        icon: Seraph
    },
    {
        gameId: "16",
        icon: Familiar
    },
    {
        gameId: "131",
        icon: Vermin
    },
    {
        gameId: "18",
        icon: HornedOverseer
    },
    {
        gameId: "132",
        icon: HornedGrunt
    },
    {
        gameId: "19",
        icon: Cerberus
    },
    {
        gameId: "133",
        icon: Firehound
    },
    {
        gameId: "22",
        icon: SuccubusMistress
    },
    {
        gameId: "134",
        icon: SuccubusSeducer
    },
    {
        gameId: "24",
        icon: Nightmare
    },
    {
        gameId: "135",
        icon: HellStallion
    },
    {
        gameId: "26",
        icon: PitLord
    },
    {
        gameId: "136",
        icon: PitSpawn
    },
    {
        gameId: "137",
        icon: ArchDemon
    },
    {
        gameId: "30",
        icon: SkeletonArcher
    },
    {
        gameId: "152",
        icon: SkeletonWarrior
    },
    {
        gameId: "32",
        icon: PlagueZombie
    },
    {
        gameId: "153",
        icon: RotZombie
    },
    {
        gameId: "34",
        icon: Spectre
    },
    {
        gameId: "154",
        icon: Poltergeist
    },
    {
        gameId: "36",
        icon: VampireLord
    },
    {
        gameId: "155",
        icon: VampirePrince
    },
    {
        gameId: "38",
        icon: Archlich
    },
    {
        gameId: "156",
        icon: LichMaster
    },
    {
        gameId: "40",
        icon: Wraith
    },
    {
        gameId: "157",
        icon: Banshee
    },
    {
        gameId: "42",
        icon: SpectralDragon
    },
    {
        gameId: "158",
        icon: GhostDragon
    },
    {
        gameId: "145",
        icon: Dryad
    },
    {
        gameId: "146",
        icon: WindDancer
    },
    {
        gameId: "147",
        icon: ArcaneArcher
    },
    {
        gameId: "148",
        icon: HighDruid
    },
    {
        gameId: "52",
        icon: SilverUnicorn
    },
    {
        gameId: "149",
        icon: PristineUnicorn
    },
    {
        gameId: "150",
        icon: SavageTreant
    },
    {
        gameId: "151",
        icon: CrystalDragon
    },
    {
        gameId: "93",
        icon: Shieldguard
    },
    {
        gameId: "92",
        icon: MountainGuard
    },
    {
        gameId: "95",
        icon: Skirmisher
    },
    {
        gameId: "167",
        icon: Harpooner
    },
    {
        gameId: "97",
        icon: BlackbearRider
    },
    {
        gameId: "168",
        icon: WhitebearRider
    },
    {
        gameId: "169",
        icon: Battlerager
    },
    {
        gameId: "101",
        icon: RunePatriarch
    },
    {
        gameId: "170",
        icon: RuneKeeper
    },
    {
        gameId: "171",
        icon: ThunderThane
    },
    {
        gameId: "105",
        icon: MagmaDragon
    },
    {
        gameId: "172",
        icon: LavaDragon
    },
    {
        gameId: "118",
        icon: GoblinTrapper
    },
    {
        gameId: "173",
        icon: GoblinWitchDoctor
    },
    {
        gameId: "120",
        icon: CentaurNomad
    },
    {
        gameId: "174",
        icon: CentaurMarauder
    },
    {
        gameId: "122",
        icon: Mauler
    },
    {
        gameId: "175",
        icon: Warmonger
    },
    {
        gameId: "124",
        icon: SkyDaughter
    },
    {
        gameId: "176",
        icon: EarthDaughter
    },
    {
        gameId: "126",
        icon: Executioner
    },
    {
        gameId: "177",
        icon: Chieftain
    },
    {
        gameId: "128",
        icon: FoulWyvern
    },
    {
        gameId: "178",
        icon: Paokai
    },
    {
        gameId: "130",
        icon: UntamedCyclops
    },
    {
        gameId: "179",
        icon: BloodeyedCyclops
    },
    {
        gameId: "8",
        icon: ImperialGriffin
    },
    {
        gameId: "54",
        icon: AncientTreant
    },
    {
        gameId: "56",
        icon: EmeraldDragon
    },
    {
        gameId: "44",
        icon: Sprite
    },
    {
        gameId: "103",
        icon: FlameLord
    },
    {
        gameId: "46",
        icon: WarDancer
    },
    {
        gameId: "48",
        icon: MasterHunter
    },
    {
        gameId: "50",
        icon: DruidElder
    },
    {
        gameId: "82",
        icon: ShadowMatriarch
    },
    {
        gameId: "99",
        icon: Berserker
    },
    {
        gameId: "28",
        icon: ArchDevil
    },
    {
        gameId: "14",
        icon: Archangel
    },
];
