import {hashSync} from "bcryptjs";
import {FORM_ERROR} from "final-form";
import {
    Button,
    Form as SemanticForm,
    Header,
    Message,
    Modal,
    Segment
} from "semantic-ui-react";
import * as React from "react";
import {useHistory} from "react-router-dom";
import {Form} from "react-final-form";
import {FinalFormInputTextField} from "../../../../components/final-form-input-text-field";
import {formValidators} from "./authorization-modal-utils";
import {login} from "../../profile-actions";

type TProps = {
    open: boolean;
    setOpen: Function;
};

/**
 * Модальное окно авторизации пользователя
 * (DRY вышел из чата ^_^)
 */
export const AuthorizationModal = (props: TProps) => {
    const [isLoading, setLoadingStatus] = React.useState(false);

    const history = useHistory();

    const handleSubmit = async (values: any) => {
        try {
            setLoadingStatus(true);

            const requestBody = {
                email: values.email,
                hash_password: hashSync(values.password,'$2a$10$m/x6e5Oamg.Iyz80/1s0se'),
            };

            await login(requestBody);

            setLoadingStatus(false);
            history.go(0);
        } catch (error) {
            setLoadingStatus(false);

            return {
                [FORM_ERROR]: error.toString()
            }
        }

    };

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
                                content="Авторизация"
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
                                    content="Войти"
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
}