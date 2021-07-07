import * as React from "react";
import {useParams} from "react-router-dom";
import {Header} from "semantic-ui-react";
import {Page} from "../../modules/page";
import {createRequest} from "../../utils/create-request";
import {TournamentInfo} from "./tournament-info";
import {TTournamentParams} from "./tournament-page-types";

/**
 * Страница отображения полной информации о турнире
 */
export const TournamentPage = React.memo(() => {
    const { id }: TTournamentParams = useParams();

    return (
        <Page>
            <Header as="h1" content={`Информация о турнире №${id}`} />
            <TournamentInfo
                request={() => createRequest().get('/tournament/' + id)}
            />
        </Page>
    )
});
