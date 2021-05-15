
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

    return errors
};