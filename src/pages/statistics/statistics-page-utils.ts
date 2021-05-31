import {MAP_FILTERS_NAME_TO_LABEL} from "./statistics-page-constants";
import {EFiltersName} from "./statistics-page-types";

/**
 * Все опции выпадающего списка для выбора фильтров
 */
// @ts-ignore
export const playerFiltersOptions = Object.keys(MAP_FILTERS_NAME_TO_LABEL).map((filterName: EFiltersName) => {
    const filterValue = MAP_FILTERS_NAME_TO_LABEL[filterName];

    return ({
        key: filterName,
        text: filterValue,
        value: filterName,
    })
});