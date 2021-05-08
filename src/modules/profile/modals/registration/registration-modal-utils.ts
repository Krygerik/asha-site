
const PASSWORDS_NOT_EQUALS_ERROR = 'Пароли не совпадают';
const FIELD_EXIST_ERROR = 'Поле обязательно для заполнения';

export const formValidators = (values: any) => {
    const errors: {
        email?: string,
        password?: string,
        second_password?: string,
    } = {};

    if (!values.email) {
        errors.email = FIELD_EXIST_ERROR;
    }
    if (!values.password) {
        errors.password = FIELD_EXIST_ERROR;
    }
    if (!values.second_password) {
        errors.second_password = FIELD_EXIST_ERROR;
    }
    if (values.password !== values.second_password) {
        errors.password = PASSWORDS_NOT_EQUALS_ERROR;
        errors.second_password = PASSWORDS_NOT_EQUALS_ERROR;
    }

    return errors
};
