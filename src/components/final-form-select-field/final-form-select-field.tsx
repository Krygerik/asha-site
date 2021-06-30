import {DropdownItemProps, Form as SemanticForm} from "semantic-ui-react";
import {Field} from "react-final-form";
import * as React from "react";

type TProps = {
    fluid?: boolean;
    label?: string;
    loading?: boolean;
    name: string;
    options: DropdownItemProps[];
    placeholder?: string;
    required?: boolean;
};

const notEmptyValidator = (value?: string) => (value ? undefined : 'Поле обязательно для заполнения');

/**
 * Выпадающий список с опциями из переданного словаря
 */
export const FinalFormSelectField = (props: TProps) => (
    <Field
        name={props.name}
        validate={props.required ? notEmptyValidator : undefined}
    >
        {
            innerProps => (
                <SemanticForm.Select
                    error={innerProps.meta.touched && innerProps.meta.error}
                    fluid={props.fluid}
                    label={props.label}
                    loading={props.loading}
                    name={innerProps.input.name}
                    onChange={(e, { value }) => innerProps.input.onChange(value)}
                    options={props.options}
                    placeholder={props.placeholder}
                    value={innerProps.input.value}
                />
            )
        }
    </Field>
);
