import * as React from "react";
import {Page} from "../../modules/page";
import {Header} from "semantic-ui-react";
import {createRequest} from "../../utils/create-request";
import {PlayerRatingList} from "../../modules/player-rating-list";

/**
 * Страница рейтинга всех игроков
 */
export const RatingPage = React.memo(() => (
    <Page>
        <Header as="h1" content='Рейтинг игроков' />
        <PlayerRatingList
            request={() => createRequest().get('/account/get-player-rating-list')}
        />
    </Page>
));
