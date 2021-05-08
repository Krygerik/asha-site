import {Form as SemanticForm} from "semantic-ui-react";
import {Field} from "react-final-form";
import * as React from "react";

type TProps = {
    icon: string;
    name: string;
    placeholder?: string;
    type?: string;
};

export const FinalFormInputTextField = (props: TProps) => (
    <Field name={props.name}>
        {
            innerProps => (
                <SemanticForm.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    error={innerProps.meta.touched && innerProps.meta.error}
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