import {Form as SemanticForm} from "semantic-ui-react";
import {Field} from "react-final-form";
import * as React from "react";

type TProps = {
    icon?: string;
    label?: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
};

const notEmptyValidator = (value?: string) => (value ? undefined : 'Поле обязательно для заполнения');

export const FinalFormInputTextField = (props: TProps) => (
    <Field
        name={props.name}
        validate={props.required ? notEmptyValidator : undefined}
    >
        {
            innerProps => (
                <SemanticForm.Input
                    error={innerProps.meta.touched && innerProps.meta.error}
                    fluid
                    icon={props.icon}
                    iconPosition={props.icon ? 'left' : undefined}
                    label={props.label}
                    name={innerProps.input.name}
                    onChange={innerProps.input.onChange}
                    placeholder={props.placeholder}
                    type={props.type}
                    value={innerProps.input.value}
                />
            )
        }
    </Field>
);