import * as React from "react";
import {Table} from "semantic-ui-react";
import {DictionaryContext, EDictionaryName, withDictionaries} from "../../modules/dictionary";
import {ShortGameInfoRow} from "./components/short-game-info-row";
import {TConfigCell} from "./short-game-info-types";

type TProps = {
    tableConfig: TConfigCell[];
    tableData: any[];
};

/**
 * Таблица краткой информации по игре
 */
export const ShortGameInfoTable = React.memo((props: TProps) => {
    const { getLocalizeDictionaryValueByGameId } = React.useContext(DictionaryContext);

    return (
        <Table>
            <Table.Header>
                <Table.Row textAlign="center">
                    {
                        props.tableConfig.map((cell, index) => (
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
                            blueUserId={row.blueUserId}
                            date={row.date}
                            id={row.id}
                            key={index}
                            mapVersion={row.mapVersion}
                            redHero={getLocalizeDictionaryValueByGameId(EDictionaryName.Heroes, row.redHero)}
                            redNickname={row.redNickname}
                            redUserId={row.redUserId}
                            result={row.result}
                        />
                    ))
                }
            </Table.Body>
        </Table>
    )
});

export const ShortGameInfoTableController: React.FC<TProps> = withDictionaries(ShortGameInfoTable)
