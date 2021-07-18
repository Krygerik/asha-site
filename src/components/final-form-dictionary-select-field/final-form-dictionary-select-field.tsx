import {DropdownItemProps, Form as SemanticForm} from "semantic-ui-react";
import {Field} from "react-final-form";
import * as React from "react";
import {DictionaryContext, EDictionaryName} from "../../modules/dictionary";
import {TCommonDictionaryRecord} from "../../modules/dictionary/dictionary-types";

type TProps = {
    dictionary: EDictionaryName;
    filter?: (item: TCommonDictionaryRecord) => boolean;
    fluid?: boolean;
    label?: string;
    name: string;
    search?: boolean;
};

/**
 * Выпадающий список с опциями из переданного словаря
 */
export const FinalFormDictionarySelectField = (props: TProps) => {
    const dictionaries = React.useContext(DictionaryContext);

    let dictionaryRecords: TCommonDictionaryRecord[] = dictionaries.getDictionaryRecords(props.dictionary);

    if (props.filter) {
        dictionaryRecords = dictionaryRecords.filter(props.filter);
    }

    const options: DropdownItemProps[] = dictionaryRecords
        .map((record: TCommonDictionaryRecord) => ({
            key: record.game_id,
            text: record.localize_name,
            value: record.game_id,
        }));

    return (
        <Field
            name={props.name}
        >
            {
                innerProps => (
                    <SemanticForm.Select
                        fluid={props.fluid}
                        label={props.label}
                        name={innerProps.input.name}
                        onChange={(e, { value }) => innerProps.input.onChange(value)}
                        options={options}
                        search={props.search}
                        value={innerProps.input.value}
                    />
                )
            }
        </Field>
    )
};
