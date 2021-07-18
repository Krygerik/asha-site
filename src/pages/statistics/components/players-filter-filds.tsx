import {Button, Grid, Icon} from "semantic-ui-react";
import {filter, map} from "lodash";
import * as React from "react";
import {FieldArray} from "react-final-form-arrays";
import {FinalFormSelectField} from "../../../components/final-form-select-field";
import {
    COMPARISON_OPERATORS_OPTIONS,
    FILTERS_WITH_COMPARISON_OPERATORS,
    MAP_FILTER_NAMES_TO_FIELD_DATA,
} from "../statistics-page-constants";
import {
    EFilterSectionsName,
    EFiltersName,
    TFilterStatisticsFormValues,
    TSingleStatisticsFilter
} from "../statistics-page-types";
import {playerFiltersOptions } from "../statistics-page-utils";

type TProps = {
    formValues: TFilterStatisticsFormValues;
    push: any;
    sectionName: EFilterSectionsName;
};

/**
 * Поля фильтра для одного игрока
 */
export const PlayersFilterFields = React.memo((props: TProps) => (
    <Grid>
        <FieldArray name={props.sectionName}>
            {({ fields }) => (
                <>
                    {
                        fields.map((name, index) => {
                            const playerFilterList = props.formValues[props.sectionName];
                            const selectedFieldName = playerFilterList[index].name;
                            const withComparison = FILTERS_WITH_COMPARISON_OPERATORS.includes(selectedFieldName);
                            const {Component, staticProps} = MAP_FILTER_NAMES_TO_FIELD_DATA[selectedFieldName] || {};
                            const selectedFiltersNames = map(
                                playerFilterList,
                                (item: TSingleStatisticsFilter) => item.name,
                            );

                            /**
                             * Список всех выбранных фильтров, кроме фильтра этой строки
                             */
                            const otherSelectedFiltersNames = filter(
                                selectedFiltersNames,
                                (item: EFiltersName | undefined) => item && item !== selectedFieldName
                            );

                            /**
                             * Список доступных опций для выпадающего списка
                             */
                            const filteredOptions = playerFiltersOptions.filter(
                                (item: { value: EFiltersName, key: EFiltersName, text: string }) => (
                                    !otherSelectedFiltersNames.includes(item.value)
                                ))

                            return (
                                <Grid.Row key={name}>
                                    <Grid.Column width={7}>
                                        <FinalFormSelectField
                                            fluid
                                            label="Фильтр"
                                            name={`${name}.name`}
                                            options={filteredOptions}
                                            search
                                        />
                                    </Grid.Column>
                                    {
                                        selectedFieldName && (
                                            <>
                                                {
                                                    withComparison && (
                                                        <Grid.Column width={4}>
                                                            <FinalFormSelectField
                                                                fluid
                                                                label="Сравнение"
                                                                name={`${name}.operator`}
                                                                options={COMPARISON_OPERATORS_OPTIONS}
                                                            />
                                                        </Grid.Column>
                                                    )
                                                }
                                                <Grid.Column width={withComparison ? 3 : 7}>
                                                    {
                                                        // @ts-ignore
                                                        <Component
                                                            {...staticProps}
                                                            fluid
                                                            label="Значение"
                                                            name={`${name}.value`}
                                                        />
                                                    }

                                                </Grid.Column>
                                            </>
                                        )
                                    }
                                    <Grid.Column width={2} textAlign="center" verticalAlign="middle">
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
                        })
                    }
                    <Grid.Row centered>
                        <Grid.Column width={8} textAlign="center">
                            <Button
                                fluid
                                onClick={() => props.push(props.sectionName, {})}
                                primary
                                size='large'
                            >
                                <Icon name="add" />
                                Добавить фильтр
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </>
            )}
        </FieldArray>
    </Grid>
))