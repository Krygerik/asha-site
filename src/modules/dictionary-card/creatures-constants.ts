/**
 * Тип артефакта для представления
 */
import {
    AirElemental,
    DeathKnight,
    EarthElemental,
    FireElemental,
    Manticore,
    Mummy,
    Phoenix,
    WaterElemental,
    Wolf
} from "../../assets/creatures/neutral";
import {
    ArchMage,
    BattleMage,
    Colossus,
    Djinn,
    DjinnSultan,
    DjinnVizier,
    ElementalGargoyle,
    Gremlin,
    GremlinSaboteur,
    IronGolem,
    Mage,
    MagneticGolem,
    MasterGremlin,
    ObsidianGargoyle,
    RakshasaKshatra,
    RakshasaRaja,
    RakshasaRani,
    SteelGolem,
    StoneGargoyle,
    StormTitan,
    Titan
} from "../../assets/creatures/academy";
import {
    Assassin,
    BlackDragon,
    BloodFury,
    BloodMaiden,
    BloodSister,
    BriskRaider,
    DarkRaider,
    DeepHydra,
    FoulHydra,
    GrimRaider,
    Hydra,
    Minotaur,
    MinotaurGuard,
    MinotaurTaskmaster,
    RedDragon,
    Scout,
    ShadowDragon,
    ShadowMatriarch,
    ShadowMistress,
    ShadowWitch,
    Stalker
} from "../../assets/creatures/dungeon";
import {
    Angel,
    Archangel,
    Archer,
    BattleGriffin,
    Brute,
    Cavalier,
    Champion,
    Conscript,
    Crossbowman,
    Footman,
    Griffin,
    RoyalGriffin,
    Inquisitor,
    Marksman,
    Paladin,
    Peasant,
    Priest,
    Seraph,
    Squire,
    Vindicator,
    Zealot
} from "../../assets/creatures/haven";
import {
    ArchDemon,
    ArchDevil,
    Cerberus,
    Devil,
    Familiar,
    Firehound,
    HellCharger,
    HellHound,
    HellStallion,
    HornedDemon,
    HornedGrunt,
    HornedOverseer,
    Imp,
    Nightmare,
    PitFiend,
    PitLord,
    PitSpawn,
    Succubus,
    SuccubusMistress,
    SuccubusSeducer,
    Vermin
} from "../../assets/creatures/inferno";
import {
    Archlich,
    Banshee,
    BoneDragon,
    Ghost,
    GhostDragon,
    Lich,
    LichMaster,
    PlagueZombie,
    Poltergeist,
    RotZombie,
    Skeleton,
    SkeletonArcher,
    SkeletonWarrior,
    SpectralDragon,
    Spectre,
    Vampire,
    VampireLord,
    VampirePrince,
    Wight,
    Wraith,
    Zombie
} from "../../assets/creatures/necropolis";
import {
    AncientTreant,
    ArcaneArcher,
    BladeDancer,
    CrystalDragon,
    Druid,
    DruidElder,
    Dryad,
    EmeraldDragon,
    GreenDragon,
    HighDruid,
    Hunter,
    MasterHunter,
    Pixie,
    PristineUnicorn,
    SavageTreant,
    SilverUnicorn,
    Sprite,
    Treant,
    Unicorn,
    WarDancer,
    WindDancer
} from "../../assets/creatures/sylvan";
import {
    Battlerager,
    BearRider,
    Berserker,
    BlackbearRider,
    Brawler,
    Defender,
    FireDragon,
    FlameLord,
    Harpooner,
    LavaDragon,
    MagmaDragon,
    MountainGuard,
    RuneKeeper,
    RunePatriarch,
    RunePriest,
    Shieldguard,
    Skirmisher,
    Spearwielder,
    Thane,
    ThunderThane,
    WhitebearRider
} from "../../assets/creatures/fortress";
import {
    BloodeyedCyclops,
    Centaur,
    CentaurMarauder,
    CentaurNomad,
    Chieftain,
    Cyclops,
    EarthDaughter,
    Executioner,
    FoulWyvern,
    Goblin,
    GoblinTrapper,
    GoblinWitchDoctor,
    Mauler,
    Paokai,
    Shaman,
    Slayer,
    SkyDaughter,
    UntamedCyclops,
    Warmonger,
    Warrior,
    Wyvern
} from "../../assets/creatures/stronghold";

export type TCreatures = {
    gameId: string;
    icon: string;
};

export const CREATURES: TCreatures[] = [
    {
        gameId: "1",
        icon: Peasant
    },
    {
        gameId: "2",
        icon: Conscript
    },
    {
        gameId: "3",
        icon: Archer
    },
    {
        gameId: "4",
        icon: Marksman
    },
    {
        gameId: "5",
        icon: Footman
    },
    {
        gameId: "6",
        icon: Squire
    },
    {
        gameId: "7",
        icon: Griffin
    },
    {
        gameId: "8",
        icon: RoyalGriffin
    },
    {
        gameId: "9",
        icon: Priest
    },
    {
        gameId: "10",
        icon: Inquisitor
    },
    {
        gameId: "11",
        icon: Cavalier
    },
    {
        gameId: "12",
        icon: Paladin
    },
    {
        gameId: "13",
        icon: Angel
    },
    {
        gameId: "14",
        icon: Archangel
    },
    {
        gameId: "15",
        icon: Imp
    },
    {
        gameId: "16",
        icon: Familiar
    },
    {
        gameId: "17",
        icon: HornedDemon
    },
    {
        gameId: "18",
        icon: HornedOverseer
    },
    {
        gameId: "19",
        icon: HellHound
    },
    {
        gameId: "20",
        icon: Cerberus
    },
    {
        gameId: "21",
        icon: Succubus
    },
    {
        gameId: "22",
        icon: SuccubusMistress
    },
    {
        gameId: "23",
        icon: HellCharger
    },
    {
        gameId: "24",
        icon: Nightmare
    },
    {
        gameId: "25",
        icon: PitFiend
    },
    {
        gameId: "26",
        icon: PitLord
    },
    {
        gameId: "27",
        icon: Devil
    },
    {
        gameId: "28",
        icon: ArchDevil
    },
    {
        gameId: "29",
        icon: Skeleton
    },
    {
        gameId: "30",
        icon: SkeletonArcher
    },
    {
        gameId: "31",
        icon: Zombie
    },
    {
        gameId: "32",
        icon: PlagueZombie
    },
    {
        gameId: "33",
        icon: Ghost
    },
    {
        gameId: "34",
        icon: Spectre
    },
    {
        gameId: "35",
        icon: Vampire
    },
    {
        gameId: "36",
        icon: VampireLord
    },
    {
        gameId: "37",
        icon: Lich
    },
    {
        gameId: "38",
        icon: Archlich
    },
    {
        gameId: "39",
        icon: Wight
    },
    {
        gameId: "40",
        icon: Wraith
    },
    {
        gameId: "41",
        icon: BoneDragon
    },
    {
        gameId: "42",
        icon: SpectralDragon
    },
    {
        gameId: "43",
        icon: Pixie
    },
    {
        gameId: "44",
        icon: Sprite
    },
    {
        gameId: "45",
        icon: BladeDancer
    },
    {
        gameId: "46",
        icon: WarDancer
    },
    {
        gameId: "47",
        icon: Hunter
    },
    {
        gameId: "48",
        icon: MasterHunter
    },
    {
        gameId: "49",
        icon: Druid
    },
    {
        gameId: "50",
        icon: DruidElder
    },
    {
        gameId: "51",
        icon: Unicorn
    },
    {
        gameId: "52",
        icon: SilverUnicorn
    },
    {
        gameId: "53",
        icon: Treant
    },
    {
        gameId: "54",
        icon: AncientTreant
    },
    {
        gameId: "55",
        icon: GreenDragon
    },
    {
        gameId: "56",
        icon: EmeraldDragon
    },
    {
        gameId: "57",
        icon: Gremlin
    },
    {
        gameId: "58",
        icon: MasterGremlin
    },
    {
        gameId: "59",
        icon: StoneGargoyle
    },
    {
        gameId: "60",
        icon: ObsidianGargoyle
    },
    {
        gameId: "61",
        icon: IronGolem
    },
    {
        gameId: "62",
        icon: SteelGolem
    },
    {
        gameId: "63",
        icon: Mage
    },
    {
        gameId: "64",
        icon: ArchMage
    },
    {
        gameId: "65",
        icon: Djinn
    },
    {
        gameId: "66",
        icon: DjinnSultan
    },
    {
        gameId: "67",
        icon: RakshasaRani
    },
    {
        gameId: "68",
        icon: RakshasaRaja
    },
    {
        gameId: "69",
        icon: Colossus
    },
    {
        gameId: "70",
        icon: Titan
    },
    {
        gameId: "71",
        icon: Scout
    },
    {
        gameId: "72",
        icon: Assassin
    },
    {
        gameId: "73",
        icon: BloodMaiden
    },
    {
        gameId: "74",
        icon: BloodFury
    },
    {
        gameId: "75",
        icon: Minotaur
    },
    {
        gameId: "76",
        icon: MinotaurGuard
    },
    {
        gameId: "77",
        icon: GrimRaider
    },
    {
        gameId: "78",
        icon: DarkRaider
    },
    {
        gameId: "79",
        icon: Hydra
    },
    {
        gameId: "80",
        icon: DeepHydra
    },
    {
        gameId: "81",
        icon: ShadowWitch
    },
    {
        gameId: "82",
        icon: ShadowMatriarch
    },
    {
        gameId: "83",
        icon: ShadowDragon
    },
    {
        gameId: "84",
        icon: BlackDragon
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
        gameId: "87",
        icon: EarthElemental
    },
    {
        gameId: "88",
        icon: AirElemental
    },
    {
        gameId: "90",
        icon: DeathKnight
    },
    {
        gameId: "91",
        icon: Phoenix
    },
    {
        gameId: "92",
        icon: Defender
    },
    {
        gameId: "93",
        icon: Shieldguard
    },
    {
        gameId: "94",
        icon: Spearwielder
    },
    {
        gameId: "95",
        icon: Skirmisher
    },
    {
        gameId: "96",
        icon: BearRider
    },
    {
        gameId: "97",
        icon: BlackbearRider
    },
    {
        gameId: "98",
        icon: Brawler
    },
    {
        gameId: "99",
        icon: Berserker
    },
    {
        gameId: "100",
        icon: RunePriest
    },
    {
        gameId: "101",
        icon: RunePatriarch
    },
    {
        gameId: "102",
        icon: Thane
    },
    {
        gameId: "103",
        icon: FlameLord
    },
    {
        gameId: "104",
        icon: FireDragon
    },
    {
        gameId: "105",
        icon: MagmaDragon
    },
    {
        gameId: "106",
        icon: Brute
    },
    {
        gameId: "107",
        icon: Crossbowman
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
        gameId: "110",
        icon: Zealot
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
        gameId: "113",
        icon: Wolf
    },
    {
        gameId: "115",
        icon: Manticore
    },
    {
        gameId: "116",
        icon: Mummy
    },
    {
        gameId: "117",
        icon: Goblin
    },
    {
        gameId: "118",
        icon: GoblinTrapper
    },
    {
        gameId: "119",
        icon: Centaur
    },
    {
        gameId: "120",
        icon: CentaurNomad
    },
    {
        gameId: "121",
        icon: Warrior
    },
    {
        gameId: "122",
        icon: Mauler
    },
    {
        gameId: "123",
        icon: Shaman
    },
    {
        gameId: "124",
        icon: SkyDaughter
    },
    {
        gameId: "125",
        icon: Slayer
    },
    {
        gameId: "126",
        icon: Executioner
    },
    {
        gameId: "127",
        icon: Wyvern
    },
    {
        gameId: "128",
        icon: FoulWyvern
    },
    {
        gameId: "129",
        icon: Cyclops
    },
    {
        gameId: "130",
        icon: UntamedCyclops
    },
    {
        gameId: "131",
        icon: Vermin
    },
    {
        gameId: "132",
        icon: HornedGrunt
    },
    {
        gameId: "133",
        icon: Firehound
    },
    {
        gameId: "134",
        icon: SuccubusSeducer
    },
    {
        gameId: "135",
        icon: HellStallion
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
        gameId: "138",
        icon: Stalker
    },
    {
        gameId: "139",
        icon: BloodSister
    },
    {
        gameId: "140",
        icon: MinotaurTaskmaster
    },
    {
        gameId: "141",
        icon: BriskRaider
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
        gameId: "144",
        icon: RedDragon
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
        gameId: "152",
        icon: SkeletonWarrior
    },
    {
        gameId: "153",
        icon: RotZombie
    },
    {
        gameId: "154",
        icon: Poltergeist
    },
    {
        gameId: "155",
        icon: VampirePrince
    },
    {
        gameId: "156",
        icon: LichMaster
    },
    {
        gameId: "157",
        icon: Banshee
    },
    {
        gameId: "158",
        icon: GhostDragon
    },
    {
        gameId: "159",
        icon: GremlinSaboteur
    },
    {
        gameId: "160",
        icon: ElementalGargoyle
    },
    {
        gameId: "161",
        icon: MagneticGolem
    },
    {
        gameId: "162",
        icon: BattleMage
    },
    {
        gameId: "163",
        icon: DjinnVizier
    },
    {
        gameId: "164",
        icon: RakshasaKshatra
    },
    {
        gameId: "165",
        icon: StormTitan
    },
    {
        gameId: "166",
        icon: MountainGuard
    },
    {
        gameId: "167",
        icon: Harpooner
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
        gameId: "170",
        icon: RuneKeeper
    },
    {
        gameId: "171",
        icon: ThunderThane
    },
    {
        gameId: "172",
        icon: LavaDragon
    },
    {
        gameId: "173",
        icon: GoblinWitchDoctor
    },
    {
        gameId: "174",
        icon: CentaurMarauder
    },
    {
        gameId: "175",
        icon: Warmonger
    },
    {
        gameId: "176",
        icon: EarthDaughter
    },
    {
        gameId: "177",
        icon: Chieftain
    },
    {
        gameId: "178",
        icon: Paokai
    },
    {
        gameId: "179",
        icon: BloodeyedCyclops
    },
];
