import {Header, Segment, Message, Grid, Loader, Rating} from "semantic-ui-react";
import * as React from "react";
import {useParams} from "react-router-dom";
import {Page} from "../../modules/page";
import {TGameConnectedProps, withGameConnector} from "./game-connector";
import {PlayerInfo} from "./components/player-info";
import {convertUtcToLocalDate} from "../../utils/convert-utc-to-local-date";

/**
 * Тип параметров урла для страницы подробной информации
 */
type TGameParams = {
    id: string;
}

/**
 * Маппинг процентиля силы оставшейся армии на рейтинг
 */
const mapPercentileToRating = (percentile: number) => {
    if (percentile < 51) {
        return 1;
    }
    if (percentile < 65) {
        return 2;
    }
    if (percentile < 80) {
        return 3;
    }
    if (percentile < 95) {
        return 4;
    }

    return 5;
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

    if (!props.isFetchedGameInfo) {
        return (
            <Segment>
                <Loader active inline="centered" size="large"/>
            </Segment>
        );
    }

    if (props.hasError) {
        return <Message error content="Ошибка при запросе данных с сервера" />
    }

    return (
        <Page>
            <Header as="h1" content={`Информация об игре №${id}`} />
            <Segment>
                <Header content={`Дата игры: ${
                    props.gameInfo.date
                        ? convertUtcToLocalDate(props.gameInfo.date)
                        : 'Не определена'
                }`} />
                <Header content={`Версия карты: ${props.gameInfo.map_version}`} />
                <Header content={`Победитель: ${props.winnerNickname}`} />
                <Header>
                    Зрелищность:
                    <Rating
                        defaultRating={mapPercentileToRating(props.gameInfo.percentage_of_army_left)}
                        disabled
                        icon='star'
                        maxRating={5}
                        size='massive'
                    />
                </Header>


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
            </Segment>
        </Page>
    );
});

export const GameController = withGameConnector(Game);
