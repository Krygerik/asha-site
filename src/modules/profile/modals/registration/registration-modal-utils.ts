
const PASSWORDS_NOT_EQUALS_ERROR = 'Пароли не совпадают';

export const formValidators = (values: any) => {
    const errors: {
        password?: string,
        second_password?: string,
    } = {};

    if (values.password !== values.second_password) {
        errors.password = PASSWORDS_NOT_EQUALS_ERROR;
        errors.second_password = PASSWORDS_NOT_EQUALS_ERROR;
    }

    return errors
};
