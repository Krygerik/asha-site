import * as React from "react";
import {Message} from "semantic-ui-react";
import {Page} from "../../modules/page";
import {withDictionaries} from "../../modules/dictionary";
import {
    TFetchStatisticsRequestFilter,
} from "./statistics-page-types";
import {RacesWinRateStatisticsFilter} from "./components/race-win-rate-statistics-filter";
import {RaceWinRateStatisticsResult} from "./components/race-win-rate-statistics-result";

/**
 * Страница отображения статистик
 */
const StatisticPage = React.memo(() => {
    const [filters, setFilters] = React.useState({ players: [{}, {}] } as TFetchStatisticsRequestFilter);

    return (
        <Page>
            <RacesWinRateStatisticsFilter
                setFilters={setFilters}
            />
            <RaceWinRateStatisticsResult
                filters={filters}
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
