import {map} from "lodash";
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

    let totalWins = 0;
    let totalLoses = 0;

    return (
        <Table
            columns={10}
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
                                        const {wins, loses} = props.allRacesWinRate?.[raceId][secondRaceEntity.game_id];
                                        const countGames = wins + loses;

                                        countAllWins = countAllWins + wins;
                                        countAllLoses = countAllLoses + loses;
                                        countAllGames = countAllWins + countAllLoses;

                                        totalWins = totalWins + wins;
                                        totalLoses = totalLoses + loses;

                                        return (
                                            <Table.Cell key={secondRaceEntity.game_id}>
                                                <b>
                                                    {
                                                        countGames && Math.floor(Number(wins)/countGames * 100)
                                                    } %
                                                </b>
                                                <br />
                                                ({wins} / {loses})
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
                                    <br />
                                    {countAllGames}
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='10' textAlign="center">
                        <b>
                            Суммарно по всем расам: {
                                (totalWins + totalLoses) && Math.floor(totalWins/(totalWins + totalLoses) * 100)
                            }%
                        </b>
                        <br />
                        ({totalWins} / {totalLoses})
                        <br />
                        {(totalWins + totalLoses)}
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
});

export const RaceWinRateStatisticsResultController = withRaceWinStatisticResultConnector(RaceWinRateStatisticsResult);