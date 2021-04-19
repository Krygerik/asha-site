import {Header, Segment, Message, Grid} from "semantic-ui-react";
import * as React from "react";
import {useParams} from "react-router-dom";
import {Page} from "../../modules/page";
import {TGameConnectedProps, withGameConnector} from "./game-connector";
import {PlayerInfo} from "./components/player-info";

/**
 * Тип параметров урла для страницы подробной информации
 */
type TGameParams = {
    id: string;
}

/**
 * Страница подробной информации о сражении
 */
export const Game = React.memo((props: TGameConnectedProps) => {
    const { id }: TGameParams = useParams();

    /**
     * Запрос всех данных по игре
     */
    React.useEffect(() => {
        props.fetchFullGameInfo(id);
    },[]);

    return (
        <Page>
            <Header as="h1" content={`Информация об игре №${id}`} />
            <Segment loading={!props.isFetchedGameInfo}>
                {
                    props.hasError && (
                        <Message error content="Ошибка при запросе данных с сервера" />
                    )
                }
                {
                    props.isFetchedGameInfo && !props.hasError && (
                        <>
                            <Header content={`Дата игры: ${props.gameInfo.date}`} />
                            <Header content={`Победитель: ${props.winnerNickname}`} />
                            <Grid columns={2}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <PlayerInfo
                                            player={props.redPlayer}
                                        />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <PlayerInfo
                                            player={props.bluePlayer}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </>
                    )
                }
            </Segment>
        </Page>
    );
});

export const GameController = withGameConnector(Game);
