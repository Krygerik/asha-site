import * as React from "react";
import {FieldArray} from "react-final-form-arrays";
import {Button, Grid, Icon} from "semantic-ui-react";
import {FinalFormSelectField} from "../../../components/final-form-select-field";
import {EFilterSectionsName, TFilterStatisticsFormValues} from "../statistics-page-types";
import {gameFiltersOption, mapVersionFilterOption} from "../statistics-page-utils";
import {MAP_FILTER_NAMES_TO_FIELD_DATA} from "../statistics-page-constants";

type TProps = {
    formValues: TFilterStatisticsFormValues;
    push: any;
};

/**
 * Общеигровые фильтры
 */
export const GameFilterFields = React.memo((props: TProps) => (
    <Grid>
        <FieldArray name={EFilterSectionsName.Game}>
            {({ fields }) => (
                fields.map((name, index) => {
                    const gameFilterList = props.formValues[EFilterSectionsName.Game];
                    const selectedFieldName = gameFilterList[index].name;
                    const {Component, staticProps} = MAP_FILTER_NAMES_TO_FIELD_DATA[selectedFieldName] || {};

                    return (
                        <>
                            <Grid.Row key={name}>
                                <Grid.Column width={7}>
                                    <FinalFormSelectField
                                        fluid
                                        label="Фильтр"
                                        name={`${name}.name`}
                                        options={gameFiltersOption}
                                        search
                                    />
                                </Grid.Column>
                                {
                                    selectedFieldName && (
                                        <Grid.Column width={7}>
                                            {
                                                // @ts-ignore
                                                <Component
                                                    {...staticProps}
                                                    label="Значение"
                                                    name={`${name}.value`}
                                                    options={mapVersionFilterOption}
                                                />
                                            }
                                        </Grid.Column>
                                    )
                                }
                                <Grid.Column
                                    textAlign="center"
                                    verticalAlign="middle"
                                    width={2}
                                >
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
                            <Grid.Row centered>
                                <Grid.Column width={8} textAlign="center">
                                    <Button
                                        fluid
                                        onClick={() => props.push(EFilterSectionsName.Game, {})}
                                        primary
                                        size='large'
                                    >
                                        <Icon name="add" />
                                        Добавить фильтр
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </>
                    )
                })
            )}
        </FieldArray>
    </Grid>
))