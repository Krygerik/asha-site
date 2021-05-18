import * as React from "react";
import {ShortGameInfoTable} from "../../modules/short-game-info-table";
import {Page} from "../../modules/page";

type TProps = {};

/**
 * Компонент отображения списка всех сыгранных игр
 */
export const GamesHistory = React.memo((props: TProps) => {
    return (
        <Page>
            <ShortGameInfoTable />
        </Page>
    )
});

export const GamesController = GamesHistory;
