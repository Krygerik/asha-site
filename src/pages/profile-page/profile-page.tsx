import * as React from "react";
import {TProfilePageConnectedProps, withProfilePageConnector} from "./profile-page-connector";
import {useParams} from "react-router-dom";
import {Header, Loader, Message, Segment} from "semantic-ui-react";
import {Page} from "../../modules/page";

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

    return (
        <Page>
            <Header as="h1" content={`Профиль игрока №: ${id}`} />
            <Segment>
                <Header content={`Никнейм: ${props.profileData?.nickname}`} />
                <Header content={`Почта: ${props.profileData?.email}`} />
                <Header content={`Дискорд: ${props.profileData?.discord}`} />
            </Segment>
        </Page>
    )
})

export const ProfilePageController = withProfilePageConnector(ProfilePage);
