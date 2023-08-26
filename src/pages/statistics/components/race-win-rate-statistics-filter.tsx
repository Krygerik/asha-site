import * as React from "react";
import {Button, Form as SemanticForm, Grid, Header, Segment} from "semantic-ui-react";
import {Form} from "react-final-form";
import arrayMutators from "final-form-arrays";
import {EComparisonNames} from "../../../common/constants";
import {
    ECommonFilters,
    EFilterSectionsName,
    TFetchStatisticsRequestFilter,
    TFilterStatisticsFormValues,
    TPlayerFilterFields,
    TSingleStatisticsFilter,
} from "../statistics-page-types";
import {FILTERS_WITH_COMPARISON_OPERATORS} from "../statistics-page-constants";
import { GameFilterFields } from "./game-filter-fields";
import {PlayersFilterFields} from "./players-filter-filds";

type TProps = {
    setFilters: (values: TFetchStatisticsRequestFilter) => void;
};

/**
 * Компонент фильтрации статистики по расам
 */
export const RacesWinRateStatisticsFilter = React.memo((props: TProps) => {
    /**
     * Обработчик нажатия кнопки "Отфильтровать"
     */
    const handleClickFilterButton = (values: TFilterStatisticsFormValues) => () => {
        const players = [
            {
                ...serializeFilterValues(values[EFilterSectionsName.MainPlayer]),
                main: true
            },
            serializeFilterValues(values[EFilterSectionsName.OtherPlayer]),
        ];

        props.setFilters({
            players,
            ...values[EFilterSectionsName.Game],
        });
    }

    /**
     * Преобразование данных формы фильтров в фильтр для запроса статистик
     */
    const serializeFilterValues = (playerFiltersList: TSingleStatisticsFilter[]) => (
        playerFiltersList.reduce((acc, item) => {
            const withComparison = FILTERS_WITH_COMPARISON_OPERATORS.includes(item.name);

            if (item.value === undefined || (withComparison && item.operator === undefined)) {
                return acc;
            }

            return {
                ...acc,
                [item.name]: withComparison
                    ? item.operator
                        ? { [item.operator]: item.value }
                        : { [EComparisonNames.Equal]: item.value }
                    : item.value
            }
        }, {} as TPlayerFilterFields)
    );

    return (
        <Segment>
            <Header
                textAlign="center"
                content="Параметры фильтрации"
            />
            <Form
                onSubmit={(values: TFilterStatisticsFormValues) => {}}
                initialValues={{
                    [EFilterSectionsName.Game]: {
                        [ECommonFilters.WithUnknown]: false,
                    },
                    [EFilterSectionsName.MainPlayer]: [{}],
                    [EFilterSectionsName.OtherPlayer]: [{}],
                }}
                mutators={{ ...arrayMutators }}
                render={({ handleSubmit, form: { mutators: { push } }, values }) => (
                    <SemanticForm size='large' onSubmit={handleSubmit}>
                        <Grid>
                            <Grid.Row divided>
                                <Grid.Column width={8}>
                                    <Header content="Раса (в строке)" textAlign="center" />
                                    <PlayersFilterFields
                                        formValues={values}
                                        push={push}
                                        sectionName={EFilterSectionsName.MainPlayer}
                                    />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Header content="Раса (в столбце)" textAlign="center" />
                                    <PlayersFilterFields
                                        formValues={values}
                                        push={push}
                                        sectionName={EFilterSectionsName.OtherPlayer}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column>
                                    <Header content="Общеигровые фильтры" textAlign="center" />
                                    <GameFilterFields
                                        formValues={values}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={4}>
                                    <Button
                                        content="Отфильтровать"
                                        fluid
                                        onClick={handleClickFilterButton(values)}
                                        primary
                                        size='large'
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </SemanticForm>
                )}
            />
        </Segment>
    )
});
