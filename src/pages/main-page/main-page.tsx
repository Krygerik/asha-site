import * as React from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {Container, Header, Icon, Menu} from "semantic-ui-react";

/**
 * Визуал главной страницы
 */
export const MainPage = React.memo(() => {
    const match = useRouteMatch();

    return (
        <>
            <Menu fixed="top" style={{ height: "5em" }}>
                <Container>
                    <Menu.Item>
                        <Header>
                            <Icon name="chess" />
                            Half Random Tactical Arena
                        </Header>
                    </Menu.Item>
                    <Menu.Item>
                        {
                            match.path === "/"
                                ? (
                                    <Header>
                                        Главная
                                    </Header>
                                )
                                : (
                                    <Link to="/">
                                        <Header>
                                            Главная
                                        </Header>
                                    </Link>
                                )
                        }
                    </Menu.Item>
                    <Menu.Item as="a">
                        <Link to="/games">
                            <Header>
                                История игр
                            </Header>
                        </Link>
                    </Menu.Item>
                </Container>
            </Menu>
            <Container style={{ marginTop: "5em"}}>
                <Header>asd</Header>
            </Container>
        </>
    )
});
