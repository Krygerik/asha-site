import * as React from "react";
import {Field, Form } from "react-final-form";
import {Button, Modal, Form as SemanticForm, Segment, Header, Message} from "semantic-ui-react";
import {formValidators} from "./registration-modal-utils";
import {genSaltSync, hashSync} from "bcryptjs";
import {FORM_ERROR} from "final-form";
import {useHistory} from "react-router-dom";
import {createRequest} from "../../../../utils/create-request";

type TProps = {
    setOpen: Function;
    open: boolean;
};

/**
 * Модальное окно регистрации пользователя
 */
export const RegistrationModal = React.memo((props: TProps) => {
    const [isLoading, setLoadingStatus] = React.useState(false);
    const history = useHistory();

    /**
     * Обработчик регистрации
     */
    const handleSubmit = async (values: any) => {
        try {
            const requestBody = {
                email: values.email,
                hash_password: hashSync(values.password, genSaltSync(10)),
            };

            setLoadingStatus(true);

            const regResponse = await createRequest().post('/auth/registration', requestBody);

            if (regResponse.data.STATUS !== 'SUCCESS') {
                return {
                    [FORM_ERROR]: regResponse.data.MESSAGE
                }
            }

            const authResponse = await createRequest().post('/auth/login', requestBody);

            if (authResponse.data.STATUS !== 'SUCCESS') {
                return {
                    [FORM_ERROR]: authResponse.data.MESSAGE
                }
            }

            localStorage.setItem('token', authResponse.data.DATA.token);

            setLoadingStatus(false);
            history.go(0);
        } catch (error) {
            setLoadingStatus(false);

            const message = error.response.data.STATUS === 'FAILURE'
                ? error.response.data.MESSAGE
                : 'Непредвиденная ошибка сервера'

            return {
                [FORM_ERROR]: message
            }
        }
    }

    return (
        <Modal
            onClose={() => props.setOpen(false)}
            onOpen={() => props.setOpen(true)}
            open={props.open}
            size="tiny"
        >
            <Modal.Content>
                <Form
                    onSubmit={handleSubmit}
                    initialValues={{}}
                    validate={formValidators}
                    render={({handleSubmit, submitError}) => (
                        <SemanticForm size='large' onSubmit={handleSubmit}>
                            <Header
                                as='h2'
                                color='teal'
                                textAlign='center'
                                content="Регистрация"
                            />
                            <Segment
                                stacked
                                loading={isLoading}
                            >
                                <Field name="email">
                                    {
                                        props => (
                                            <SemanticForm.Input
                                                fluid
                                                icon='user'
                                                error={props.meta.touched && props.meta.error}
                                                iconPosition='left'
                                                name={props.input.name}
                                                onChange={props.input.onChange}
                                                placeholder='E-mail адрес'
                                                value={props.input.value}
                                            />
                                        )
                                    }
                                </Field>
                                <Field name="password">
                                    {
                                        props => (
                                            <SemanticForm.Input
                                                fluid
                                                icon='lock'
                                                iconPosition='left'
                                                error={props.meta.touched && props.meta.error}
                                                name={props.input.name}
                                                onChange={props.input.onChange}
                                                placeholder='Пароль'
                                                type='password'
                                                value={props.input.value}
                                            />
                                        )
                                    }
                                </Field>
                                <Field name="second_password">
                                    {
                                        props => (
                                            <SemanticForm.Input
                                                fluid
                                                icon='lock'
                                                iconPosition='left'
                                                error={props.meta.touched && props.meta.error}
                                                name={props.input.name}
                                                onChange={props.input.onChange}
                                                placeholder='Повторите пароль'
                                                type='password'
                                                value={props.input.value}
                                            />
                                        )
                                    }
                                </Field>
                                {
                                    submitError && (
                                        <Message
                                            color="red"
                                            content={submitError}
                                        />
                                    )
                                }
                                <Button
                                    color='teal'
                                    content="Зарегистрироваться"
                                    fluid
                                    size='large'
                                    type="submit"
                                />
                            </Segment>
                        </SemanticForm>
                    )}
                />
            </Modal.Content>
        </Modal>
    )
});
