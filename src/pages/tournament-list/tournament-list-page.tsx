import * as React from "react";
import {Button, Header, Segment} from "semantic-ui-react";
import {Page} from "../../modules/page";
import {ERoles} from "../../modules/profile";
import {createRequest} from "../../utils/create-request";
import {CreateTournamentModal} from "./create-tournament-modal";
import {TournamentList} from "./tournament-list";
import {TWithTournamentListConnectedProps, withTournamentListConnector} from "./tournament-list-page-connector";

/**
 * Страница с турнирами
 */
export const TournamentListPage = React.memo((props: TWithTournamentListConnectedProps) => {
    /**
     * Видимость модалки "Создание турнира"
     */
    const [open, setOpen] = React.useState(false);

    return (
        <Page>
            <CreateTournamentModal
                open={open}
                setOpen={setOpen}
            />
            {
                props.activeUserRoles && props.activeUserRoles.includes(ERoles.ADMIN) && (
                    <Segment>
                        <Header
                            content="Особые ролевые возможности"
                        />
                        <Button
                            color="green"
                            content="+ Создать турнир"
                            onClick={() => setOpen(true)}
                            size="large"
                            type="btn"
                        />
                    </Segment>
                )
            }
            <TournamentList
                request={() => createRequest().get('/tournament/get-all')}
            />
        </Page>
    )
});

export const TournamentListPageController = withTournamentListConnector(TournamentListPage);
