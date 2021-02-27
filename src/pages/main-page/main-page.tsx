import * as React from "react";
import {Header, Segment} from "semantic-ui-react";
import {ShortGameInfoTable} from "../../modules/short-game-info-table";
import {Page} from "../../modules/page";

/**
 * Визуал главной страницы
 */
export const MainPage = React.memo(() => (
    <Page>
        <Segment>
            <Header content="Последние 5 сыгранных игр" />
            <ShortGameInfoTable
                config={{ items: 5 }}
            />
        </Segment>
    </Page>
));
