
/**
 * Цвет игрока
 */
export enum EPlayerColor {
    RED = 1,
    BLUE = 2,
}

/**
 * Стартовый бонус игрока
 */
export enum EPlayerStartedBonus {
    Artifact = 'art',
    Gold = 'gold',
    Spell = 'spell',
}

/**
 * Ключи сравнений для бд
 */
export enum EComparisonNames {
    Equal = '$eq',
    GreatThen = '$gt',
    LessThen = '$lt',
}

/**
 * Маска для отображения даты
 */
export const REPRESENTATIVE_DATE_MASK = 'YYYY-MM-DD HH:mm:ss';