import {MAP_FILTERS_NAME_TO_LABEL} from "./statistics-page-constants";
import {EFiltersName, EMapVersionValues} from "./statistics-page-types";

/**
 * Все опции выпадающего списка для выбора фильтров
 */
export const playerFiltersOptions = Object.keys(MAP_FILTERS_NAME_TO_LABEL)
    // @ts-ignore
    .filter((filterName: EFiltersName) => filterName !== EFiltersName.MapVersion)
    // @ts-ignore
    .map((filterName: EFiltersName) => {
        const filterValue = MAP_FILTERS_NAME_TO_LABEL[filterName];

        return ({
            key: filterName,
            text: filterValue,
            value: filterName,
        })
    });

/**
 * Общеигровые опции фильтров
 */
export const gameFiltersOption = [
    {
        key: EFiltersName.MapVersion,
        text: MAP_FILTERS_NAME_TO_LABEL[EFiltersName.MapVersion],
        value: EFiltersName.MapVersion,
    }
]

/**
 * Опции выпадающего списка "Версия карты"
 */
export const mapVersionFilterOption = Object.values(EMapVersionValues)
    // @ts-ignore
    .map((mapVersion: EMapVersionValues) => ({
        key: mapVersion,
        text: mapVersion,
        value: mapVersion,
    }))