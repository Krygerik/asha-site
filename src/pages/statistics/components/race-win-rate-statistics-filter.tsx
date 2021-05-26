import * as React from "react";
import {Button, Form as SemanticForm, Grid, Header, Icon, Segment} from "semantic-ui-react";
import {Form} from "react-final-form";
import arrayMutators from "final-form-arrays";
import {FieldArray} from "react-final-form-arrays";
import {FinalFormSelectField} from "../../../components/final-form-select-field";
import {FinalFormDictionarySelectField} from "../../../components/final-form-dictionary-select-field";
import {FinalFormUsersSelectField} from "../../../components/final-form-users-select-field";
import {EDictionaryName} from "../../../modules/dictionary";
import {EFiltersName, TFilterStatisticsFormValues, TSingleStatisticsFilter} from "../statistics-page-types";
import {FILTERS_LIST, PLAYER_COLOR_OPTIONS} from "../statistics-page-constants";

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
                                fields.map((name, index) => (
                                    <Grid.Row key={name}>
                                        <Grid.Column width={4}>
                                            <FinalFormSelectField
                                                label="Фильтр"
                                                name={`${name}.name`}
                                                options={
                                                    FILTERS_LIST.map(item => ({
                                                        key: item.name,
                                                        value: item.name,
                                                        text: item.label,
                                                    }))
                                                }
                                            />
                                        </Grid.Column>
                                        {
                                            values.filters[index].name === EFiltersName.UserId && (
                                                <Grid.Column width={10}>
                                                    <FinalFormUsersSelectField
                                                        label="Никнейм"
                                                        name={`${name}.value`}
                                                    />
                                                </Grid.Column>
                                            )
                                        }
                                        {
                                            values.filters[index].name === EFiltersName.Color && (
                                                <Grid.Column width={10}>
                                                    <FinalFormSelectField
                                                        label="Цвет игрока"
                                                        name={`${name}.value`}
                                                        options={PLAYER_COLOR_OPTIONS}
                                                    />
                                                </Grid.Column>
                                            )
                                        }
                                        {
                                            values.filters[index].name === EFiltersName.Race && (
                                                <Grid.Column width={10}>
                                                    <FinalFormDictionarySelectField
                                                        dictionary={EDictionaryName.Races}
                                                        label="Фракция"
                                                        name={`${name}.value`}
                                                    />
                                                </Grid.Column>
                                            )
                                        }
                                        {
                                            values.filters[index].name === EFiltersName.Hero && (
                                                <Grid.Column width={10}>
                                                    <FinalFormDictionarySelectField
                                                        dictionary={EDictionaryName.Heroes}
                                                        label="Герой"
                                                        name={`${name}.value`}
                                                    />
                                                </Grid.Column>
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
                                ))}
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
