import {filter, map} from "lodash";
import * as React from "react";
import {Button, Form as SemanticForm, Grid, Header, Icon, Segment} from "semantic-ui-react";
import {Form} from "react-final-form";
import arrayMutators from "final-form-arrays";
import {FieldArray} from "react-final-form-arrays";
import {EComparisonNames} from "../../../common/constants";
import {FinalFormSelectField} from "../../../components/final-form-select-field";
import {
    EFiltersName,
    TFetchStatisticsRequestFilter,
    TFilterStatisticsFormValues,
    TSingleStatisticsFilter
} from "../statistics-page-types";
import {
    COMPARISON_OPERATORS_OPTIONS,
    FILTERS_WITH_COMPARISON_OPERATORS,
    MAP_FILTERS_NAME_TO_LABEL,
    MAP_FILTER_NAMES_TO_FIELD_DATA,
} from "../statistics-page-constants";

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
        props.setFilters(serializeFilterValues(values.filters));
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

    /**
     * Все опции выпадающего списка для выбора фильтров
     */
    // @ts-ignore
    const options = Object.keys(MAP_FILTERS_NAME_TO_LABEL).map((filterName: EFiltersName) => {
        const filterValue = MAP_FILTERS_NAME_TO_LABEL[filterName];

        return ({
            key: filterName,
            text: filterValue,
            value: filterName,
        })
    });

    return (
        <Segment>
            <Header
                textAlign="center"
                content="Параметры фильтрации"
            />
            <Form
                onSubmit={(values: TFilterStatisticsFormValues) => {}}
                initialValues={{ filters: [{}] }}
                mutators={{ ...arrayMutators }}
                render={({ handleSubmit, form: { mutators: { push } }, values }) => (
                    <SemanticForm size='large' onSubmit={handleSubmit}>
                        <Grid>
                            <FieldArray name="filters">
                                {({ fields }) =>
                                    fields.map((name, index) => {
                                        const selectedFieldName = values.filters[index].name;
                                        const withComparison = FILTERS_WITH_COMPARISON_OPERATORS.includes(selectedFieldName);
                                        const {Component, staticProps} = MAP_FILTER_NAMES_TO_FIELD_DATA[selectedFieldName] || {};
                                        const selectedFiltersNames = map(
                                            values.filters,
                                            (item: TSingleStatisticsFilter) => item.name,
                                        );

                                        /**
                                         * Список всех выбранных фильтров, кроме фильтра этой строки
                                         */
                                        const otherSelectedFiltersNames = filter(
                                            selectedFiltersNames,
                                            (item: EFiltersName | undefined) => item && item !== values.filters[index].name
                                        );

                                        /**
                                         * Список доступных опций для выпадающего списка
                                         */
                                        const filteredOptions = options.filter(
                                            (item: { value: EFiltersName, key: EFiltersName, text: string }) => (
                                                !otherSelectedFiltersNames.includes(item.value)
                                        ))

                                        return (
                                            <Grid.Row key={name}>
                                                <Grid.Column width={4}>
                                                    <FinalFormSelectField
                                                        label="Фильтр"
                                                        name={`${name}.name`}
                                                        options={filteredOptions}
                                                    />
                                                </Grid.Column>
                                                {
                                                    selectedFieldName && (
                                                        <>
                                                            {
                                                                withComparison && (
                                                                    <Grid.Column width={5}>
                                                                        <FinalFormSelectField
                                                                            label="Сравнение"
                                                                            name={`${name}.operator`}
                                                                            options={COMPARISON_OPERATORS_OPTIONS}
                                                                        />
                                                                    </Grid.Column>
                                                                )
                                                            }
                                                            <Grid.Column width={withComparison ? 5 : 10}>
                                                                {
                                                                    // @ts-ignore
                                                                    <Component
                                                                        {...staticProps}
                                                                        label={MAP_FILTERS_NAME_TO_LABEL[selectedFieldName]}
                                                                        name={`${name}.value`}
                                                                    />
                                                                }

                                                            </Grid.Column>
                                                        </>
                                                    )
                                                }
                                                <Grid.Column width={1} textAlign="center" verticalAlign="middle">
                                                    <Icon
                                                        size="large"
                                                        name="close"
                                                        style={{
                                                            cursor: "pointer",
                                                            paddingTop: "10px"
                                                        }}
                                                        onClick={() => fields.remove(index)}
                                                    />
                                                </Grid.Column>
                                            </Grid.Row>
                                        )
                                    })}
                            </FieldArray>
                            <Grid.Row>
                                <Grid.Column width={4} textAlign="center">
                                    <Button
                                        fluid
                                        onClick={() => push("filters", {})}
                                        primary
                                        size='large'
                                    >
                                        <Icon name="add" />
                                        Добавить фильтр
                                    </Button>
                                </Grid.Column>
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
