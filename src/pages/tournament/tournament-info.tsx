import *  as React from "react";
import {Header, Segment} from "semantic-ui-react";
import {withFetching} from "../../wrappers";
import {TTournament} from "./tournament-page-types";

type TProps = {
    data: TTournament;
};

/**
 * Информация о турнире
 */
const TournamentInfoComponent = React.memo((props: TProps) => (
    <Segment>
        <Header
            content={`Дата начала: ${props.data.start_date}`}
        />
    </Segment>
));

export const TournamentInfo = withFetching(TournamentInfoComponent);