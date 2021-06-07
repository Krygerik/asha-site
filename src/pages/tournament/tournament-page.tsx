import * as React from "react";
import {Button, Header, Segment} from "semantic-ui-react";
import {Page} from "../../modules/page";

/**
 * Страница с турнирами
 */
export const TournamentPage = React.memo(() => {
    /**
     * Обработчик нажатия на кнопку создания турнира
     */
    const handleClickCreateTournament = () => () => {
        // TODO: открытие модалки создания турнира
    }

    return (
        <Page>
            <Segment>
                <Header
                    content="Особые возможности"
                />
                <Button
                    color="green"
                    content="+ Создать турнир"
                    onClick={handleClickCreateTournament}
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