import * as React from "react";
import {compose} from "redux";
import {Loader, Segment, Table} from "semantic-ui-react";
import {ShortGameInfoRow} from "./components/short-game-info-row";
import {SHORT_GAME_INFO_TABLE_CONFIG} from "./short-game-info-table-constants";
import {TShortGameInfoTableConnectedProps, withShortGameInfoTableConnector} from "./short-game-info-table-connector";
import {DictionaryContext, EDictionaryName, withDictionaries} from "../dictionary";

type TOwnProps = {
    config: { items?: number; };
};
type TProps = TOwnProps & TShortGameInfoTableConnectedProps;

/**
 * Визуальное отображение
 */
export const ShortGameInfoTable = React.memo((props: TProps) => {
    const { getLocalizeDictionaryValueByGameId } = React.useContext(DictionaryContext);

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
                            blueHero={getLocalizeDictionaryValueByGameId(EDictionaryName.Heroes, row.blueHero)}
                            blueNickname={row.blueNickname}
                            date={row.date}
                            id={row.id}
                            key={index}
                            redHero={getLocalizeDictionaryValueByGameId(EDictionaryName.Heroes, row.redHero)}
                            redNickname={row.redNickname}
                            result={row.result}
                        />
                    ))
                }
            </Table.Body>
        </Table>
    );
});

export const ShortGameInfoTableController = compose<React.FC<TOwnProps>>(
    withDictionaries,
    withShortGameInfoTableConnector,
)(ShortGameInfoTable);
