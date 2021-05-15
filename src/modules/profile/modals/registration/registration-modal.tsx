import {hashSync} from "bcryptjs";
import {FORM_ERROR} from "final-form";
import {omit, pick} from "lodash";
import * as React from "react";
import {Form} from "react-final-form";
import {useHistory} from "react-router-dom";
import {Button, Modal, Form as SemanticForm, Segment, Header, Message} from "semantic-ui-react";
import {FinalFormInputTextField} from "../../../../components/final-form-input-text-field";
import {login, registration} from "../../profile-actions";
import {TRegistrationFormValues} from "../../profile-types";
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
    const handleSubmit = async (values: TRegistrationFormValues) => {
        try {
            setLoadingStatus(true);

            const registrationRequestData = {
                ...omit(values, ['password', 'second_password']),
                hash_password: hashSync(values.password, '$2a$10$m/x6e5Oamg.Iyz80/1s0se'),
            };

            await registration(registrationRequestData);

            const authRequestData = pick(registrationRequestData, ['email', 'hash_password']);

            await login(authRequestData);

            setLoadingStatus(false);
            history.go(0);
        } catch (error) {
            setLoadingStatus(false);

            return {
                [FORM_ERROR]: error.toString()
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
                                    required
                                />
                                <FinalFormInputTextField
                                    icon='lock'
                                    name="password"
                                    placeholder='Пароль'
                                    required
                                    type='password'
                                />
                                <FinalFormInputTextField
                                    icon='lock'
                                    name="second_password"
                                    placeholder='Повторите пароль'
                                    required
                                    type='password'
                                />
                                <FinalFormInputTextField
                                    icon='user'
                                    name="nickname"
                                    placeholder='Основной никнейм'
                                    required
                                />
                                <FinalFormInputTextField
                                    icon='discord'
                                    name="discord"
                                    placeholder='Идентификатор в дискорде'
                                    required
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
