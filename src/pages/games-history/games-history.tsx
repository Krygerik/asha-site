import * as React from "react";
import {Container} from "semantic-ui-react";
import {PageHeader} from "../../modules/page-header";
import {ShortGameInfoTable} from "../../modules/short-game-info-table";

type TProps = {};

/**
 * Компонент отображения списка всех сыгранных игр
 */
export const GamesHistory = React.memo((props: TProps) => {
    return (
        <>
            <PageHeader />
            <Container  style={{ marginTop: "6em"}}>
                <ShortGameInfoTable />
            </Container>
        </>
    )
});

export const GamesController = GamesHistory;
