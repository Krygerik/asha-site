import * as React from "react";
import {Message} from "semantic-ui-react";
import {EComparisonNames} from "../../common/constants";
import {Page} from "../../modules/page";
import {withDictionaries} from "../../modules/dictionary";
import {
    TFetchStatisticsRequestFilter,
    TFilterStatisticsFormValues,
    TSingleStatisticsFilter,
} from "./statistics-page-types";
import {RacesWinRateStatisticsFilter} from "./components/race-win-rate-statistics-filter";
import {RaceWinRateStatisticsResult} from "./components/race-win-rate-statistics-result";
import {FILTERS_WITH_COMPARISON_OPERATORS} from "./statistics-page-constants";

/**
 * Страница отображения статистик
 */
const StatisticPage = React.memo(() => {
    const [savedFilterValues, setFilterSavedValues] = React.useState([{}] as TSingleStatisticsFilter[]);

    /**
     * Обработчик применения фильтров
     */
    const handleSubmitFiltersForm = (values: TFilterStatisticsFormValues) => {
        setFilterSavedValues(values.filters);
    }

    /**
     * Преобразование данных формы фильтров в фильтр для запроса статистик
     */
    const serializeFilterValues = (filterValues: TSingleStatisticsFilter[]) => (
        filterValues.reduce((acc, item) => {
            return {
                ...acc,
                [item.name]: FILTERS_WITH_COMPARISON_OPERATORS.includes(item.name)
                    ? item.operator
                        ? { [item.operator]: item.value }
                        : { [EComparisonNames.Equal]: item.value }
                    : item.value
            }
        }, {} as TFetchStatisticsRequestFilter)
    );

    return (
        <Page>
            <RacesWinRateStatisticsFilter
                handleSubmit={handleSubmitFiltersForm}
                initialValues={savedFilterValues}
            />
            <RaceWinRateStatisticsResult
                filters={serializeFilterValues(savedFilterValues)}
            />
            <Message style={{ fontSize: '18px' }}>
                <Message.Header content="Подсказки" />
                <Message.List>
                    <Message.Item content="(A/B) - где A - количество побед, B - количество поражений" />
                    <Message.Item content="Статистика высчитывается строго между участниками проекта" />
                </Message.List>
            </Message>
        </Page>
    );
})

export const StatisticPageController = withDictionaries(StatisticPage);
