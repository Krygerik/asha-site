import * as React from "react";
import {useParams} from "react-router-dom";
import {Grid, Header, Loader, Message, Segment} from "semantic-ui-react";
import {Page} from "../../modules/page";
import {DictionaryHero} from "../../modules/dictionary-hero";
import {TProfilePageConnectedProps, withProfilePageConnector} from "./profile-page-connector";
import {ProfilePageEditProfile} from "./profile-page-edit-profile";
import { ProfilePageViewProfile } from "./profile-page-view-profile";

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

    return (
        <Page>
            <Header as="h1" content={`Профиль игрока: ${props.profileData.nickname}`} />
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <DictionaryHero
                                hero="Menel"
                            />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            {
                                isEditable
                                    ? (
                                        <ProfilePageEditProfile
                                            setEditableStatus={setEditableStatus}
                                        />
                                    )
                                    : (
                                        <ProfilePageViewProfile
                                            isProfileOfTheCurrentUser={props.isProfileOfTheCurrentUser}
                                            profileData={props.profileData}
                                            setEditableStatus={setEditableStatus}
                                        />
                                    )
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Page>
    )
})

export const ProfilePageController = withProfilePageConnector(ProfilePage);
