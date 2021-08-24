import * as React from "react";
import {Header, Segment} from "semantic-ui-react";
import {ShortGameInfoTable} from "../../modules/short-game-info-table";
import {Page} from "../../modules/page";
import {createRequest} from "../../utils/create-request";
import {TournamentList} from "../../modules/tournament-list";
import { PlayerRatingList } from "../../modules/player-rating-list";

/**
 * Визуал главной страницы
 */
export const MainPage = React.memo(() => (
    <Page>
        <TournamentList
            header="Список актуальных турниров"
            request={() => createRequest().get('/tournament/get-all')}
            withoutRefresh
        />
        <Segment>
            <Header content="Последние 5 сыгранных игр" />
            <ShortGameInfoTable
                countItems={5}
                hideFilter
                hidePagination
            />
        </Segment>
        <PlayerRatingList
            request={() => createRequest().get('/auth/get-player-rating-list')}
            withoutRefresh
        />
    </Page>
));
