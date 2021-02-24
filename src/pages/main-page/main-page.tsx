import * as React from "react";
import {Container, Header} from "semantic-ui-react";
import {PageHeader} from "../../modules/page-header";

/**
 * Визуал главной страницы
 */
export const MainPage = React.memo(() => (
    <>
        <PageHeader />
        <Container style={{ marginTop: "6em"}}>
            <Header>asd</Header>
        </Container>
    </>
));
