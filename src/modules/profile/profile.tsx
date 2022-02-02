import * as React from "react";
import { useHistory } from "react-router-dom";
import {Button, Dropdown, Header, Icon, Loader, Menu, Message} from "semantic-ui-react";
import {TProfileConnectedProps, withProfileConnector} from "./profile-connector";

type TProps = TProfileConnectedProps;

/**
 * Профиль игрока в шапке
 */
const Profile = React.memo((
    {
        errorMessage,
        fetchProfile,
        isFetchingStatus,
        nickname,
        profile,
        removeProfileData,
    }: TProps
) => {
    const history = useHistory();

    /**
     * Обработчик выхода из аккаунта
     */
    const handleOnClickLogout = () => removeProfileData();

    /**
     * Обработчик захода в свой профиль
     */
    const handleClickMyProfile = () => history.push(`/profile/${profile?._id}`);

    /**
     * Обработчик перехода на страницу калькулятора инициатив
     */
    const handleClickCalculators = () => history.push('/calculators');

    /**
     * Обработчик клика авторизации
     */
    const handleClickAuthorization = () => {
        window.open(process.env.REACT_APP_API_URL + "/account/discord-registration", "_self")
    }

    /**
     * Запрос профиля
     */
    React.useEffect(() => {
        fetchProfile();
    }, []);

    if (errorMessage) {
        return (
            <Menu.Item position="right">
                <Message
                    color="red"
                    content={errorMessage}
                />
            </Menu.Item>
        );
    }
    if (isFetchingStatus) {
        return <Loader active inline="centered" size="large" />;
    }

    return (
        <>
            {
                profile && (
                    <Dropdown as={Header} text="Профиль" className='right item'>
                        <Dropdown.Menu>
                            <Dropdown.Header content={nickname} />
                            <Dropdown.Divider />
                            <Dropdown.Item
                                as={'a'}
                                content="Мой профиль"
                                onClick={handleClickMyProfile}
                            />
                            <Dropdown.Item
                                as={'a'}
                                content="Рейтинг игроков"
                                onClick={() => history.push('/rating')}
                            />
                            <Dropdown.Item
                                as={'a'}
                                content="Калькулятор инициатив"
                                onClick={handleClickCalculators}
                            />
                            <Dropdown.Item
                                content="Выход"
                                onClick={handleOnClickLogout}
                            />
                        </Dropdown.Menu>
                    </Dropdown>
                )
            }
            {
                !profile && (
                    <Menu.Item position="right">
                        <Button
                            icon={true}
                            labelPosition='right'
                            onClick={handleClickAuthorization}
                            primary
                            style={{ marginLeft: '0.5em' }}
                        >
                            Войти
                            <Icon name='discord' />
                        </Button>
                    </Menu.Item>
                )
            }
        </>
    )
});

export const ProfileController = withProfileConnector(Profile);
