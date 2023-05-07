import * as React from "react";
import {Form} from "react-final-form";
import {useHistory} from "react-router-dom";
import arrayMutators from "final-form-arrays";
import {Button, Header, Segment} from "semantic-ui-react";
import {FinalFormInputTextField} from "../../../components/final-form-input-text-field";
import {createRequest} from "../../../utils/create-request";
import {TEditProfileInitialValues} from "../profile-page-types";

type TProps = {
    activeUserIsAdmin: boolean;
    initialValues: TEditProfileInitialValues;
    profileId: string | undefined;
    setEditableStatus: (a: boolean) => void;
}

export const ProfilePageEditProfile = React.memo((props: TProps) => {
    const history = useHistory();

    /**
     * Обработчик сохранения изменений данных пользователя
     */
    const handleSubmit = async ({ nickname, original_rating }: { nickname: string; original_rating: number; }) => {
        try {
            props.setEditableStatus(false);

            if (nickname !== props.initialValues.nickname) {
                await createRequest().post(
                    '/account/update-personal-info',
                    {
                        id: props.profileId,
                        nickname,
                    }
                );
            }

            if (props.activeUserIsAdmin && original_rating !== props.initialValues.original_rating) {
                await createRequest().post(
                    '/account/update-game-info',
                    {
                        id: props.profileId,
                        original_rating,
                    }
                );
            }

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
                        {
                            props.activeUserIsAdmin && (
                                <FinalFormInputTextField
                                    label="Рейтинг на half-rta.com"
                                    name="original_rating"
                                    required
                                />
                            )
                        }
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