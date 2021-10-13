import * as React from "react";
import {Form} from "react-final-form";
import {useHistory} from "react-router-dom";
import arrayMutators from "final-form-arrays";
import {Button, Header, Segment} from "semantic-ui-react";
import {FinalFormInputTextField} from "../../components/final-form-input-text-field";
import {createRequest} from "../../utils/create-request";
import {TEditProfileInitialValues} from "./profile-page-types";

type TProps = {
    initialValues: TEditProfileInitialValues;
    profileId: string;
    setEditableStatus: (a: boolean) => void;
}

export const ProfilePageEditProfile = React.memo((props: TProps) => {
    const history = useHistory();

    /**
     * Обработчик сохранения изменений данных пользователя
     */
    const handleSubmit = async ({ discord, nickname }: { discord?: string; nickname?: string }) => {
        try {
            props.setEditableStatus(false);

            await createRequest().post(
                '/auth/update-user-info',
                {
                    discord,
                    id: props.profileId,
                    nickname,
                }
            );
            history.go(0);
        } catch (e) {
            throw new Error(e.response?.data?.MESSAGE || e);
        }
    }

    return (
        <Form
            onSubmit={handleSubmit}
            initialValues={props.initialValues}
            mutators={{ ...arrayMutators }}
            render={({ handleSubmit }) => (
                <form
                    onSubmit={handleSubmit}
                    style={{
                        fontSize: "18px",
                        fontWeight: 600,
                    }}
                >
                    <Segment>
                        <Header content="Личные данные" />
                        <FinalFormInputTextField
                            label="Никнейм"
                            name="nickname"
                            required
                        />
                        <FinalFormInputTextField
                            label="Почта"
                            name="email"
                            required
                        />
                        <FinalFormInputTextField
                            label="Дискорд"
                            name="discord"
                            required
                        />
                    </Segment>
                    <>
                        <Button
                            color='green'
                            content="Сохранить"
                            size='large'
                            type="submit"
                        />
                        <Button
                            color='grey'
                            content="Отменить"
                            size='large'
                            type="button"
                            onClick={() => props.setEditableStatus(false)}
                        />
                    </>
                </form>
            )}
        />
    )
})