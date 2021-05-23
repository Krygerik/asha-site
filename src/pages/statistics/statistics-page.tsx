import * as React from "react";
import {compose} from "redux";
import {Loader, Message, Segment, Table} from "semantic-ui-react";
import {Page} from "../../modules/page";
import {DictionaryContext, EDictionaryName, withDictionaries} from "../../modules/dictionary";
import {TRaceRecord} from "../../modules/dictionary/dictionary-types";
import {TStatisticsPageConnectedProps, withStatisticsPageConnector} from "./statistics-page-connector";

/**
 * Страница отображения статистик
 */
const StatisticPage = React.memo((props: TStatisticsPageConnectedProps) => {
    const { getDictionaryRecords } = React.useContext(DictionaryContext);

    /**
     * Получение винрейта всех рас
     */
    React.useEffect(() => {
        props.fetchRacesWinRate();
    }, []);

    if (props.isErrorFetch) {
        return (
            <Page>
                <Message
                    content="Не удалось получить данные с сервера"
                    error
                />
            </Page>
        )
    }

    /**
     * Если данные еще загружаются
     */
    if (props.isFetching) {
        return (
            <Page>
                <Segment>
                    <Loader active inline="centered" size={"large"}/>
                </Segment>
            </Page>
        )
    }

    const racesDictionaryRecords: TRaceRecord[] = getDictionaryRecords(EDictionaryName.Races);

    return (
        <Page>
            <Table
                columns={9}
                textAlign={"center"}
            >
                <Table.Body>
                    <Table.Row>
                        <Table.Cell />
                        {
                            racesDictionaryRecords.map((raceEntity: TRaceRecord) => (
                                <Table.Cell>
                                    <b>{raceEntity.localize_name}</b>
                                </Table.Cell>
                            ))
                        }
                        <Table.Cell>
                            <b>Всего</b>
                        </Table.Cell>
                    </Table.Row>
                    {
                        racesDictionaryRecords.map((raceEntity: TRaceRecord) => {
                            let countAllWins = 0;
                            let countAllLoses = 0;
                            let countAllGames = 0;

                            return (
                                <Table.Row
                                    key={raceEntity.game_id}
                                >
                                    <Table.Cell>
                                        <b>{raceEntity.localize_name}</b>
                                    </Table.Cell>
                                    {
                                        racesDictionaryRecords.map((secondRaceEntity: TRaceRecord) => {
                                            const {win, lose} = props.allRacesWinRate?.[raceEntity.game_id][secondRaceEntity.game_id];
                                            const countGames = win + lose;

                                            countAllWins = countAllWins + win;
                                            countAllLoses = countAllLoses + lose;
                                            countAllGames = countAllWins + countAllLoses;

                                            return (
                                                <Table.Cell>
                                                    <b>
                                                        {
                                                            countGames && Math.floor(Number(win)/countGames * 100)
                                                        } %
                                                    </b>
                                                    <br />
                                                    ({win} / {lose})
                                                </Table.Cell>
                                            )
                                        })
                                    }
                                    <Table.Cell>
                                        <b>
                                            {
                                                countAllGames && Math.floor(countAllWins/countAllGames * 100)
                                            } %
                                        </b>
                                        <br />
                                        ({countAllWins} / {countAllLoses})
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
            <Message style={{ fontSize: '18px' }}>
                <Message.Header content="Подсказки" />
                <Message.List>
                    <Message.Item content="(A/B) - где A - количество побед, B - количество поражений" />
                    <Message.Item content="Статистика высчитывается строго между участниками проекта" />
                </Message.List>
            </Message>
        </Page>
    );
})

export const StatisticPageController = compose<React.FC<{}>>(
    withDictionaries,
    withStatisticsPageConnector,
)(StatisticPage);
