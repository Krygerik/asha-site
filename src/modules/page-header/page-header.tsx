import {Container, Header, Icon, Menu} from "semantic-ui-react";
import * as React from "react";
import {useHistory, withRouter} from "react-router-dom";
import {compose} from "redux";
import {noop} from "lodash";
import {Profile} from "../profile";
import {TPageHeaderConnectedProps, withPageHeaderConnector} from "./page-header-connector";
import {THeaderNavItem} from "./page-header-types";

type TProps = TPageHeaderConnectedProps;

/**
 * Заголовок страницы
 */
export const PageHeader = React.memo((props: TProps) => {
    const history = useHistory();

    /**
     * Обработка нажатия на ячейку навигации хедера
     */
    const handleMenuItemClick = (path: string) => () => {
        history.push(path);
    }

    return (
        <>
            <Menu fixed="top" style={{ height: "5em" }}>
                <Container>
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
                                    {item.icon && (
                                        <Icon name={item.icon} />
                                    )}
                                    {item.title}
                                </Header>
                            </Menu.Item>
                        ))
                    }
                    <Profile />
                </Container>
            </Menu>
        </>
    )
});

export const PageHeaderController = compose<React.FC>(
    withRouter,
    withPageHeaderConnector,
)(PageHeader);
