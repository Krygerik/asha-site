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
        gameId: "ID19",
        icon: logistics.Pathfinding
    },
    {
        gameId: "ID20",
        icon: logistics.Scouting
    },
    {
        gameId: "ID21",
        icon: logistics.Navigation
    },
    {
        gameId: "ID22",
        icon: warMachines.FirstAid
    },
    {
        gameId: "ID23",
        icon: warMachines.Ballista
    },
    {
        gameId: "ID24",
        icon: AmmoCart
    },
    {
        gameId: "ID25",
        icon: enlightenment.Intelligence
    },
    {
        gameId: "ID26",
        icon: enlightenment.Scholar
    },
    {
        gameId: "ID27",
        icon: enlightenment.ArcaneIntuition
    },
    {
        gameId: "ID28",
        icon: leadership.Recruitment
    },
    {
        gameId: "ID29",
        icon: leadership.Estates
    },
    {
        gameId: "ID30",
        icon: leadership.Diplomacy
    },
    {
        gameId: "ID31",
        icon: luck.MagicResistance
    },
    {
        gameId: "ID32",
        icon: luck.SoldiersLuck
    },
    {
        gameId: "ID33",
        icon: luck.Resourcefulness
    },
    {
        gameId: "ID34",
        icon: attack.Tactics
    },
    {
        gameId: "ID35",
        icon: attack.Shooting
    },
    {
        gameId: "ID36",
        icon: attack.BattleFrenzy
    },
    {
        gameId: "ID37",
        icon: defense.Reflection
    },
    {
        gameId: "ID38",
        icon: defense.Evasion
    },
    {
        gameId: "ID39",
        icon: defense.Persistence
    },
    {
        gameId: "ID40",
        icon: sorcery.ManaRegeneration
    },
    {
        gameId: "ID41",
        icon: sorcery.MagicInsight
    },
    {
        gameId: "ID42",
        icon: sorcery.ArcaneTraining
    },
    {
        gameId: "ID43",
        icon: destructiveMagic.MasterOfIce
    },
    {
        gameId: "ID44",
        icon: destructiveMagic.MasterOfFire
    },
    {
        gameId: "ID45",
        icon: destructiveMagic.MasterOfStorms
    },
    {
        gameId: "ID46",
        icon: darkMagic.MasterOfCurses
    },
    {
        gameId: "ID47",
        icon: darkMagic.MasterOfMind
    },
    {
        gameId: "ID48",
        icon: darkMagic.MasterOfPain
    },
    {
        gameId: "ID49",
        icon: lightMagic.MasterOfBlessings
    },
    {
        gameId: "ID50",
        icon: lightMagic.MasterOfAbjuration
    },
    {
        gameId: "ID51",
        icon: lightMagic.MasterOfWrath
    },
    {
        gameId: "ID52",
        icon: summoningMagic.MasterOfEarthblood
    },
    {
        gameId: "ID53",
        icon: summoningMagic.MasterOfConjuration
    },
    {
        gameId: "ID54",
        icon: summoningMagic.MasterOfLife
    },
    {
        gameId: "ID55",
        icon: haven.RetaliationStrike
    },
    {
        gameId: "ID56",
        icon: haven.Benediction
    },
    {
        gameId: "ID57",
        icon: haven.ExpertTrainer
    },
    {
        gameId: "ID58",
        icon: inferno.ConsumeCorpse
    },
    {
        gameId: "ID59",
        icon: inferno.Hellfire
    },
    {
        gameId: "ID60",
        icon: inferno.MarkOfTheDamned
    },
    {
        gameId: "ID62",
        icon: necropolis.EternalServitude
    },
    {
        gameId: "ID63",
        icon: necropolis.BansheeHowl
    },
    {
        gameId: "ID64",
        icon: sylvan.ShowerOfArrows
    },
    {
        gameId: "ID66",
        icon: sylvan.EnchantedArrow
    },
    {
        gameId: "ID67",
        icon: academy.MarkOfTheWizard
    },
    {
        gameId: "ID68",
        icon: academy.ConsumeArtifact
    },
    {
        gameId: "ID69",
        icon: academy.MagicMirror
    },
    {
        gameId: "ID70",
        icon: dungeon.EmpoweredSpells
    },
    {
        gameId: "ID71",
        icon: dungeon.DarkRitual
    },
    {
        gameId: "ID111",
        icon: dungeon.ElementalVision
    },
    {
        gameId: "ID73",
        icon: logistics.FamiliarGround
    },
    {
        gameId: "ID74",
        icon: warMachines.TripleBallista
    },
    {
        gameId: "ID75",
        icon: leadership.DivineGuidance
    },
    {
        gameId: "ID76",
        icon: attack.Retribution
    },
    {
        gameId: "ID78",
        icon: lightMagic.GuardianAngel
    },
    {
        gameId: "ID79",
        icon: enlightenment.Graduate
    },
    {
        gameId: "ID80",
        icon: luck.TearOfAshaVision
    },
    {
        gameId: "ID81",
        icon: sorcery.ArcaneExcellence
    },
    {
        gameId: "ID83",
        icon: darkMagic.FallenKnight
    },
    {
        gameId: "ID84",
        icon: summoningMagic.ElementalBalance
    },
    {
        gameId: "ID86",
        icon: logistics.SwiftGating
    },
    {
        gameId: "ID87",
        icon: enlightenment.ArcaneExaltation
    },
    {
        gameId: "ID89",
        icon: leadership.GateMaster
    },
    {
        gameId: "ID90",
        icon: luck.SwarmingGate
    },
    {
        gameId: "ID91",
        icon: attack.DevilsBlow
    },
    {
        gameId: "ID93",
        icon: sorcery.Soulfire
    },
    {
        gameId: "ID94",
        icon: destructiveMagic.SearingFires
    },
    {
        gameId: "ID95",
        icon: darkMagic.WeakeningStrike
    },
    {
        gameId: "ID96",
        icon: lightMagic.FireResistance
    },
    {
        gameId: "ID97",
        icon: summoningMagic.FireWarriors
    },
    {
        gameId: "ID100",
        icon: warMachines.PlagueTent
    },
    {
        gameId: "ID101",
        icon: enlightenment.LordOfTheUndead
    },
    {
        gameId: "ID102",
        icon: leadership.HeraldOfDeath
    },
    {
        gameId: "ID103",
        icon: luck.DeadMansCurse
    },
    {
        gameId: "ID104",
        icon: attack.ColdSteel
    },
    {
        gameId: "ID105",
        icon: defense.GraveCold
    },
    {
        gameId: "ID106",
        icon: sorcery.Boneward
    },
    {
        gameId: "ID107",
        icon: destructiveMagic.ColdDeath
    },
    {
        gameId: "ID108",
        icon: necropolis.MarkOfTheNecromancer
    },
    {
        gameId: "ID109",
        icon: lightMagic.Twilight
    },
    {
        gameId: "ID112",
        icon: logistics.SilentStalker
    },
    {
        gameId: "ID113",
        icon: warMachines.ImbueBallista
    },
    {
        gameId: "ID114",
        icon: sylvan.KnowYourEnemy
    },
    {
        gameId: "ID115",
        icon: leadership.BattleCommander
    },
    {
        gameId: "ID116",
        icon: luck.ElvenLuck
    },
    {
        gameId: "ID118",
        icon: defense.BattleToTheLast
    },
    {
        gameId: "ID119",
        icon: sorcery.ArcaneBrilliance
    },
    {
        gameId: "ID120",
        icon: destructiveMagic.ManaBurst
    },
    {
        gameId: "ID121",
        icon: darkMagic.CorruptedSoil
    },
    {
        gameId: "ID122",
        icon: lightMagic.StormWind
    },
    {
        gameId: "ID123",
        icon: summoningMagic.FogVeil
    },
    {
        gameId: "ID125",
        icon: logistics.MarchOfTheGolems
    },
    {
        gameId: "ID126",
        icon: warMachines.RemoteControl
    },
    {
        gameId: "ID127",
        icon: enlightenment.WizardsReward
    },
    {
        gameId: "ID129",
        icon: luck.SpoilsOfWar
    },
    {
        gameId: "ID130",
        icon: attack.FireArrows
    },
    {
        gameId: "ID131",
        icon: defense.Resistance
    },
    {
        gameId: "ID132",
        icon: sorcery.Counterspell
    },
    {
        gameId: "ID133",
        icon: destructiveMagic.SapMagic
    },
    {
        gameId: "ID134",
        icon: darkMagic.SealOfDarkness
    },
    {
        gameId: "ID135",
        icon: lightMagic.SuppressLight
    },
    {
        gameId: "ID136",
        icon: summoningMagic.Banish
    },
    {
        gameId: "ID138",
        icon: logistics.TeleportAssault
    },
    {
        gameId: "ID141",
        icon: leadership.AuraOfSwiftness
    },
    {
        gameId: "ID142",
        icon: luck.WarlocksLuck
    },
    {
        gameId: "ID143",
        icon: attack.SpeedMagic
    },
    {
        gameId: "ID144",
        icon: defense.StoneStrength
    },
    {
        gameId: "ID146",
        icon: destructiveMagic.SecretsOfDestruction
    },
    {
        gameId: "ID148",
        icon: lightMagic.RefinedMana
    },
    {
        gameId: "ID149",
        icon: summoningMagic.Exorcism
    },
    {
        gameId: "ID152",
        icon: fortress.RefreshRune
    },
    {
        gameId: "ID153",
        icon: fortress.GreaterRune
    },
    {
        gameId: "ID154",
        icon: fortress.FineRune
    },
    {
        gameId: "ID155",
        icon: logistics.SwiftMind
    },
    {
        gameId: "ID156",
        icon: warMachines.RunicMachines
    },
    {
        gameId: "ID157",
        icon: enlightenment.TapRunes
    },
    {
        gameId: "ID158",
        icon: leadership.RunicAttunement
    },
    {
        gameId: "ID159",
        icon: luck.DwarvenLuck
    },
    {
        gameId: "ID160",
        icon: attack.AttackingHird
    },
    {
        gameId: "ID161",
        icon: defense.DefensiveHird
    },
    {
        gameId: "ID162",
        icon: sorcery.Distract
    },
    {
        gameId: "ID163",
        icon: destructiveMagic.Ignite
    },
    {
        gameId: "ID164",
        icon: darkMagic.ShrugDarkness
    },
    {
        gameId: "ID165",
        icon: lightMagic.EternalLight
    },
    {
        gameId: "ID166",
        icon: summoningMagic.RunicArmour
    },
    {
        gameId: "ID168",
        icon: logistics.Snatch
    },
    {
        gameId: "ID169",
        icon: enlightenment.Mentoring
    },
    {
        gameId: "ID170",
        icon: leadership.Empathy
    },
    {
        gameId: "ID171",
        icon: defense.Readiness
    },
    {
        gameId: "ID173",
        icon: stronghold.MightOverMagic
    },
    {
        gameId: "ID174",
        icon: stronghold.MemoryOfOurBlood
    },
    {
        gameId: "ID175",
        icon: stronghold.PowerfulBlow
    },
    {
        gameId: "ID177",
        icon: logistics.Warpath
    },
    {
        gameId: "ID178",
        icon: leadership.BattleElation
    },
    {
        gameId: "ID179",
        icon: luck.LuckOfTheBarbarian
    },
    {
        gameId: "ID180",
        icon: attack.StunningBlow
    },
    {
        gameId: "ID181",
        icon: defense.ProtectUsAll
    },
    {
        gameId: "ID184",
        icon: enlightenment.Bloodfire
    },
    {
        gameId: "ID185",
        icon: enlightenment.BattleLore
    },
    {
        gameId: "ID186",
        icon: enlightenment.Stamina
    },
    {
        gameId: "ID188",
        icon: shout.ShoutTraining
    },
    {
        gameId: "ID189",
        icon: shout.MightyShout
    },
    {
        gameId: "ID190",
        icon: shout.ShoutOfRage
    },
    {
        gameId: "ID192",
        icon: shatterDestruction.CorruptDestruction
    },
    {
        gameId: "ID193",
        icon: shatterDestruction.WeakenDestruction
    },
    {
        gameId: "ID194",
        icon: shatterDestruction.DetainDestruction
    },
    {
        gameId: "ID196",
        icon: shatterDark.CorruptDark
    },
    {
        gameId: "ID197",
        icon: shatterDark.WeakenDark
    },
    {
        gameId: "ID198",
        icon: shatterDark.DetainDark
    },
    {
        gameId: "ID200",
        icon: shatterLight.CorruptLight
    },
    {
        gameId: "ID201",
        icon: shatterLight.WeakenLight
    },
    {
        gameId: "ID202",
        icon: shatterLight.DetainLight
    },
    {
        gameId: "ID204",
        icon: shatterSummoning.CorruptSummoning
    },
    {
        gameId: "ID205",
        icon: shatterSummoning.WeakenSummoning
    },
    {
        gameId: "ID206",
        icon: shatterSummoning.DetainSummoning
    },
    {
        gameId: "ID207",
        icon: shatterSummoning.BackToTheVoid
    },
    {
        gameId: "ID209",
        icon: darkMagic.WeakeningStrike
    },
    {
        gameId: "ID210",
        icon: darkMagic.CorruptedSoil
    },
    {
        gameId: "ID211",
        icon: summoningMagic.FogVeil
    },
    {
        gameId: "ID212",
        icon: enlightenment.Intelligence
    },
    {
        gameId: "ID213",
        icon: sorcery.ManaRegeneration
    },
    {
        gameId: "ID214",
        icon: lightMagic.RefinedMana
    },
    {
        gameId: "ID215",
        icon: lightMagic.StormWind
    }
];