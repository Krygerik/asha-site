import * as React from "react";
import {Container} from "semantic-ui-react";
import {PageHeader} from "../page-header";
import {PropsWithChildren} from "react";

/**
 * Компонент общей структуры страницы
 */
export const Page = React.memo((props: PropsWithChildren<{}>) => (
    <>
        <PageHeader />
        <Container style={{ marginTop: "6em"}}>
            {props.children}
        </Container>
    </>
));
