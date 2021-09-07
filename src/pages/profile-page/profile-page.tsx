import arrayMutators from "final-form-arrays";
import * as React from "react";
import {Form} from "react-final-form";
import {FieldArray} from "react-final-form-arrays";
import {useHistory, useParams} from "react-router-dom";
import {Button, Grid, Header, Loader, Message, Segment} from "semantic-ui-react";
import {FinalFormInputTextField} from "../../components/final-form-input-text-field";
import {Page} from "../../modules/page";
import {ERoles} from "../../modules/profile";
import {DictionaryHero} from "../../modules/dictionary-hero";
import {createRequest} from "../../utils/create-request";
import {TProfilePageConnectedProps, withProfilePageConnector} from "./profile-page-connector";

/**
 * Тип параметров урла
 */
type TParams = {
    id: string;
}

/**
 * Страница информации о пользователе
 */
const ProfilePage = React.memo((props: TProfilePageConnectedProps) => {
    const { id }: TParams = useParams();
    const history = useHistory();

    const [isEditable, setEditableStatus] = React.useState(false);

    /**
     * Запрос данных профиля пользователя, чью страницу открыли
     */
    React.useEffect(() => {
        props.fetchPlayerProfile(id);
    }, []);

    if (props.hasError) {
        return (
            <Page>
                <Message
                    error
                    content={props.errorMessage}
                />
            </Page>
        )
    }

    if (props.isFetching) {
        return (
            <Segment>
                <Loader active inline="centered" size="large"/>
            </Segment>
        );
    }

    /**
     * Приведение роли к русскому описанию
     */
    const translateRole = (role: ERoles) => {
        if (role === ERoles.ADMIN) {
            return 'Админ';
        }

        return 'Роль не определена'
    }

    /**
     * Обработчик сохранения изменений данных пользователя
     */
    const handleSubmit = async ({ discord, nickname }: { discord?: string; nickname?: string }) => {
        try {
            setEditableStatus(false);

            await createRequest().post(
                '/auth/update-user-info',
                { discord, nickname }
            );
            history.go(0);
        } catch (e) {
            throw new Error(e.response?.data?.MESSAGE || e);
        }
    }

    return (
        <Page>
            <Header as="h1" content={`Профиль игрока: ${props.profileData?.nickname}`} />
            <Form
                onSubmit={handleSubmit}
                initialValues={{
                    nickname: props.profileData?.nickname,
                    email: props.profileData?.email,
                    discord: props.profileData?.discord,
                    rating: props.profileData?.rating,
                    roles: props.profileData?.roles,
                    tournaments: props.profileData?.tournaments,
                }}
                mutators={{ ...arrayMutators }}
                render={({ handleSubmit }) => (
                    <Segment>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={4}>
                                    <DictionaryHero
                                        hero="Menel"
                                    />
                                </Grid.Column>
                                <Grid.Column width={12}>
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
                                                readonly={!isEditable}
                                                name="nickname"
                                                label="Никнейм"
                                            />
                                            <FinalFormInputTextField
                                                readonly
                                                name="email"
                                                label="Почта"
                                            />
                                            <FinalFormInputTextField
                                                readonly={!isEditable}
                                                name="discord"
                                                label="Дискорд"
                                            />
                                        </Segment>
                                        <Segment>
                                            <Header content="Игровые данные" />

                                            <FinalFormInputTextField
                                                readonly
                                                name="rating"
                                                label="Рейтинг игрока"
                                            />

                                            <FieldArray name="roles">
                                                {
                                                    ({fields}) => fields.map((name: string) => (
                                                        <FinalFormInputTextField
                                                            readonly
                                                            name={name}
                                                            key={name}
                                                            label="Роль"
                                                        />
                                                    ))
                                                }
                                            </FieldArray>

                                            <FieldArray name="tournaments">
                                                {
                                                    ({fields}) => fields.map((name: string) => (
                                                        <FinalFormInputTextField
                                                            readonly
                                                            name={name}
                                                            key={name}
                                                            label="Турнир"
                                                        />
                                                    ))
                                                }
                                            </FieldArray>
                                        </Segment>
                                        {
                                            // <Header content={`Роли игрока: ${props.profileData?.roles?.map(translateRole).join(', ')}`} />
                                        }
                                        {
                                            // props.profileData?.tournaments?.length && (
                                            //     <Header>
                                            //         {`Турниры пользователя: `}
                                            //         {props.profileData?.tournaments?.map((tourId: string) => (
                                            //             <Link to={`/tournament/${tourId}`} target="_blank">
                                            //                 {props.profileData?.mapTournamentNameToId[tourId]}
                                            //             </Link>
                                            //         ))}
                                            //     </Header>
                                            // )
                                        }
                                        {
                                            !isEditable
                                                ? (
                                                    <Button
                                                        color='orange'
                                                        content="Изменить"
                                                        size='large'
                                                        type="button"
                                                        onClick={() => setEditableStatus(true)}
                                                    />
                                                )
                                                : (
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
                                                            onClick={() => setEditableStatus(false)}
                                                        />
                                                    </>
                                                )
                                        }
                                    </form>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                )}
            />
        </Page>
    )
})

export const ProfilePageController = withProfilePageConnector(ProfilePage);
