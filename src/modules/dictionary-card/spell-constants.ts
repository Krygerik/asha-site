import {
    Frenzy,
    Blindness,
    Slow,
    Vulnerability,
    CurseOfTheNetherworld,
    Confusion,
    Decay,
    Sorrow,
    PuppetMaster,
    Vampirism,
    Weakness,
    Suffering
} from "../../assets/spells/dark";
import {
    Armageddon,
    Implosion,
    Fireball,
    IceBolt,
    ChainLightning,
    LightningBolt,
    EldritchArrow,
    MeteorShower,
    CircleOfWinter,
    StoneSpikes,
    DeepFreeze,
    Firewall
} from "../../assets/spells/destructive";
import {
    Haste,
    MagicalImmunity,
    Cleansing,
    DivineStrength,
    DeflectMissile,
    RighteousMight,
    Regeneration,
    Resurrection,
    Endurance,
    Teleportation,
    WordOfLight,
    DivineVengeance
} from "../../assets/spells/light";
import {
    RuneOfBerserking,
    RuneOfBattleRage,
    RuneOfDragonform,
    RuneOfElementalImmunity,
    RuneOfCharge,
    RuneOfExorcism,
    RuneOfEtherealness,
    RuneOfMagicControl,
    RuneOfResurrection,
    RuneOfThunderclap
} from "../../assets/spells/rune";
import {
    Battlecry,
    RallingCry,
    CallOfBlood,
    FearMyRoar,
    HordesAnger,
    WordOfTheChief
} from "../../assets/spells/shout";
import {
    ArcaneCrystal,
    FireTrap,
    ArcaneArmor,
    FistOfWrath,
    PhantomForces,
    ConjurePhoenix,
    RaiseDead,
    SummonElementals,
    SummonHive,
    WaspSwarm,
    BladeBarrier,
    Earthquake
} from "../../assets/spells/summoning";

/**
 * Тип заклинания для отображения
 */
export type TSpell = {
    gameId: string;
    icon: string;
};

/**
 * Перечисление всех заклинаний
 */
export const SPELLS: TSpell[] = [
    {
        gameId: "1",
        icon: EldritchArrow
    },
    {
        gameId: "2",
        icon: FistOfWrath
    },
    {
        gameId: "3",
        icon: LightningBolt
    },
    {
        gameId: "4",
        icon: IceBolt
    },
    {
        gameId: "5",
        icon: Fireball
    },
    {
        gameId: "6",
        icon: CircleOfWinter
    },
    {
        gameId: "7",
        icon: ChainLightning
    },
    {
        gameId: "8",
        icon: MeteorShower
    },
    {
        gameId: "9",
        icon: Implosion
    },
    {
        gameId: "10",
        icon: Armageddon
    },
    {
        gameId: "11",
        icon: Weakness
    },
    {
        gameId: "12",
        icon: Slow
    },
    {
        gameId: "13",
        icon: Vulnerability
    },
    {
        gameId: "14",
        icon: Decay
    },
    {
        gameId: "15",
        icon: Suffering
    },
    {
        gameId: "17",
        icon: Confusion
    },
    {
        gameId: "18",
        icon: Frenzy
    },
    {
        gameId: "19",
        icon: Blindness
    },
    {
        gameId: "20",
        icon: PuppetMaster
    },
    {
        gameId: "21",
        icon: CurseOfTheNetherworld
    },
    {
        gameId: "23",
        icon: DivineStrength
    },
    {
        gameId: "24",
        icon: Haste
    },
    {
        gameId: "25",
        icon: Endurance
    },
    {
        gameId: "26",
        icon: Cleansing
    },
    {
        gameId: "28",
        icon: RighteousMight
    },
    {
        gameId: "29",
        icon: DeflectMissile
    },
    {
        gameId: "31",
        icon: MagicalImmunity
    },
    {
        gameId: "32",
        icon: Teleportation
    },
    {
        gameId: "34",
        icon: ArcaneArmor
    },
    {
        gameId: "35",
        icon: WordOfLight
    },
    {
        gameId: "38",
        icon: FireTrap
    },
    {
        gameId: "39",
        icon: WaspSwarm
    },
    {
        gameId: "40",
        icon: PhantomForces
    },
    {
        gameId: "41",
        icon: Earthquake
    },
    {
        gameId: "42",
        icon: RaiseDead
    },
    {
        gameId: "43",
        icon: SummonElementals
    },
    {
        gameId: "48",
        icon: Resurrection
    },
    {
        gameId: "210",
        icon: Weakness
    },
    {
        gameId: "211",
        icon: Vulnerability
    },
    {
        gameId: "212",
        icon: Slow
    },
    {
        gameId: "213",
        icon: Confusion
    },
    {
        gameId: "214",
        icon: Decay
    },
    {
        gameId: "215",
        icon: Suffering
    },
    {
        gameId: "216",
        icon: DivineStrength
    },
    {
        gameId: "217",
        icon: Cleansing
    },
    {
        gameId: "218",
        icon: Endurance
    },
    {
        gameId: "219",
        icon: DeflectMissile
    },
    {
        gameId: "220",
        icon: RighteousMight
    },
    {
        gameId: "221",
        icon: Haste
    },
    {
        gameId: "223",
        icon: EldritchArrow
    },
    {
        gameId: "224",
        icon: FistOfWrath
    },
    {
        gameId: "225",
        icon: LightningBolt
    },
    {
        gameId: "226",
        icon: IceBolt
    },
    {
        gameId: "227",
        icon: Fireball
    },
    {
        gameId: "228",
        icon: CircleOfWinter
    },
    {
        gameId: "229",
        icon: ChainLightning
    },
    {
        gameId: "230",
        icon: MeteorShower
    },
    {
        gameId: "231",
        icon: Implosion
    },
    {
        gameId: "232",
        icon: Armageddon
    },
    {
        gameId: "233",
        icon: StoneSpikes
    },
    {
        gameId: "235",
        icon: ConjurePhoenix
    },
    {
        gameId: "236",
        icon: Firewall
    },
    {
        gameId: "237",
        icon: StoneSpikes
    },
    {
        gameId: "249",
        icon: RuneOfCharge
    },
    {
        gameId: "250",
        icon: RuneOfBerserking
    },
    {
        gameId: "251",
        icon: RuneOfMagicControl
    },
    {
        gameId: "252",
        icon: RuneOfExorcism
    },
    {
        gameId: "253",
        icon: RuneOfElementalImmunity
    },
    {
        gameId: "254",
        icon: RuneOfThunderclap
    },
    {
        gameId: "255",
        icon: RuneOfBattleRage
    },
    {
        gameId: "256",
        icon: RuneOfEtherealness
    },
    {
        gameId: "257",
        icon: RuneOfResurrection
    },
    {
        gameId: "258",
        icon: RuneOfDragonform
    },
    {
        gameId: "277",
        icon: Sorrow
    },
    {
        gameId: "278",
        icon: Vampirism
    },
    {
        gameId: "279",
        icon: DeepFreeze
    },
    {
        gameId: "280",
        icon: Regeneration
    },
    {
        gameId: "281",
        icon: DivineVengeance
    },
    {
        gameId: "282",
        icon: ArcaneCrystal
    },
    {
        gameId: "283",
        icon: SummonHive
    },
    {
        gameId: "284",
        icon: BladeBarrier
    },
    {
        gameId: "285",
        icon: DeepFreeze
    },
    {
        gameId: "290",
        icon: RallingCry
    },
    {
        gameId: "291",
        icon: CallOfBlood
    },
    {
        gameId: "292",
        icon: WordOfTheChief
    },
    {
        gameId: "293",
        icon: FearMyRoar
    },
    {
        gameId: "294",
        icon: Battlecry
    },
    {
        gameId: "295",
        icon: HordesAnger
    },
];
