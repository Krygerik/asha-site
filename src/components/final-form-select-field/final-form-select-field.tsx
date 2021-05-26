import {DropdownItemProps, Form as SemanticForm} from "semantic-ui-react";
import {Field} from "react-final-form";
import * as React from "react";

type TProps = {
    label?: string;
    loading?: boolean;
    name: string;
    options: DropdownItemProps[];
};

/**
 * Выпадающий список с опциями из переданного словаря
 */
export const FinalFormSelectField = (props: TProps) => (
    <Field
        name={props.name}
    >
        {
            innerProps => (
                <SemanticForm.Select
                    label={props.label}
                    loading={props.loading}
                    name={innerProps.input.name}
                    onChange={(e, { value }) => innerProps.input.onChange(value)}
                    options={props.options}
                    value={innerProps.input.value}
                />
            )
        }
    </Field>
);
