import {DropdownItemProps, Form as SemanticForm} from "semantic-ui-react";
import {Field} from "react-final-form";
import * as React from "react";

export type TFinalFormSelectFieldProps = {
    clearable?: boolean;
    disabled?: boolean;
    fluid?: boolean;
    label?: string;
    loading?: boolean;
    name: string;
    onChange?: any;
    options: DropdownItemProps[];
    placeholder?: string;
    required?: boolean;
    search?: boolean;
};

const notEmptyValidator = (value?: string) => (value ? undefined : 'Поле обязательно для заполнения');

/**
 * Выпадающий список с опциями из переданного словаря
 */
export const FinalFormSelectField = (props: TFinalFormSelectFieldProps) => (
    <Field
        name={props.name}
        validate={props.required ? notEmptyValidator : undefined}
    >
        {
            innerProps => (
                <SemanticForm.Select
                    clearable={props.clearable}
                    disabled={props.disabled}
                    error={innerProps.meta.touched && innerProps.meta.error}
                    fluid={props.fluid}
                    label={props.label}
                    loading={props.loading}
                    name={innerProps.input.name}
                    onChange={(e, { value }) => {
                        innerProps.input.onChange(value);
                        if (props.onChange) {
                            props.onChange(value)
                        }
                    }}
                    options={props.options}
                    placeholder={props.placeholder}
                    search={props.search}
                    value={innerProps.input.value}
                />
            )
        }
    </Field>
);
