import {DropdownItemProps, Form as SemanticForm} from "semantic-ui-react";
import {Field} from "react-final-form";
import * as React from "react";
import {
    DictionaryContext,
    EDictionaryName,
    TCommonDictionaryRecord,
} from "../../modules/dictionary";

type TProps = {
    dictionary: EDictionaryName;
    filter?: (item: TCommonDictionaryRecord) => boolean;
    fluid?: boolean;
    label?: string;
    name: string;
    onChange?: any;
    search?: boolean;
};

/**
 * Выпадающий список с опциями из переданного словаря
 */
export const FinalFormDictionarySelectField = (props: TProps) => {
    const { getDictionaryRecords, getLocalizeDictionaryValueByGameId } = React.useContext(DictionaryContext);

    let dictionaryRecords: TCommonDictionaryRecord[] = getDictionaryRecords(props.dictionary);

    if (props.filter) {
        dictionaryRecords = dictionaryRecords.filter(props.filter);
    }

    const options: DropdownItemProps[] = dictionaryRecords
        .map((record: TCommonDictionaryRecord) => ({
            key: record.game_id,
            text: getLocalizeDictionaryValueByGameId(props.dictionary, record.game_id),
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
                        onChange={(e, { value }) => {
                            innerProps.input.onChange(value);
                            if (props.onChange) {
                                props.onChange(value)
                            }
                        }}
                        options={options}
                        search={props.search}
                        value={innerProps.input.value}
                    />
                )
            }
        </Field>
    )
};
