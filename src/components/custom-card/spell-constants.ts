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
    name: string;
    locale: string;
    icon: string;
};

/**
 * Перечисление всех заклинаний
 */
export const SPELLS: TSpell[] = [
    {
        name: "Берсерк",
        locale: "Берсерк",
        icon: BerserkIcon,
    },
    {
        name: "Вампиризм",
        locale: "Вампиризм",
        icon: VampirismIcon,
    },
    {
        name: "Замедление",
        locale: "Замедление",
        icon: DecelerationIcon,
    },
    {
        name: "Замедление (общее)",
        locale: "Замедление (общее)",
        icon: DecelerationIcon,
    },
    {
        name: "Немощность",
        locale: "Немощность",
        icon: WeaknessIcon,
    },
    {
        name: "Немощность (общее)",
        locale: "Немощность (общее)",
        icon: WeaknessIcon,
    },
    {
        name: "Ослабление",
        locale: "Ослабление",
        icon: WeakeningIcon,
    },
    {
        name: "Ослабление (общее)",
        locale: "Ослабление (общее)",
        icon: WeakeningIcon,
    },
    {
        name: "Ослепление",
        locale: "Ослепление",
        icon: BlindnessIcon,
    },
    {
        name: "Подчинение",
        locale: "Подчинение",
        icon: SubordinationIcon,
    },
    {
        name: "Разрушающий луч",
        locale: "Разрушающий луч",
        icon: DestructiveBeamIcon,
    },
    {
        name: "Разрушающий луч (общее)",
        locale: "Разрушающий луч (общее)",
        icon: DestructiveBeamIcon,
    },
    {
        name: "Рассеяность",
        locale: "Рассеянность",
        icon: DistractionIcon,
    },
    {
        name: "Рассеяность (общее)",
        locale: "Рассеянность (общее)",
        icon: DistractionIcon,
    },
    {
        name: "Скорбь",
        locale: "Скорбь",
        icon: SorrowIcon,
    },
    {
        name: "Чума",
        locale: "Чума",
        icon: PlagueIcon,
    },
    {
        name: "Чума (общее)",
        locale: "Чума (общее)",
        icon: PlagueIcon,
    },
    {
        name: "Армагеддон",
        locale: "Армагеддон",
        icon: ArmageddonIcon,
    },
    {
        name: "Армагеддон (усил.)",
        locale: "Армагеддон (усил.)",
        icon: ArmageddonIcon,
    },
    {
        name: "Каменные шипы",
        locale: "Каменные шипы",
        icon: StoneThornsIcon,
    },
    {
        name: "Каменные шипы (усил.)",
        locale: "Каменные шипы (усил.)",
        icon: StoneThornsIcon,
    },
    {
        name: "Кольцо холода",
        locale: "Кольцо холода",
        icon: RingOfColdIcon,
    },
    {
        name: "Кольцо холода (усил.)",
        locale: "Кольцо холода (усил.)",
        icon: RingOfColdIcon,
    },
    {
        name: "Ледяная глыба",
        locale: "Ледяная глыба",
        icon: IceBlockIcon,
    },
    {
        name: "Ледяная глыба (усил.)",
        locale: "Ледяная глыба (усил.)",
        icon: IceBlockIcon,
    },
    {
        name: "Магическая стрела",
        locale: "Магическая стрела",
        icon: MagicArrowIcon,
    },
    {
        name: "Магическая стрела (усил.)",
        locale: "Магическая стрела (усил.)",
        icon: MagicArrowIcon,
    },
    {
        name: "Метеоритный дождь",
        locale: "Метеоритный дождь",
        icon: MeteorRainIcon,
    },
    {
        name: "Метеоритный дождь (усил.)",
        locale: "Метеоритный дождь (усил.)",
        icon: MeteorRainIcon,
    },
    {
        name: "Молния",
        locale: "Молния",
        icon: LightningIcon,
    },
    {
        name: "Молния (усил.)",
        locale: "Молния (усил.)",
        icon: LightningIcon,
    },
    {
        name: "Огненный шар",
        locale: "Огненный шар",
        icon: FireballIcon,
    },
    {
        name: "Огненный шар (усил.)",
        locale: "Огненный шар (усил.)",
        icon: FireballIcon,
    },
    {
        name: "Останавливающий холод",
        locale: "Останавливающий холод",
        icon: StoppingColdIcon,
    },
    {
        name: "Останавливающий холод (усил.)",
        locale: "Останавливающий холод (усил.)",
        icon: StoppingColdIcon,
    },
    {
        name: "Стена огня",
        locale: "Стена огня",
        icon: WallOfFireIcon,
    },
    {
        name: "Цепь молний",
        locale: "Цепь молний",
        icon: LightningChainIcon,
    },
    {
        name: "Цепь молний (усил.)",
        locale: "Цепь молний (усил.)",
        icon: LightningChainIcon,
    },
    {
        name: "Шок земли",
        locale: "Шок земли",
        icon: EarthShockIcon,
    },
    {
        name: "Антимагия",
        locale: "Антимагия",
        icon: AntiMagicIcon,
    },
    {
        name: "Божественная сила",
        locale: "Божественная сила",
        icon: DivinePowerIcon,
    },
    {
        name: "Божественная сила (общее)",
        locale: "Божественная сила (общее)",
        icon: DivinePowerIcon,
    },
    {
        name: "Воскрешение",
        locale: "Воскрешение",
        icon: ResurrectionIcon,
    },
    {
        name: "Каменная кожа",
        locale: "Каменная кожа",
        icon: StoneSkinIcon,
    },
    {
        name: "Каменная кожа (общее)",
        locale: "Каменная кожа (общее)",
        icon: StoneSkinIcon,
    },
    {
        name: "Карающий удар",
        locale: "Карающий удар",
        icon: PunishingBlowIcon,
    },
    {
        name: "Карающий удар (общее)",
        locale: "Карающий удар (общее)",
        icon: PunishingBlowIcon,
    },
    {
        name: "Регенерация",
        locale: "Регенерация",
        icon: RegenerationIcon,
    },
    {
        name: "Снятие чар",
        locale: "Снятие чар",
        icon: DisenchantmentIcon,
    },
    {
        name: "Снятие чар (общее)",
        locale: "Снятие чар (общее)",
        icon: DisenchantmentIcon,
    },
    {
        name: "Телепорт",
        locale: "Телепорт",
        icon: TeleportIcon,
    },
    {
        name: "Уклонение",
        locale: "Уклонение",
        icon: EvasionIcon,
    },
    {
        name: "Уклонение (общее)",
        locale: "Уклонение (общее)",
        icon: EvasionIcon,
    },
    {
        name: "Ускорение",
        locale: "Ускорение",
        icon: AccelerationIcon,
    },
    {
        name: "Ускорение (общее)",
        locale: "Ускорение (общее)",
        icon: AccelerationIcon,
    },
    {
        name: "Руна берсеркерства",
        locale: "Руна берсеркерства",
        icon: BerserkRuneIcon,
    },
    {
        name: "Руна боевой ярости",
        locale: "Руна боевой ярости",
        icon: RuneOfBattleFuryIcon,
    },
    {
        name: "Руна воскрешения",
        locale: "Руна воскрешения",
        icon: RuneOfResurrectionIcon,
    },
    {
        name: "Руна громового раската",
        locale: "Руна громового раската",
        icon: RuneOfRollingThunderIcon,
    },
    {
        name: "Руна драконьего обличья",
        locale: "Руна драконьего обличья",
        icon: RuneOfDragonFormIcon,
    },
    {
        name: "Руна магического надзора",
        locale: "Руна магического надзора",
        icon: RuneOfMagicalSupervisionIcon,
    },
    {
        name: "Руна неосязаемости",
        locale: "Руна неосязаемости",
        icon: RuneOfIntangibilityIcon,
    },
    {
        name: "Руна стихийной невосприимчивости",
        locale: "Руна стихийной невосприимчивости",
        icon: RuneOfElementalImmunityIcon,
    },
    {
        name: "Руна экзорцизма",
        locale: "Руна экзорцизма",
        icon: RuneOfExorcismIcon,
    },
    {
        name: "Руна энергии",
        locale: "Руна энергии",
        icon: RuneOfEnergyIcon,
    },
    {
        name: "Боевой клич",
        locale: "Боевой клич",
        icon: BattleCryIcon,
    },
    {
        name: "Зов крови",
        locale: "Зов крови",
        icon: CallOfBloodIcon,
    },
    {
        name: "Устрашающий рык",
        locale: "Пугающий рык",
        icon: FrighteningRoarIcon,
    },
    {
        name: "Объединяющий клич",
        locale: "Сборный клич",
        icon: BuildableCryIcon,
    },
    {
        name: "Слово вождя",
        locale: "Слово вождя",
        icon: TheWordOfTheLeaderIcon,
    },
    {
        name: "Ярость орды",
        locale: "Ярость орды",
        icon: FuryOfTheHordeIcon,
    },
    {
        name: "Волшебный кулак",
        locale: "Волшебный кулак",
        icon: MagicFistIcon,
    },
    {
        name: "Волшебный кулак (усил.)",
        locale: "Волшебный кулак (усил.)",
        icon: MagicFistIcon,
    },
    {
        name: "Кристалл тайного",
        locale: "Кристалл тайного",
        icon: CrystalOfTheSecretIcon,
    },
    {
        name: "Небесный щит",
        locale: "Небесный щит",
        icon: HeavenlyShieldIcon,
    },
    {
        name: "Огненная ловушка",
        locale: "Огненная ловушка",
        icon: FireTrapIcon,
    },
    {
        name: "Поднятие мертвых",
        locale: "Поднятие мертвых",
        icon: RaisingTheDeadIcon,
    },
    {
        name: "Призыв осиного роя",
        locale: "Призыв осиного роя",
        icon: SummonWaspSwarmIcon,
    },
    {
        name: "Призыв улья",
        locale: "Призыв улья",
        icon: SummonTheHiveIcon,
    },
    {
        name: "Призыв феникса",
        locale: "Призыв феникса",
        icon: PhoenixSummonIcon,
    },
    {
        name: "Призыв элементалей",
        locale: "Призыв элементалей",
        icon: SummonElementalsIcon,
    },
    {
        name: "Создание фантома",
        locale: "Создание фантома",
        icon: PhantomCreationIcon,
    },
    {
        name: "Стена мечей",
        locale: "Стена мечей",
        icon: WallOfSwordsIcon,
    },
];
