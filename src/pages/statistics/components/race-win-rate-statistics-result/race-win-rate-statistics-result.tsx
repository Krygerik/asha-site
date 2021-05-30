import {map, times} from "lodash";
import * as React from "react";
import {Loader, Message, Segment, Table} from "semantic-ui-react";
import {ERacesIds, TRaceRecord} from "../../../../modules/dictionary/dictionary-types";
import {DictionaryContext, EDictionaryName} from "../../../../modules/dictionary";
import {Page} from "../../../../modules/page";
import {TFetchStatisticsRequestFilter, TWinRateRecord} from "../../statistics-page-types";
import {
    TRaceWinStatisticResultConnectedProps,
    withRaceWinStatisticResultConnector
} from "./race-win-rate-statistics-result-connector";

type TProps = {
    filters: TFetchStatisticsRequestFilter;
} & TRaceWinStatisticResultConnectedProps;

/**
 * Таблица винрейтов по предоставленному поиску
 */
const RaceWinRateStatisticsResult = React.memo((props: TProps) => {
    const { getDictionaryRecords, getDictionaryRecordByGameId } = React.useContext(DictionaryContext);

    const racesDictionaryRecords: TRaceRecord[] = getDictionaryRecords(EDictionaryName.Races);

    /**
     * Запрос данных таблицы с соответствующим фильтром
     */
    React.useEffect(() => {
        props.fetchRacesWinRate(props.filters);
    }, [props.filters]);

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

    // TODO: Вынести в селектор получение всех числовых значений
    let totalWins = 0;
    let totalLoses = 0;

    return (
        <Table
            columns={11}
            textAlign={"center"}
        >
            <Table.Body>
                <Table.Row>
                    <Table.Cell />
                    {
                        racesDictionaryRecords.map((raceEntity: TRaceRecord) => (
                            <Table.Cell key={raceEntity.game_id}>
                                <b>{raceEntity.localize_name}</b>
                            </Table.Cell>
                        ))
                    }
                    <Table.Cell>
                        <b>Всего</b>
                    </Table.Cell>
                    <Table.Cell>
                        <b>Итого игр</b>
                    </Table.Cell>
                </Table.Row>
                {
                    map(props.allRacesWinRate, (singleRaceRate:  Record<ERacesIds, TWinRateRecord>, raceId: ERacesIds) => {
                        let countAllWins = 0;
                        let countAllLoses = 0;
                        let countAllGames = 0;

                        const currentRaceRecord = getDictionaryRecordByGameId(EDictionaryName.Races, raceId);

                        return (
                            <Table.Row
                                key={currentRaceRecord.game_id}
                            >
                                <Table.Cell>
                                    <b>{currentRaceRecord.localize_name}</b>
                                </Table.Cell>
                                {
                                    racesDictionaryRecords.map((secondRaceEntity: TRaceRecord) => {
                                        const {win, lose} = props.allRacesWinRate?.[raceId][secondRaceEntity.game_id];
                                        const countGames = win + lose;

                                        // Для текущей расы
                                        countAllWins = countAllWins + win;
                                        countAllLoses = countAllLoses + lose;
                                        countAllGames = countAllWins + countAllLoses;

                                        // Для всех рас
                                        totalWins = totalWins + win;
                                        totalLoses = totalLoses + lose;

                                        return (
                                            <Table.Cell key={secondRaceEntity.game_id}>
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
                                <Table.Cell>
                                    {countAllGames}
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
                <Table.Row>
                    {
                        times(9, (index) => (
                            <Table.Cell key={index} />
                        ))
                    }
                    <Table.Cell>
                        <b>
                            {
                                (totalWins + totalLoses) && Math.floor(totalWins/(totalWins + totalLoses) * 100)
                            } %
                        </b>
                        <br />
                        ({totalWins} / {totalLoses})
                    </Table.Cell>
                    <Table.Cell>
                        {(totalWins + totalLoses)}
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
});

export const RaceWinRateStatisticsResultController = withRaceWinStatisticResultConnector(RaceWinRateStatisticsResult);