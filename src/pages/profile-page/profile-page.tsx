import * as React from "react";
import {useParams} from "react-router-dom";
import {Grid, Header, Loader, Message, Segment} from "semantic-ui-react";
import {Page} from "../../modules/page";
import {DictionaryHero} from "../../modules/dictionary-hero";
import {TProfilePageConnectedProps, withProfilePageConnector} from "./profile-page-connector";
import { ProfilePageEditProfile } from "./components/profile-page-edit-profile";
import { ProfilePageViewProfile } from "./components/profile-page-view-profile";

/**
 * Тип параметров урла
 */
type TParams = {
    id: string;
}

/**
 * Страница информации о пользователе
 */
const ProfilePage = React.memo((
    {
        activeUserIsAdmin,
        editProfileInitialValues,
        errorMessage,
        fetchPlayerProfile,
        hasError,
        isFetching,
        isProfileOfTheCurrentUser,
        profileData,
        profilePageNickname,
    }: TProfilePageConnectedProps
) => {
    const { id }: TParams = useParams();

    const [isEditable, setEditableStatus] = React.useState(false);

    /**
     * Запрос данных профиля пользователя, чью страницу открыли
     */
    React.useEffect(() => {
        fetchPlayerProfile(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (hasError) {
        return (
            <Page>
                <Message
                    error
                    content={errorMessage}
                />
            </Page>
        )
    }

    if (isFetching) {
        return (
            <Segment>
                <Loader active inline="centered" size="large"/>
            </Segment>
        );
    }

    return (
        <Page>
            <Header as="h1" content={`Профиль игрока: ${profilePageNickname}`} />
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
                                            activeUserIsAdmin={activeUserIsAdmin}
                                            initialValues={editProfileInitialValues}
                                            profileId={profileData?._id}
                                            setEditableStatus={setEditableStatus}
                                        />
                                    )
                                    : (
                                        <ProfilePageViewProfile
                                            activeUserIsAdmin={activeUserIsAdmin}
                                            isProfileOfTheCurrentUser={isProfileOfTheCurrentUser}
                                            profileData={profileData}
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
