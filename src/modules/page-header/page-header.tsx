import {Button, Container, Header, Icon, Menu} from "semantic-ui-react";
import * as React from "react";
import {useHistory, withRouter} from "react-router-dom";
import {compose} from "redux";
import {noop} from "lodash";
import {TPageHeaderConnectedProps, withPageHeaderConnector} from "./page-header-connector";
import {THeaderNavItem} from "./page-header-types";
import {AuthorizationModal} from "./modals/authorization-modal";
import {RegistrationModal} from "./modals/registration";

type TProps = TPageHeaderConnectedProps;

/**
 * Заголовок страницы
 */
export const PageHeader = React.memo((props: TProps) => {
    const [isOpenRegModal, setRegModalOpenStatus] = React.useState(false);
    const [isOpenAuthModal, setAuthModalOpenStatus] = React.useState(false);

    const history = useHistory();

    /**
     * Обработка нажатия на ячейку навигации хедера
     */
    const handleMenuItemClick = (path: string) => () => {
        history.push(path);
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
            <Menu fixed="top" style={{ height: "5em" }}>
                <Container>
                    <Menu.Item>
                        <Header>
                            <Icon name="chess" />
                            Half Random Tactical Arena
                        </Header>
                    </Menu.Item>
                    {
                        props.headerMenuNavigation.map((item: THeaderNavItem) => (
                            <Menu.Item
                                as="a"
                                active={item.active}
                                key={item.link}
                                onClick={
                                    item.active
                                        ? noop
                                        : handleMenuItemClick(item.link)
                                }
                            >
                                <Header>
                                    {item.title}
                                </Header>
                            </Menu.Item>
                        ))
                    }
                    <Menu.Item position='right'>
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
                    </Menu.Item>
                </Container>
            </Menu>
        </>
    )
});

export const PageHeaderController = compose<React.FC>(
    withRouter,
    withPageHeaderConnector,
)(PageHeader);
