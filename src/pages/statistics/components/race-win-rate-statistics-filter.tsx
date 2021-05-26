import {map} from "lodash";
import * as React from "react";
import {Button, Form as SemanticForm, Grid, Header, Icon, Segment} from "semantic-ui-react";
import {Form} from "react-final-form";
import arrayMutators from "final-form-arrays";
import {FieldArray} from "react-final-form-arrays";
import {FinalFormSelectField} from "../../../components/final-form-select-field";
import {TFilterStatisticsFormValues, TSingleStatisticsFilter} from "../statistics-page-types";
import {
    COMPARISON_OPERATORS_OPTIONS,
    FILTERS_WITH_COMPARISON_OPERATORS,
    MAP_FILTERS_NAME_TO_LABEL,
    MAP_FILTER_NAMES_TO_FIELD_DATA,
} from "../statistics-page-constants";

type TProps = {
    handleSubmit: (values: TFilterStatisticsFormValues) => void;
    initialValues: TSingleStatisticsFilter[];
};

/**
 * Компонент фильтрации статистики по расам
 */
export const RacesWinRateStatisticsFilter = React.memo((props: TProps) => (
    <Segment>
        <Header
            textAlign="center"
            content="Параметры фильтрации"
        />
        <Form
            onSubmit={props.handleSubmit}
            initialValues={{ filters: props.initialValues }}
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

                                    return (
                                        <Grid.Row key={name}>
                                            <Grid.Column width={4}>
                                                <FinalFormSelectField
                                                    label="Фильтр"
                                                    name={`${name}.name`}
                                                    options={
                                                        map(MAP_FILTERS_NAME_TO_LABEL, (value, key) => ({
                                                            key: key,
                                                            text: value,
                                                            value: key,
                                                        }))
                                                    }
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
                                    primary
                                    size='large'
                                    onClick={() => push("filters", {})}
                                >
                                    <Icon name="add" />
                                    Добавить фильтр
                                </Button>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Button
                                    content="Отфильтровать"
                                    fluid
                                    primary
                                    size='large'
                                    type="submit"
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </SemanticForm>
            )}
        />
    </Segment>
));
