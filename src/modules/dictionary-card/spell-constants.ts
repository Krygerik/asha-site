import {
    BerserkIcon,
    BlindnessIcon,
    DecelerationIcon,
    DestructiveBeamIcon,
    DistractionIcon,
    PlagueIcon,
    SorrowIcon,
    SubordinationIcon,
    VampirismIcon,
    WeakeningIcon,
    WeaknessIcon
} from "../../assets/spells/dark";
import {
    ArmageddonIcon,
    EarthShockIcon,
    FireballIcon,
    IceBlockIcon,
    LightningChainIcon,
    LightningIcon,
    MagicArrowIcon,
    MeteorRainIcon,
    RingOfColdIcon,
    StoneThornsIcon,
    StoppingColdIcon,
    WallOfFireIcon
} from "../../assets/spells/destructive";
import {
    AccelerationIcon,
    AntiMagicIcon,
    DisenchantmentIcon,
    DivinePowerIcon,
    EvasionIcon,
    PunishingBlowIcon,
    RegenerationIcon,
    ResurrectionIcon,
    StoneSkinIcon,
    TeleportIcon
} from "../../assets/spells/light";
import {
    BerserkRuneIcon,
    RuneOfBattleFuryIcon,
    RuneOfDragonFormIcon,
    RuneOfElementalImmunityIcon,
    RuneOfEnergyIcon,
    RuneOfExorcismIcon,
    RuneOfIntangibilityIcon,
    RuneOfMagicalSupervisionIcon,
    RuneOfResurrectionIcon,
    RuneOfRollingThunderIcon
} from "../../assets/spells/rune";
import {
    BattleCryIcon,
    BuildableCryIcon,
    CallOfBloodIcon,
    FrighteningRoarIcon,
    FuryOfTheHordeIcon,
    TheWordOfTheLeaderIcon
} from "../../assets/spells/shout";
import {
    CrystalOfTheSecretIcon,
    FireTrapIcon,
    HeavenlyShieldIcon,
    MagicFistIcon,
    PhantomCreationIcon,
    PhoenixSummonIcon,
    RaisingTheDeadIcon,
    SummonElementalsIcon,
    SummonTheHiveIcon,
    SummonWaspSwarmIcon,
    WallOfSwordsIcon
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
        gameId: "18",
        icon: BerserkIcon,
    },
    {
        gameId: "278",
        icon: VampirismIcon,
    },
    {
        gameId: "12",
        icon: DecelerationIcon,
    },
    {
        gameId: "212",
        icon: DecelerationIcon,
    },
    {
        gameId: "15",
        icon: WeaknessIcon,
    },
    {
        gameId: "215",
        icon: WeaknessIcon,
    },
    {
        gameId: "11",
        icon: WeakeningIcon,
    },
    {
        gameId: "210",
        icon: WeakeningIcon,
    },
    {
        gameId: "19",
        icon: BlindnessIcon,
    },
    {
        gameId: "20",
        icon: SubordinationIcon,
    },
    {
        gameId: "13",
        icon: DestructiveBeamIcon,
    },
    {
        gameId: "211",
        icon: DestructiveBeamIcon,
    },
    {
        gameId: "17",
        icon: DistractionIcon,
    },
    {
        gameId: "213",
        icon: DistractionIcon,
    },
    {
        gameId: "277",
        icon: SorrowIcon,
    },
    {
        gameId: "14",
        icon: PlagueIcon,
    },
    {
        gameId: "214",
        icon: PlagueIcon,
    },
    {
        gameId: "10",
        icon: ArmageddonIcon,
    },
    {
        gameId: "232",
        icon: ArmageddonIcon,
    },
    {
        gameId: "237",
        icon: StoneThornsIcon,
    },
    {
        gameId: "233",
        icon: StoneThornsIcon,
    },
    {
        gameId: "6",
        icon: RingOfColdIcon,
    },
    {
        gameId: "228",
        icon: RingOfColdIcon,
    },
    {
        gameId: "4",
        icon: IceBlockIcon,
    },
    {
        gameId: "226",
        icon: IceBlockIcon,
    },
    {
        gameId: "1",
        icon: MagicArrowIcon,
    },
    {
        gameId: "223",
        icon: MagicArrowIcon,
    },
    {
        gameId: "8",
        icon: MeteorRainIcon,
    },
    {
        gameId: "230",
        icon: MeteorRainIcon,
    },
    {
        gameId: "3",
        icon: LightningIcon,
    },
    {
        gameId: "225",
        icon: LightningIcon,
    },
    {
        gameId: "5",
        icon: FireballIcon,
    },
    {
        gameId: "227",
        icon: FireballIcon,
    },
    {
        gameId: "279",
        icon: StoppingColdIcon,
    },
    {
        gameId: "285",
        icon: StoppingColdIcon,
    },
    {
        gameId: "236",
        icon: WallOfFireIcon,
    },
    {
        gameId: "7",
        icon: LightningChainIcon,
    },
    {
        gameId: "229",
        icon: LightningChainIcon,
    },
    {
        gameId: "9",
        icon: EarthShockIcon,
    },
    {
        gameId: "31",
        icon: AntiMagicIcon,
    },
    {
        gameId: "23",
        icon: DivinePowerIcon,
    },
    {
        gameId: "216",
        icon: DivinePowerIcon,
    },
    {
        gameId: "48",
        icon: ResurrectionIcon,
    },
    {
        gameId: "25",
        icon: StoneSkinIcon,
    },
    {
        gameId: "218",
        icon: StoneSkinIcon,
    },
    {
        gameId: "28",
        icon: PunishingBlowIcon,
    },
    {
        gameId: "220",
        icon: PunishingBlowIcon,
    },
    {
        gameId: "280",
        icon: RegenerationIcon,
    },
    {
        gameId: "26",
        icon: DisenchantmentIcon,
    },
    {
        gameId: "217",
        icon: DisenchantmentIcon,
    },
    {
        gameId: "32",
        icon: TeleportIcon,
    },
    {
        gameId: "29",
        icon: EvasionIcon,
    },
    {
        gameId: "219",
        icon: EvasionIcon,
    },
    {
        gameId: "24",
        icon: AccelerationIcon,
    },
    {
        gameId: "221",
        icon: AccelerationIcon,
    },
    {
        gameId: "250",
        icon: BerserkRuneIcon,
    },
    {
        gameId: "255",
        icon: RuneOfBattleFuryIcon,
    },
    {
        gameId: "257",
        icon: RuneOfResurrectionIcon,
    },
    {
        gameId: "254",
        icon: RuneOfRollingThunderIcon,
    },
    {
        gameId: "258",
        icon: RuneOfDragonFormIcon,
    },
    {
        gameId: "251",
        icon: RuneOfMagicalSupervisionIcon,
    },
    {
        gameId: "256",
        icon: RuneOfIntangibilityIcon,
    },
    {
        gameId: "253",
        icon: RuneOfElementalImmunityIcon,
    },
    {
        gameId: "252",
        icon: RuneOfExorcismIcon,
    },
    {
        gameId: "249",
        icon: RuneOfEnergyIcon,
    },
    {
        gameId: "294",
        icon: BattleCryIcon,
    },
    {
        gameId: "291",
        icon: CallOfBloodIcon,
    },
    {
        gameId: "293",
        icon: FrighteningRoarIcon,
    },
    {
        gameId: "290",
        icon: BuildableCryIcon,
    },
    {
        gameId: "292",
        icon: TheWordOfTheLeaderIcon,
    },
    {
        gameId: "295",
        icon: FuryOfTheHordeIcon,
    },
    {
        gameId: "2",
        icon: MagicFistIcon,
    },
    {
        gameId: "224",
        icon: MagicFistIcon,
    },
    {
        gameId: "282",
        icon: CrystalOfTheSecretIcon,
    },
    {
        gameId: "34",
        icon: HeavenlyShieldIcon,
    },
    {
        gameId: "38",
        icon: FireTrapIcon,
    },
    {
        gameId: "42",
        icon: RaisingTheDeadIcon,
    },
    {
        gameId: "39",
        icon: SummonWaspSwarmIcon,
    },
    {
        gameId: "283",
        icon: SummonTheHiveIcon,
    },
    {
        gameId: "235",
        icon: PhoenixSummonIcon,
    },
    {
        gameId: "43",
        icon: SummonElementalsIcon,
    },
    {
        gameId: "40",
        icon: PhantomCreationIcon,
    },
    {
        gameId: "284",
        icon: WallOfSwordsIcon,
    },
];
