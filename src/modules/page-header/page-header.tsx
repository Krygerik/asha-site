import {Container, Header, Icon, Menu} from "semantic-ui-react";
import * as React from "react";
import {Link, withRouter} from "react-router-dom";
import {compose} from "redux";
import {TPageHeaderConnectedProps, withPageHeaderConnector} from "./page-header-connector";
import {THeaderNavItem} from "./page-header-types";

type TProps = TPageHeaderConnectedProps;

/**
 * Заголовок страницы
 */
export const PageHeader = React.memo((props: TProps) => (
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
                    <Menu.Item as="a" active={item.active}>
                        {
                            item.active
                                ? (
                                    <Header>
                                        {item.title}
                                    </Header>
                                )
                                : (
                                    <Link to={item.link}>
                                        <Header>
                                            {item.title}
                                        </Header>
                                    </Link>
                                )
                        }
                    </Menu.Item>
                ))
            }
        </Container>
    </Menu>
));

export const PageHeaderController = compose<React.FC>(
    withRouter,
    withPageHeaderConnector,
)(PageHeader);
