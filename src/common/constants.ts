
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
 * Возможные форматы раундов
 */
export enum ERoundFormat {
    // До 2 побед
    Bo3 = 'Bo3',
    // До 3 побед
    Bo5 = 'Bo5',
}

/**
 * Маска для отображения даты
 */
export const REPRESENTATIVE_DATE_MASK = 'YYYY-MM-DD HH:mm:ss';