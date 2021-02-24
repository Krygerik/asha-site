import * as React from "react";
import {Container, Header, Segment} from "semantic-ui-react";
import {PageHeader} from "../../modules/page-header";
import {ShortGameInfoTable} from "../../modules/short-game-info-table";

/**
 * Визуал главной страницы
 */
export const MainPage = React.memo(() => (
    <>
        <PageHeader />
        <Container style={{ marginTop: "6em"}}>
            <Segment>
                <Header content="Последние 5 сыгранных игр" />
                <ShortGameInfoTable
                    config={{ items: 5 }}
                />
            </Segment>
        </Container>
    </>
));
