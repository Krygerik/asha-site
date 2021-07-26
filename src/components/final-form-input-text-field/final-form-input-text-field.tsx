import {Form as SemanticForm} from "semantic-ui-react";
import {Field} from "react-final-form";
import * as React from "react";

type TProps = {
    disabled?: boolean;
    icon?: string;
    label?: string;
    name: string;
    onChange?: any;
    placeholder?: string;
    readonly?: boolean;
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
                    disabled={props.disabled}
                    error={innerProps.meta.touched && innerProps.meta.error}
                    fluid
                    icon={props.icon}
                    iconPosition={props.icon ? 'left' : undefined}
                    label={props.label}
                    name={innerProps.input.name}
                    onChange={(e, { value }) => {
                        if (props.readonly) {
                            return;
                        }

                        innerProps.input.onChange(value);
                        if (props.onChange) {
                            props.onChange(value)
                        }
                    }}
                    placeholder={props.placeholder}
                    type={props.type}
                    style={
                        props.readonly
                            ? { opacity: 1 }
                            : {}
                    }
                    value={innerProps.input.value}
                />
            )
        }
    </Field>
);