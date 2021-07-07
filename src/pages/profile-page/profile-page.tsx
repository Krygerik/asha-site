import * as React from "react";
import {Link, useParams} from "react-router-dom";
import {Header, Loader, Message, Segment} from "semantic-ui-react";
import {Page} from "../../modules/page";
import {ERoles} from "../../modules/profile";
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

    return (
        <Page>
            <Header as="h1" content={`Профиль игрока №: ${id}`} />
            <Segment>
                <Header content={`Никнейм: ${props.profileData?.nickname}`} />
                <Header content={`Почта: ${props.profileData?.email}`} />
                <Header content={`Дискорд: ${props.profileData?.discord}`} />
                <Header content={`Рейтинг игрока: ${props.profileData?.rating}`} />
                <Header content={`Роли игрока: ${props.profileData?.roles?.map(translateRole).join(', ')}`} />
                <Header>
                    {`Турниры пользователя: `}
                    {props.profileData?.tournaments?.map((tourId: string) => (
                        <Link to={`/tournament/${tourId}`} target="_blank">
                            {props.profileData?.mapTournamentNameToId[tourId]}
                        </Link>
                    ))}
                </Header>
            </Segment>
        </Page>
    )
})

export const ProfilePageController = withProfilePageConnector(ProfilePage);
