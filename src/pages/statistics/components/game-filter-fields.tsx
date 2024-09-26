import * as React from "react";
import {Grid} from "semantic-ui-react";
import {FinalFormSelectField, FinalFormYesOrNotSelectField} from "../../../components/final-form-select-field";
import {ECommonFilters, EFilterSectionsName, TFilterStatisticsFormValues} from "../statistics-page-types";
import {DictionaryContext, EDictionaryName} from "../../../modules/dictionary";
import {filter, flow, get, isEqual, map, uniq} from "lodash/fp";

type TProps = {
    formValues: TFilterStatisticsFormValues;
};

/**
 * Общеигровые фильтры
 */
export const GameFilterFields = React.memo((props: TProps) => {
    const { getDictionaryRecords } = React.useContext(DictionaryContext);

    const mapVersionList = getDictionaryRecords(EDictionaryName.MapVersions);

    return (
        <Grid>
            <Grid.Row centered>
                <Grid.Column width={4}>
                    <FinalFormSelectField
                        label="Тип карты"
                        name={`${EFilterSectionsName.Game}.${ECommonFilters.MapType}`}
                        options={
                            flow(
                                map(get('value.type')),
                                uniq,
                                map((type: string) => ({
                                    key: type,
                                    text: type,
                                    value: type,
                                }))
                            )(mapVersionList)
                        }
                        search
                    />
                </Grid.Column>
                <Grid.Column width={4}>
                    <FinalFormSelectField
                        label="Версия карты"
                        name={`${EFilterSectionsName.Game}.${ECommonFilters.MapVersion}`}
                        options={
                            flow(
                                filter(
                                    flow(
                                        get('value.type'),
                                        isEqual(props.formValues[EFilterSectionsName.Game]?.[ECommonFilters.MapType])
                                    )
                                ),
                                map(get('value.version')),
                                map((type: string) => ({
                                    key: type,
                                    text: type,
                                    value: type,
                                }))
                            )(mapVersionList)
                        }
                        search
                    />
                </Grid.Column>
                <Grid.Column width={4}>
                    <FinalFormYesOrNotSelectField
                        label="Учитывать неизвестных"
                        name={`${EFilterSectionsName.Game}.${ECommonFilters.WithUnknown}`}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})