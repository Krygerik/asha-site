import {hashSync} from "bcryptjs";
import {FORM_ERROR} from "final-form";
import * as React from "react";
import {Form } from "react-final-form";
import {useHistory} from "react-router-dom";
import {Button, Modal, Form as SemanticForm, Segment, Header, Message} from "semantic-ui-react";
import {FinalFormInputTextField} from "../../../../components/final-form-input-text-field";
import {createRequest} from "../../../../utils/create-request";
import {formValidators} from "./registration-modal-utils";

type TProps = {
    open: boolean;
    setOpen: Function;
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
            setLoadingStatus(true);

            const requestBody = {
                email: values.email,
                hash_password: hashSync(values.password, '$2a$10$m/x6e5Oamg.Iyz80/1s0se'),
            };

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
                                <FinalFormInputTextField
                                    icon='user'
                                    name="email"
                                    placeholder='E-mail адрес'
                                />
                                <FinalFormInputTextField
                                    icon='lock'
                                    name="password"
                                    placeholder='Пароль'
                                    type='password'
                                />
                                <FinalFormInputTextField
                                    icon='lock'
                                    name="second_password"
                                    placeholder='Повторите пароль'
                                    type='password'
                                />
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
