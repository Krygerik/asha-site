import * as React from "react";
import {Loader, Segment, Table} from "semantic-ui-react";
import {ShortGameInfoRow} from "./components/short-game-info-row";
import {SHORT_GAME_INFO_TABLE_CONFIG} from "./short-game-info-table-constants";
import {TShortGameInfoTableConnectedProps, withShortGameInfoTableConnector} from "./short-game-info-table-connector";

type TProps = {
    config: { items?: number; };
} & TShortGameInfoTableConnectedProps;

/**
 * Визуальное отображение
 */
export const ShortGameInfoTable = React.memo((props: TProps) => {
    /**
     * Запрос данных для таблицы
     */
    React.useEffect(() => {
        props.fetchGames(props.config)
    }, []);


    if (!props.isFetchedShortGameInfoList) {
        return (
            <Segment>
                <Loader active inline="centered" size={"large"}/>
            </Segment>
        );
    }

    return (
        <Table>
            <Table.Header>
                <Table.Row textAlign={"center"}>
                    {
                        SHORT_GAME_INFO_TABLE_CONFIG.map((cell, index) => (
                            <Table.HeaderCell
                                key={index}
                                width={cell.width}
                            >
                                {cell.title}
                            </Table.HeaderCell>
                        ))
                    }
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    props.tableData.map((row, index) => (
                        <ShortGameInfoRow
                            blueHero={row.blueHero}
                            blueNickname={row.blueNickname}
                            date={row.date}
                            key={index}
                            redHero={row.redHero}
                            redNickname={row.redNickname}
                            result={row.result}
                        />
                    ))
                }
            </Table.Body>
        </Table>
    );
});

export const ShortGameInfoTableController = withShortGameInfoTableConnector(ShortGameInfoTable);
