import {Header, Loader, Segment, Message} from "semantic-ui-react";
import * as React from "react";
import {useParams} from "react-router-dom";
import {Page} from "../../modules/page";
import {TGameConnectedProps, withGameConnector} from "./game-connector";

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
            <Segment>
                {
                    !props.isFetchedGameInfo && (
                        <Loader active inline="centered" size={"large"}/>
                    )
                }
                {
                    props.isFetchedGameInfo && props.hasError && (
                        <Message error content="Ошибка при запросе данных с сервера" />
                    )
                }
                {
                    props.isFetchedGameInfo && !props.hasError && (
                        <div></div>
                    )
                }
            </Segment>
        </Page>
    );
});

export const GameController = withGameConnector(Game);
