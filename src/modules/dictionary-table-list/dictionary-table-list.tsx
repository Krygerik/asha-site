import {Table} from "semantic-ui-react";
import * as React from "react";
import {compose} from "redux";
import {TCreatures} from "../../pages/game/game-types";
import {DictionaryContext, EDictionaryName, withDictionaries} from "../dictionary";

type TProps = {
    header: string;
    list: (TCreatures | string)[];
    type: EDictionaryName;
};

const DictionaryTableList = React.memo((props: TProps) => {
    const { getLocalizeDictionaryValueByGameId } = React.useContext(DictionaryContext);

    return (
        <Table
            columns={props.type === EDictionaryName.Creatures ? 2 : 1}
            textAlign="center"
            striped
        >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan={2} content={props.header} />
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    props.list.map((item: TCreatures | string) => {
                        if (typeof item === 'string') {
                            return (
                                <Table.Row key={item}>
                                    <Table.Cell>
                                        {getLocalizeDictionaryValueByGameId(props.type, item)}
                                    </Table.Cell>
                                </Table.Row>
                            )
                        }

                        return (
                            <Table.Row key={item.name}>
                                <Table.Cell>
                                    {getLocalizeDictionaryValueByGameId(EDictionaryName.Creatures, item.name)}
                                </Table.Cell>
                                <Table.Cell content={item.count} />
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    )
});

export const DictionaryTableListController = compose<React.FC<TProps>>(
    withDictionaries,
)(DictionaryTableList);
