import {Button, Header, Loader, Message} from "semantic-ui-react";
import * as React from "react";
import {TProfileConnectedProps, withProfileConnector} from "./profile-connector";
import {AuthorizationModal} from "./modals/authorization-modal";
import {RegistrationModal} from "./modals/registration";

type TProps = TProfileConnectedProps;

/**
 * Профиль игрока в шапке
 */
const Profile = React.memo((props: TProps) => {
    const [isOpenRegModal, setRegModalOpenStatus] = React.useState(false);
    const [isOpenAuthModal, setAuthModalOpenStatus] = React.useState(false);

    /**
     * Запрос профиля
     */
    React.useEffect(() => {
        if (!props.profile) {
            props.fetchProfile();
        }
    }, []);

    if (props.isErrorFetch) {
        return (
            <Message
                color="red"
                content="Ошибка при запросе профиля"
            />
        );
    }

    if (props.isFetchingStatus) {
       return <Loader active inline="centered" size="large" />;
    }

    return (
        <>
            <AuthorizationModal
                open={isOpenAuthModal}
                setOpen={setAuthModalOpenStatus}
            />
            <RegistrationModal
                open={isOpenRegModal}
                setOpen={setRegModalOpenStatus}
            />
            {
                props.profile && (
                    <Header>
                        {props.profile?.email}
                    </Header>
                )
            }
            {
                !props.profile && (
                    <>
                        <Button
                            content="Войти"
                            onClick={() => setAuthModalOpenStatus(true)}
                        />
                        <Button
                            content="Зарегистрироваться"
                            primary
                            style={{ marginLeft: '0.5em' }}
                            onClick={() => setRegModalOpenStatus(true)}
                        />
                    </>
                )
            }
        </>
    )
});

export const ProfileController = withProfileConnector(Profile);
