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
        gameId: "ID113",
        icon: Wolf
    },
    {
        gameId: "ID85",
        icon: FireElemental
    },
    {
        gameId: "ID86",
        icon: WaterElemental
    },
    {
        gameId: "ID88",
        icon: AirElemental
    },
    {
        gameId: "ID87",
        icon: EarthElemental
    },
    {
        gameId: "ID116",
        icon: Mummy
    },
    {
        gameId: "ID90",
        icon: DeathKnight
    },
    {
        gameId: "ID58",
        icon: MasterGremlin
    },
    {
        gameId: "ID159",
        icon: GremlinSaboteur
    },
    {
        gameId: "ID59",
        icon: ObsidianGargoyle
    },
    {
        gameId: "ID160",
        icon: ElementalGargoyle
    },
    {
        gameId: "ID61",
        icon: SteelGolem
    },
    {
        gameId: "ID161",
        icon: MagneticGolem
    },
    {
        gameId: "ID63",
        icon: Archmage
    },
    {
        gameId: "ID162",
        icon: BattleMage
    },
    {
        gameId: "ID65",
        icon: DjinnSultan
    },
    {
        gameId: "ID163",
        icon: DjinnVizier
    },
    {
        gameId: "ID67",
        icon: RakshasaRaja
    },
    {
        gameId: "ID164",
        icon: RakshasaKshatra
    },
    {
        gameId: "ID69",
        icon: Titan
    },
    {
        gameId: "ID165",
        icon: StormTitan
    },
    {
        gameId: "ID92",
        icon: Assassin
    },
    {
        gameId: "ID166",
        icon: Stalker
    },
    {
        gameId: "ID73",
        icon: BloodFury
    },
    {
        gameId: "ID139",
        icon: BloodSister
    },
    {
        gameId: "ID75",
        icon: MinotaurGuard
    },
    {
        gameId: "ID140",
        icon: MinotaurTaskmaster
    },
    {
        gameId: "ID77",
        icon: GrimRaider
    },
    {
        gameId: "ID141",
        icon: BriskRaider
    },
    {
        gameId: "ID79",
        icon: DeepHydra
    },
    {
        gameId: "ID142",
        icon: FoulHydra
    },
    {
        gameId: "ID143",
        icon: ShadowMistress
    },
    {
        gameId: "ID83",
        icon: BlackDragon
    },
    {
        gameId: "ID144",
        icon: RedDragon
    },
    {
        gameId: "ID1",
        icon: Conscript
    },
    {
        gameId: "ID106",
        icon: Brute
    },
    {
        gameId: "ID3",
        icon: Marksman
    },
    {
        gameId: "ID107",
        icon: Crossbowman
    },
    {
        gameId: "ID5",
        icon: Squire
    },
    {
        gameId: "ID108",
        icon: Vindicator
    },
    {
        gameId: "ID109",
        icon: BattleGriffin
    },
    {
        gameId: "ID9",
        icon: Inquisitor
    },
    {
        gameId: "ID110",
        icon: Zealot
    },
    {
        gameId: "ID11",
        icon: Paladin
    },
    {
        gameId: "ID111",
        icon: Champion
    },
    {
        gameId: "ID112",
        icon: Seraph
    },
    {
        gameId: "ID15",
        icon: Familiar
    },
    {
        gameId: "ID131",
        icon: Vermin
    },
    {
        gameId: "ID17",
        icon: HornedOverseer
    },
    {
        gameId: "ID132",
        icon: HornedGrunt
    },
    {
        gameId: "ID19",
        icon: Cerberus
    },
    {
        gameId: "ID133",
        icon: Firehound
    },
    {
        gameId: "ID21",
        icon: SuccubusMistress
    },
    {
        gameId: "ID134",
        icon: SuccubusSeducer
    },
    {
        gameId: "ID23",
        icon: Nightmare
    },
    {
        gameId: "ID135",
        icon: HellStallion
    },
    {
        gameId: "ID25",
        icon: PitLord
    },
    {
        gameId: "ID136",
        icon: PitSpawn
    },
    {
        gameId: "ID27",
        icon: ArchDevil
    },
    {
        gameId: "ID137",
        icon: ArchDemon
    },
    {
        gameId: "ID29",
        icon: SkeletonArcher
    },
    {
        gameId: "ID152",
        icon: SkeletonWarrior
    },
    {
        gameId: "ID31",
        icon: PlagueZombie
    },
    {
        gameId: "ID153",
        icon: RotZombie
    },
    {
        gameId: "ID34",
        icon: Spectre
    },
    {
        gameId: "ID154",
        icon: Poltergeist
    },
    {
        gameId: "ID35",
        icon: VampireLord
    },
    {
        gameId: "ID155",
        icon: VampirePrince
    },
    {
        gameId: "ID37",
        icon: Archlich
    },
    {
        gameId: "ID156",
        icon: LichMaster
    },
    {
        gameId: "ID39",
        icon: Wraith
    },
    {
        gameId: "ID157",
        icon: Banshee
    },
    {
        gameId: "ID41",
        icon: SpectralDragon
    },
    {
        gameId: "ID158",
        icon: GhostDragon
    },
    {
        gameId: "ID145",
        icon: Dryad
    },
    {
        gameId: "ID146",
        icon: WindDancer
    },
    {
        gameId: "ID147",
        icon: ArcaneArcher
    },
    {
        gameId: "ID148",
        icon: HighDruid
    },
    {
        gameId: "ID51",
        icon: SilverUnicorn
    },
    {
        gameId: "ID149",
        icon: PristineUnicorn
    },
    {
        gameId: "ID150",
        icon: SavageTreant
    },
    {
        gameId: "ID151",
        icon: CrystalDragon
    },
    {
        gameId: "ID71",
        icon: Shieldguard
    },
    {
        gameId: "ID138",
        icon: MountainGuard
    },
    {
        gameId: "ID94",
        icon: Skirmisher
    },
    {
        gameId: "ID167",
        icon: Harpooner
    },
    {
        gameId: "ID96",
        icon: BlackbearRider
    },
    {
        gameId: "ID168",
        icon: WhitebearRider
    },
    {
        gameId: "ID169",
        icon: Battlerager
    },
    {
        gameId: "ID100",
        icon: RunePatriarch
    },
    {
        gameId: "ID170",
        icon: RuneKeeper
    },
    {
        gameId: "ID171",
        icon: ThunderThane
    },
    {
        gameId: "ID105",
        icon: MagmaDragon
    },
    {
        gameId: "ID172",
        icon: LavaDragon
    },
    {
        gameId: "ID117",
        icon: GoblinTrapper
    },
    {
        gameId: "ID173",
        icon: GoblinWitchDoctor
    },
    {
        gameId: "ID119",
        icon: CentaurNomad
    },
    {
        gameId: "ID174",
        icon: CentaurMarauder
    },
    {
        gameId: "ID121",
        icon: Mauler
    },
    {
        gameId: "ID175",
        icon: Warmonger
    },
    {
        gameId: "ID123",
        icon: SkyDaughter
    },
    {
        gameId: "ID176",
        icon: EarthDaughter
    },
    {
        gameId: "ID125",
        icon: Executioner
    },
    {
        gameId: "ID177",
        icon: Chieftain
    },
    {
        gameId: "ID127",
        icon: FoulWyvern
    },
    {
        gameId: "ID178",
        icon: Paokai
    },
    {
        gameId: "ID129",
        icon: UntamedCyclops
    },
    {
        gameId: "ID179",
        icon: BloodeyedCyclops
    },
    {
        gameId: "ID8",
        icon: ImperialGriffin
    },
    {
        gameId: "ID54",
        icon: AncientTreant
    },
    {
        gameId: "ID56",
        icon: EmeraldDragon
    },
    {
        gameId: "ID14",
        icon: Archangel
    },
    {
        gameId: "ID44",
        icon: Sprite
    },
    {
        gameId: "ID103",
        icon: FlameLord
    },
    {
        gameId: "ID46",
        icon: WarDancer
    },
    {
        gameId: "ID48",
        icon: MasterHunter
    },
    {
        gameId: "ID50",
        icon: DruidElder
    },
    {
        gameId: "ID82",
        icon: ShadowMatriarch
    },
    {
        gameId: "ID99",
        icon: Berserker
    },
];
