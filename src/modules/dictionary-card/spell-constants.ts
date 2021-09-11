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
    gameId: string[];
    icon: string;
};

/**
 * Перечисление всех заклинаний
 */
export const SPELLS: TSpell[] = [
    {
        gameId: ["ID18"],
        icon: BerserkIcon,
    },
    {
        gameId: ["ID278"],
        icon: VampirismIcon,
    },
    {
        gameId: ["ID12"],
        icon: DecelerationIcon,
    },
    {
        gameId: ["ID212"],
        icon: DecelerationIcon,
    },
    {
        gameId: ["ID15"],
        icon: WeaknessIcon,
    },
    {
        gameId: ["ID215"],
        icon: WeaknessIcon,
    },
    {
        gameId: ["ID11"],
        icon: WeakeningIcon,
    },
    {
        gameId: ["ID210"],
        icon: WeakeningIcon,
    },
    {
        gameId: ["ID19"],
        icon: BlindnessIcon,
    },
    {
        gameId: ["ID20"],
        icon: SubordinationIcon,
    },
    {
        gameId: ["ID13"],
        icon: DestructiveBeamIcon,
    },
    {
        gameId: ["ID211"],
        icon: DestructiveBeamIcon,
    },
    {
        gameId: ["ID17"],
        icon: DistractionIcon,
    },
    {
        gameId: ["ID213"],
        icon: DistractionIcon,
    },
    {
        gameId: ["ID277"],
        icon: SorrowIcon,
    },
    {
        gameId: ["ID14"],
        icon: PlagueIcon,
    },
    {
        gameId: ["ID214"],
        icon: PlagueIcon,
    },
    {
        gameId: ["ID10"],
        icon: ArmageddonIcon,
    },
    {
        gameId: ["ID232"],
        icon: ArmageddonIcon,
    },
    {
        gameId: ["ID237"],
        icon: StoneThornsIcon,
    },
    {
        gameId: ["ID233"],
        icon: StoneThornsIcon,
    },
    {
        gameId: ["ID6"],
        icon: RingOfColdIcon,
    },
    {
        gameId: ["ID228"],
        icon: RingOfColdIcon,
    },
    {
        gameId: ["ID4"],
        icon: IceBlockIcon,
    },
    {
        gameId: ["ID226"],
        icon: IceBlockIcon,
    },
    {
        gameId: ["ID1"],
        icon: MagicArrowIcon,
    },
    {
        gameId: ["ID223"],
        icon: MagicArrowIcon,
    },
    {
        gameId: ["ID8"],
        icon: MeteorRainIcon,
    },
    {
        gameId: ["ID230"],
        icon: MeteorRainIcon,
    },
    {
        gameId: ["ID3"],
        icon: LightningIcon,
    },
    {
        gameId: ["ID225"],
        icon: LightningIcon,
    },
    {
        gameId: ["ID5"],
        icon: FireballIcon,
    },
    {
        gameId: ["ID227"],
        icon: FireballIcon,
    },
    {
        gameId: ["ID279"],
        icon: StoppingColdIcon,
    },
    {
        gameId: ["ID285"],
        icon: StoppingColdIcon,
    },
    {
        gameId: ["ID236"],
        icon: WallOfFireIcon,
    },
    {
        gameId: ["ID7"],
        icon: LightningChainIcon,
    },
    {
        gameId: ["ID229"],
        icon: LightningChainIcon,
    },
    {
        gameId: ["ID9"],
        icon: EarthShockIcon,
    },
    {
        gameId: ["ID31"],
        icon: AntiMagicIcon,
    },
    {
        gameId: ["ID23"],
        icon: DivinePowerIcon,
    },
    {
        gameId: ["ID216"],
        icon: DivinePowerIcon,
    },
    {
        gameId: ["ID48"],
        icon: ResurrectionIcon,
    },
    {
        gameId: ["ID25"],
        icon: StoneSkinIcon,
    },
    {
        gameId: ["ID218"],
        icon: StoneSkinIcon,
    },
    {
        gameId: ["ID28"],
        icon: PunishingBlowIcon,
    },
    {
        gameId: ["ID220"],
        icon: PunishingBlowIcon,
    },
    {
        gameId: ["ID280"],
        icon: RegenerationIcon,
    },
    {
        gameId: ["ID26"],
        icon: DisenchantmentIcon,
    },
    {
        gameId: ["ID217"],
        icon: DisenchantmentIcon,
    },
    {
        gameId: ["ID32"],
        icon: TeleportIcon,
    },
    {
        gameId: ["ID29"],
        icon: EvasionIcon,
    },
    {
        gameId: ["ID219"],
        icon: EvasionIcon,
    },
    {
        gameId: ["ID24"],
        icon: AccelerationIcon,
    },
    {
        gameId: ["ID221"],
        icon: AccelerationIcon,
    },
    {
        gameId: ["ID250"],
        icon: BerserkRuneIcon,
    },
    {
        gameId: ["ID255"],
        icon: RuneOfBattleFuryIcon,
    },
    {
        gameId: ["ID257"],
        icon: RuneOfResurrectionIcon,
    },
    {
        gameId: ["ID254"],
        icon: RuneOfRollingThunderIcon,
    },
    {
        gameId: ["ID258"],
        icon: RuneOfDragonFormIcon,
    },
    {
        gameId: ["ID251"],
        icon: RuneOfMagicalSupervisionIcon,
    },
    {
        gameId: ["ID256"],
        icon: RuneOfIntangibilityIcon,
    },
    {
        gameId: ["ID253"],
        icon: RuneOfElementalImmunityIcon,
    },
    {
        gameId: ["ID252"],
        icon: RuneOfExorcismIcon,
    },
    {
        gameId: ["ID249"],
        icon: RuneOfEnergyIcon,
    },
    {
        gameId: ["ID294"],
        icon: BattleCryIcon,
    },
    {
        gameId: ["ID291"],
        icon: CallOfBloodIcon,
    },
    {
        gameId: ["ID293"],
        icon: FrighteningRoarIcon,
    },
    {
        gameId: ["ID290"],
        icon: BuildableCryIcon,
    },
    {
        gameId: ["ID292"],
        icon: TheWordOfTheLeaderIcon,
    },
    {
        gameId: ["ID295"],
        icon: FuryOfTheHordeIcon,
    },
    {
        gameId: ["ID2"],
        icon: MagicFistIcon,
    },
    {
        gameId: ["ID224"],
        icon: MagicFistIcon,
    },
    {
        gameId: ["ID282"],
        icon: CrystalOfTheSecretIcon,
    },
    {
        gameId: ["ID34"],
        icon: HeavenlyShieldIcon,
    },
    {
        gameId: ["ID38"],
        icon: FireTrapIcon,
    },
    {
        gameId: ["ID42"],
        icon: RaisingTheDeadIcon,
    },
    {
        gameId: ["ID39"],
        icon: SummonWaspSwarmIcon,
    },
    {
        gameId: ["ID283"],
        icon: SummonTheHiveIcon,
    },
    {
        gameId: ["ID235"],
        icon: PhoenixSummonIcon,
    },
    {
        gameId: ["ID43"],
        icon: SummonElementalsIcon,
    },
    {
        gameId: ["ID40"],
        icon: PhantomCreationIcon,
    },
    {
        gameId: ["ID284"],
        icon: WallOfSwordsIcon,
    },
];
