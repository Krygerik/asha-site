import * as React from "react";
import {Button, Header, Segment} from "semantic-ui-react";
import {Page} from "../../modules/page";
import {CreateTournamentModal} from "./create-tournament-modal";

/**
 * Страница с турнирами
 */
export const TournamentPage = React.memo(() => {
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
            <Segment>
                <Header
                    content="Текущий турнир"
                />
                {
                    // TODO: Функционал по текущему турниру
                }
            </Segment>
        </Page>
    )
});