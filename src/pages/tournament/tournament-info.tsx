import *  as React from "react";
import {Header, Segment} from "semantic-ui-react";
import {convertUtcToLocalDate} from "../../utils/convert-utc-to-local-date";
import {createRequest} from "../../utils/create-request";
import {withFetching} from "../../wrappers";
import {TTournament} from "./tournament-page-types";
import {TournamentRules} from "./tournament-rules";
import {UserList} from "./user-list/user-list";

type TProps = {
    data: TTournament;
    refreshData: Function;
};

/**
 * Информация о турнире
 */
const TournamentInfoComponent = React.memo((props: TProps) => (
    <Segment>
        <Header
            content={`Название турнира: ${props.data.name}`}
        />
        <Header
            content={`Дата начала: ${convertUtcToLocalDate(props.data.start_date)}`}
        />
        <Header
            content={`Статус: ${props.data.started ? "В процессе" : "Регистрация на турнир"}`}
        />
        <UserList
            refreshPage={props.refreshData}
            request={
                () => createRequest()
                    .post(
                        '/auth/get-users-by-ids',
                        { userIds: props.data.users }
                    )
            }
            tournamentId={props.data._id}
            tournamentStarted={props.data.started}
        />
        <TournamentRules />
    </Segment>
));

export const TournamentInfo = withFetching(TournamentInfoComponent);