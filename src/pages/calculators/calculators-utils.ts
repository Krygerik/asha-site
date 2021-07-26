import {EEffectName, MAP_EFFECTS_NAME_TO_LABEL} from "./calculators-constants";

/**
 * Все опции выпадающего списка для выбора эффекта'
 */
export const effectsOptions = Object
    .keys(MAP_EFFECTS_NAME_TO_LABEL)
    // @ts-ignore
    .map((effectName: EEffectName) => {
        const effectValue = MAP_EFFECTS_NAME_TO_LABEL[effectName];

        return ({
            key: effectName,
            text: effectValue,
            value: effectName,
        })
    })