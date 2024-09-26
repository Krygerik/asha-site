import * as logistics from "../../assets/perks/logistics";
import * as warMachines from "../../assets/perks/war-machines";
import {AmmoCart} from "../../assets/war-machines";
import * as enlightenment from "../../assets/perks/enlightenment";
import * as leadership from "../../assets/perks/leadership";
import * as luck from "../../assets/perks/luck";
import * as attack from "../../assets/perks/attack";
import * as defense from "../../assets/perks/defense";
import * as sorcery from "../../assets/perks/sorcery";
import * as destructiveMagic from "../../assets/perks/destructive-magic";
import * as darkMagic from "../../assets/perks/dark-magic";
import * as lightMagic from "../../assets/perks/light-magic";
import * as summoningMagic from "../../assets/perks/summoning-magic";
import * as haven from "../../assets/perks/haven";
import * as inferno from "../../assets/perks/inferno";
import * as necropolis from "../../assets/perks/necropolis";
import * as sylvan from "../../assets/perks/sylvan";
import * as academy from "../../assets/perks/academy";
import * as dungeon from "../../assets/perks/dungeon";
import * as fortress from "../../assets/perks/fortress";
import * as stronghold from "../../assets/perks/stronghold";
import * as shout from "../../assets/perks/shout";
import * as shatterDestruction from "../../assets/perks/shatter-destruction";
import * as shatterDark from "../../assets/perks/shatter-dark";
import * as shatterLight from "../../assets/perks/shatter-light";
import * as shatterSummoning from "../../assets/perks/shatter-summoning";

export type TPerk = {
    gameId: string;
    icon: string;
};

export const PERKS: TPerk[] = [
    {
        gameId: "19",
        icon: logistics.Pathfinding
    },
    {
        gameId: "20",
        icon: logistics.Scouting
    },
    {
        gameId: "21",
        icon: logistics.Navigation
    },
    {
        gameId: "22",
        icon: warMachines.FirstAid
    },
    {
        gameId: "23",
        icon: warMachines.Ballista
    },
    {
        gameId: "24",
        icon: AmmoCart
    },
    {
        gameId: "25",
        icon: enlightenment.Intelligence
    },
    {
        gameId: "26",
        icon: enlightenment.Scholar
    },
    {
        gameId: "27",
        icon: enlightenment.ArcaneIntuition
    },
    {
        gameId: "28",
        icon: leadership.Recruitment
    },
    {
        gameId: "29",
        icon: leadership.Estates
    },
    {
        gameId: "30",
        icon: leadership.Diplomacy
    },
    {
        gameId: "31",
        icon: luck.MagicResistance
    },
    {
        gameId: "32",
        icon: luck.SoldiersLuck
    },
    {
        gameId: "33",
        icon: luck.Resourcefulness
    },
    {
        gameId: "34",
        icon: attack.Tactics
    },
    {
        gameId: "35",
        icon: attack.Shooting
    },
    {
        gameId: "36",
        icon: attack.BattleFrenzy
    },
    {
        gameId: "37",
        icon: defense.Reflection
    },
    {
        gameId: "38",
        icon: defense.Evasion
    },
    {
        gameId: "39",
        icon: defense.Persistence
    },
    {
        gameId: "40",
        icon: sorcery.ManaRegeneration
    },
    {
        gameId: "41",
        icon: sorcery.MagicInsight
    },
    {
        gameId: "42",
        icon: sorcery.ArcaneTraining
    },
    {
        gameId: "43",
        icon: destructiveMagic.MasterOfIce
    },
    {
        gameId: "44",
        icon: destructiveMagic.MasterOfFire
    },
    {
        gameId: "45",
        icon: destructiveMagic.MasterOfStorms
    },
    {
        gameId: "46",
        icon: darkMagic.MasterOfCurses
    },
    {
        gameId: "47",
        icon: darkMagic.MasterOfMind
    },
    {
        gameId: "48",
        icon: darkMagic.MasterOfPain
    },
    {
        gameId: "49",
        icon: lightMagic.MasterOfBlessings
    },
    {
        gameId: "50",
        icon: lightMagic.MasterOfAbjuration
    },
    {
        gameId: "51",
        icon: lightMagic.MasterOfWrath
    },
    {
        gameId: "52",
        icon: summoningMagic.MasterOfEarthblood
    },
    {
        gameId: "53",
        icon: summoningMagic.MasterOfConjuration
    },
    {
        gameId: "54",
        icon: summoningMagic.MasterOfLife
    },
    {
        gameId: "55",
        icon: haven.RetaliationStrike
    },
    {
        gameId: "56",
        icon: haven.Benediction
    },
    {
        gameId: "57",
        icon: haven.ExpertTrainer
    },
    {
        gameId: "58",
        icon: inferno.ConsumeCorpse
    },
    {
        gameId: "59",
        icon: inferno.Hellfire
    },
    {
        gameId: "60",
        icon: inferno.MarkOfTheDamned
    },
    {
        gameId: "62",
        icon: necropolis.EternalServitude
    },
    {
        gameId: "63",
        icon: necropolis.BansheeHowl
    },
    {
        gameId: "64",
        icon: sylvan.ShowerOfArrows
    },
    {
        gameId: "66",
        icon: sylvan.EnchantedArrow
    },
    {
        gameId: "65",
        icon: sylvan.DeadeyeShot
    },
    {
        gameId: "67",
        icon: academy.MarkOfTheWizard
    },
    {
        gameId: "68",
        icon: academy.ConsumeArtifact
    },
    {
        gameId: "69",
        icon: academy.MagicMirror
    },
    {
        gameId: "70",
        icon: dungeon.EmpoweredSpells
    },
    {
        gameId: "71",
        icon: dungeon.DarkRitual
    },
    {
        gameId: "72",
        icon: dungeon.ElementalVision
    },
    {
        gameId: "73",
        icon: logistics.FamiliarGround
    },
    {
        gameId: "74",
        icon: warMachines.TripleBallista
    },
    {
        gameId: "75",
        icon: leadership.DivineGuidance
    },
    {
        gameId: "128",
        icon: leadership.ArtificalGlory
    },
    {
        gameId: "HRTA-Ammo-Cart",
        icon: warMachines.AmmoCart
    },
    {
        gameId: "76",
        icon: attack.Retribution
    },
    {
        gameId: "78",
        icon: lightMagic.GuardianAngel
    },
    {
        gameId: "79",
        icon: enlightenment.Graduate
    },
    {
        gameId: "80",
        icon: luck.TearOfAshaVision
    },
    {
        gameId: "81",
        icon: sorcery.ArcaneExcellence
    },
    {
        gameId: "83",
        icon: darkMagic.FallenKnight
    },
    {
        gameId: "84",
        icon: summoningMagic.ElementalBalance
    },
    {
        gameId: "86",
        icon: logistics.SwiftGating
    },
    {
        gameId: "87",
        icon: enlightenment.ArcaneExaltation
    },
    {
        gameId: "89",
        icon: leadership.GateMaster
    },
    {
        gameId: "90",
        icon: luck.SwarmingGate
    },
    {
        gameId: "91",
        icon: attack.DevilsBlow
    },
    {
        gameId: "93",
        icon: sorcery.Soulfire
    },
    {
        gameId: "94",
        icon: destructiveMagic.SearingFires
    },
    {
        gameId: "95",
        icon: darkMagic.WeakeningStrike
    },
    {
        gameId: "96",
        icon: lightMagic.FireResistance
    },
    {
        gameId: "97",
        icon: summoningMagic.FireWarriors
    },
    {
        gameId: "100",
        icon: warMachines.PlagueTent
    },
    {
        gameId: "101",
        icon: enlightenment.LordOfTheUndead
    },
    {
        gameId: "102",
        icon: leadership.HeraldOfDeath
    },
    {
        gameId: "103",
        icon: luck.DeadMansCurse
    },
    {
        gameId: "104",
        icon: attack.ColdSteel
    },
    {
        gameId: "105",
        icon: defense.GraveCold
    },
    {
        gameId: "106",
        icon: sorcery.Boneward
    },
    {
        gameId: "107",
        icon: destructiveMagic.ColdDeath
    },
    {
        gameId: "108",
        icon: necropolis.MarkOfTheNecromancer
    },
    {
        gameId: "109",
        icon: lightMagic.Twilight
    },
    {
        gameId: "112",
        icon: logistics.SilentStalker
    },
    {
        gameId: "113",
        icon: warMachines.ImbueBallista
    },
    {
        gameId: "114",
        icon: sylvan.KnowYourEnemy
    },
    {
        gameId: "115",
        icon: leadership.BattleCommander
    },
    {
        gameId: "116",
        icon: luck.ElvenLuck
    },
    {
        gameId: "118",
        icon: defense.BattleToTheLast
    },
    {
        gameId: "119",
        icon: sorcery.ArcaneBrilliance
    },
    {
        gameId: "120",
        icon: destructiveMagic.ManaBurst
    },
    {
        gameId: "121",
        icon: darkMagic.CorruptedSoil
    },
    {
        gameId: "122",
        icon: lightMagic.StormWind
    },
    {
        gameId: "123",
        icon: summoningMagic.FogVeil
    },
    {
        gameId: "125",
        icon: logistics.MarchOfTheGolems
    },
    {
        gameId: "126",
        icon: warMachines.RemoteControl
    },
    {
        gameId: "127",
        icon: enlightenment.WizardsReward
    },
    {
        gameId: "129",
        icon: luck.SpoilsOfWar
    },
    {
        gameId: "130",
        icon: attack.FireArrows
    },
    {
        gameId: "131",
        icon: defense.Resistance
    },
    {
        gameId: "132",
        icon: sorcery.Counterspell
    },
    {
        gameId: "133",
        icon: destructiveMagic.SapMagic
    },
    {
        gameId: "134",
        icon: darkMagic.SealOfDarkness
    },
    {
        gameId: "135",
        icon: lightMagic.SuppressLight
    },
    {
        gameId: "136",
        icon: summoningMagic.Banish
    },
    {
        gameId: "138",
        icon: logistics.TeleportAssault
    },
    {
        gameId: "141",
        icon: leadership.AuraOfSwiftness
    },
    {
        gameId: "142",
        icon: luck.WarlocksLuck
    },
    {
        gameId: "143",
        icon: attack.SpeedMagic
    },
    {
        gameId: "144",
        icon: defense.StoneStrength
    },
    {
        gameId: "146",
        icon: destructiveMagic.SecretsOfDestruction
    },
    {
        gameId: "148",
        icon: lightMagic.RefinedMana
    },
    {
        gameId: "149",
        icon: summoningMagic.Exorcism
    },
    {
        gameId: "152",
        icon: fortress.RefreshRune
    },
    {
        gameId: "153",
        icon: fortress.GreaterRune
    },
    {
        gameId: "154",
        icon: fortress.FineRune
    },
    {
        gameId: "155",
        icon: logistics.SwiftMind
    },
    {
        gameId: "156",
        icon: warMachines.RunicMachines
    },
    {
        gameId: "157",
        icon: enlightenment.TapRunes
    },
    {
        gameId: "158",
        icon: leadership.RunicAttunement
    },
    {
        gameId: "159",
        icon: luck.DwarvenLuck
    },
    {
        gameId: "160",
        icon: attack.AttackingHird
    },
    {
        gameId: "161",
        icon: defense.DefensiveHird
    },
    {
        gameId: "162",
        icon: sorcery.Distract
    },
    {
        gameId: "163",
        icon: destructiveMagic.Ignite
    },
    {
        gameId: "164",
        icon: darkMagic.ShrugDarkness
    },
    {
        gameId: "165",
        icon: lightMagic.EternalLight
    },
    {
        gameId: "166",
        icon: summoningMagic.RunicArmour
    },
    {
        gameId: "168",
        icon: logistics.Snatch
    },
    {
        gameId: "169",
        icon: enlightenment.Mentoring
    },
    {
        gameId: "170",
        icon: leadership.Empathy
    },
    {
        gameId: "171",
        icon: defense.Readiness
    },
    {
        gameId: "173",
        icon: stronghold.MightOverMagic
    },
    {
        gameId: "174",
        icon: stronghold.MemoryOfOurBlood
    },
    {
        gameId: "175",
        icon: stronghold.PowerfulBlow
    },
    {
        gameId: "177",
        icon: logistics.Warpath
    },
    {
        gameId: "178",
        icon: leadership.BattleElation
    },
    {
        gameId: "179",
        icon: luck.LuckOfTheBarbarian
    },
    {
        gameId: "180",
        icon: attack.StunningBlow
    },
    {
        gameId: "181",
        icon: defense.ProtectUsAll
    },
    {
        gameId: "184",
        icon: enlightenment.Bloodfire
    },
    {
        gameId: "185",
        icon: enlightenment.BattleLore
    },
    {
        gameId: "186",
        icon: enlightenment.Stamina
    },
    {
        gameId: "188",
        icon: shout.ShoutTraining
    },
    {
        gameId: "189",
        icon: shout.MightyShout
    },
    {
        gameId: "190",
        icon: shout.ShoutOfRage
    },
    {
        gameId: "192",
        icon: shatterDestruction.CorruptDestruction
    },
    {
        gameId: "193",
        icon: shatterDestruction.WeakenDestruction
    },
    {
        gameId: "194",
        icon: shatterDestruction.DetainDestruction
    },
    {
        gameId: "196",
        icon: shatterDark.CorruptDark
    },
    {
        gameId: "197",
        icon: shatterDark.WeakenDark
    },
    {
        gameId: "198",
        icon: shatterDark.DetainDark
    },
    {
        gameId: "200",
        icon: shatterLight.CorruptLight
    },
    {
        gameId: "201",
        icon: shatterLight.WeakenLight
    },
    {
        gameId: "202",
        icon: shatterLight.DetainLight
    },
    {
        gameId: "204",
        icon: shatterSummoning.CorruptSummoning
    },
    {
        gameId: "205",
        icon: shatterSummoning.WeakenSummoning
    },
    {
        gameId: "206",
        icon: shatterSummoning.DetainSummoning
    },
    {
        gameId: "207",
        icon: shatterSummoning.BackToTheVoid
    },
    {
        gameId: "209",
        icon: darkMagic.WeakeningStrike
    },
    {
        gameId: "210",
        icon: darkMagic.CorruptedSoil
    },
    {
        gameId: "211",
        icon: summoningMagic.FogVeil
    },
    {
        gameId: "212",
        icon: enlightenment.Intelligence
    },
    {
        gameId: "213",
        icon: sorcery.ManaRegeneration
    },
    {
        gameId: "214",
        icon: lightMagic.RefinedMana
    },
    {
        gameId: "215",
        icon: lightMagic.StormWind
    },
    {
        gameId: "HRTA-Wizarding-Protection",
        icon: sorcery.ArcaneProtection
    },
    {
        gameId: "HRTA-Astrology",
        icon: enlightenment.Astrology
    },
    {
        gameId: "216",
        icon: lightMagic.FireResistance
    },
    {
        gameId: "217",
        icon: destructiveMagic.ManaBurst
    },
    {
        gameId: "218",
        icon: sorcery.Distract
    },
    {
        gameId: "219",
        icon: sorcery.ArcaneBrilliance
    },
    {
        gameId: "220",
        icon: enlightenment.Mentoring
    },
    /*
     Темное откровение-219
     */
];