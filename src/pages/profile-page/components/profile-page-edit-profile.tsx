import * as React from "react";
import {Form} from "react-final-form";
import {useHistory} from "react-router-dom";
import arrayMutators from "final-form-arrays";
import {Button, Grid, Header, Message, Segment} from "semantic-ui-react";
import {FinalFormInputTextField} from "../../../components/final-form-input-text-field";
import {createRequest} from "../../../utils/create-request";
import {TEditProfileInitialValues} from "../profile-page-types";
import {FinalFormYesOrNotSelectField} from "../../../components/final-form-select-field";

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
    const handleSubmit = async ({ nickname, original_rating, visible }: TEditProfileInitialValues) => {
        try {
            props.setEditableStatus(false);

            await createRequest().post(
                props.activeUserIsAdmin
                    ? '/account/update-personal-info'
                    : '/account/update-game-info',
                {
                    id: props.profileId,
                    nickname,
                    original_rating,
                    visible,
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
            render={({ handleSubmit, dirty }) => (
                <form
                    onSubmit={handleSubmit}
                    style={{
                        fontSize: "18px",
                        fontWeight: 600,
                    }}
                >
                    <Segment>
                        <Header content="Личные данные" />
                        <Grid>
                            {false && (
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <FinalFormInputTextField
                                            label="Никнейм"
                                            name="nickname"
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            )}
                            <Grid.Row verticalAlign="middle">
                                <Grid.Column width={4}>
                                    <FinalFormYesOrNotSelectField
                                        label="Видимость аккаунта"
                                        name="visible"
                                    />
                                </Grid.Column>
                                <Grid.Column width={12}>
                                    <Message
                                        content="Отображение никнейма в общем списке игр и возможность поиска по нику"
                                        info
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            {
                                props.activeUserIsAdmin && (
                                    <Grid.Row>
                                        <Grid.Column width={4}>
                                            <FinalFormInputTextField
                                                label="Рейтинг на half-rta.com"
                                                name="original_rating"
                                            />
                                        </Grid.Column>
                                    </Grid.Row>
                                )
                            }
                        </Grid>
                    </Segment>
                    <>
                        <Button
                            color='green'
                            content="Сохранить"
                            disabled={!dirty}
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