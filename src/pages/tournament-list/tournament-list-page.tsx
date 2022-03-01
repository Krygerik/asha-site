import * as React from "react";
import {Button, Header, Segment} from "semantic-ui-react";
import {Page} from "../../modules/page";
import {ERoles} from "../../modules/profile";
import {createRequest} from "../../utils/create-request";
import {WithPermissionWrapper} from "../../wrappers/with-permission";
import {CreateTournamentModal} from "./create-tournament-modal";
import {TournamentList} from "../../modules/tournament-list";

/**
 * Страница с турнирами
 */
export const TournamentListPage = React.memo(() => {
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
            <WithPermissionWrapper accessRole={ERoles.ADMIN}>
                <Segment>
                    <Header
                        content="Особые ролевые возможности"
                    />
                    <Button
                        color="green"
                        content="+ Создать турнир"
                        onClick={() => setOpen(true)}
                        size="large"
                        type="button"
                    />
                </Segment>
            </WithPermissionWrapper>
            <TournamentList
                request={() => createRequest().get('/tournament/get-all')}
            />
        </Page>
    )
});
