import * as React from "react";
import {Field} from "react-final-form";
import {DateTimeInput} from "semantic-ui-calendar-react";
import {REPRESENTATIVE_DATE_MASK} from "../../common/constants";

type TProps = {
    label?: string;
    name: string;
    placeholder?: string;
    required?: boolean;
};

const notEmptyValidator = (value?: string) => (value ? undefined : 'Поле обязательно для заполнения');

/**
 * Компонент для выбора даты
 */
export const FinalFormDateTimeInputField = React.memo((props: TProps) => (
    <Field
        name={props.name}
        validate={props.required ? notEmptyValidator : undefined}
    >
        {
            innerProps => (
                <DateTimeInput
                    dateTimeFormat={REPRESENTATIVE_DATE_MASK}
                    error={innerProps.meta.touched && innerProps.meta.error}
                    label={props.label}
                    name={innerProps.input.name}
                    onChange={(e, { value }) => innerProps.input.onChange(value)}
                    placeholder={props.placeholder}
                    value={innerProps.input.value || ''}
                />
            )
        }
    </Field>
));
