import React from "react";
import { FinalFormSelectField, TFinalFormSelectFieldProps } from "./final-form-select-field";

export type TFinalFormYesOrNotSelectField = Omit<TFinalFormSelectFieldProps, "options">;

const YES_OR_NOT_OPTIONS = [
    {
        key: "Да",
        text: "Да",
        value: true,
    },
    {
        key: "Нет",
        text: "Нет",
        value: false
    },
];

/**
 * Выпадающий список булевых значений
 */
export const FinalFormYesOrNotSelectField = (props: TFinalFormYesOrNotSelectField) => {
    return (
        <FinalFormSelectField
            {...props}
            options={YES_OR_NOT_OPTIONS}
        />
    );
}