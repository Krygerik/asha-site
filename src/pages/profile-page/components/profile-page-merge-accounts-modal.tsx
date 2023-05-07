import * as React from "react";
import { useHistory } from "react-router-dom";
import {hashSync} from "bcryptjs";
import {FORM_ERROR} from "final-form";
import { Modal, Form as SemanticForm, Header, Segment, Message, Button } from "semantic-ui-react";
import { Form } from "react-final-form";
import { FinalFormInputTextField } from "../../../components/final-form-input-text-field";
import {createRequest} from "../../../utils/create-request";

type TProps = {
    id: string | undefined;
    open: boolean;
    setOpen: (value: boolean) => void;
};

/**
 * Модалка авторизации старого аккаунта для слияния аккаунтов
 */
export const ProfilePageMergeAccountsModal = React.memo((
    {
        id,
        open,
        setOpen,
    }: TProps
) => {
    const [isLoading, setLoadingStatus] = React.useState(false);

    const history = useHistory();

    const handleSubmit = async (values: any) => {
        try {
            setLoadingStatus(true);

            if (!id) {
                return new Error('Отсутствует id профиля');
            }

            const response = await createRequest().post(
                '/account/merge-accounts',
                {
                    id,
                    email: values.email,
                    hash_password: hashSync(values.password, '$2a$10$m/x6e5Oamg.Iyz80/1s0se'),
                }
            );

            console.log('response:', response);

            setLoadingStatus(false);
            history.push(`/profile/${response?.data?.DATA?._id}`);
            history.go(0);
        } catch (error) {
            setLoadingStatus(false);

            return {
                [FORM_ERROR]: error?.response?.data?.MESSAGE || error.toString()
            }
        }

    };

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="tiny"
        >
            <Modal.Content>
                <Form
                    onSubmit={handleSubmit}
                    initialValues={{}}
                    render={({handleSubmit, submitError}) => (
                        <SemanticForm size='large' onSubmit={handleSubmit}>
                            <Header
                                as='h2'
                                color='teal'
                                content="Подтверждение старого аккаунта"
                                textAlign='center'
                            />
                            <Segment
                                stacked
                                loading={isLoading}
                            >
                                <FinalFormInputTextField
                                    icon='user'
                                    label='E-mail адрес'
                                    name="email"
                                    required
                                />
                                <FinalFormInputTextField
                                    icon='lock'
                                    label='Пароль'
                                    name="password"
                                    required
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
                                    content="Запустить слияние"
                                    fluid
                                    loading={isLoading}
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
})

ProfilePageMergeAccountsModal.displayName = 'ProfilePageMergeAccountsModal';
