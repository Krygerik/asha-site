import {DropdownItemProps, Form as SemanticForm} from "semantic-ui-react";
import {Field} from "react-final-form";
import * as React from "react";
import {DictionaryContext, EDictionaryName} from "../../modules/dictionary";
import {TRecord} from "../../modules/dictionary/dictionary-types";

type TProps = {
    dictionary: EDictionaryName;
    label?: string;
    name: string;
};

/**
 * Выпадающий список с опциями из переданного словаря
 */
export const FinalFormDictionarySelectField = (props: TProps) => {
    const dictionaries = React.useContext(DictionaryContext);

    const options: DropdownItemProps[] = dictionaries.getDictionaryRecords(props.dictionary)
        .map((record: TRecord) => ({
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
                        label={props.label}
                        name={innerProps.input.name}
                        onChange={(e, { value }) => innerProps.input.onChange(value)}
                        options={options}
                        value={innerProps.input.value}
                    />
                )
            }
        </Field>
    )
};
