import {Table} from "semantic-ui-react";
import * as React from "react";
import {compose} from "redux";
import {TCreatures} from "../../pages/game/game-types";
import {EDictionaryName, withDictionaries} from "../dictionary";
import {TDictionaryTableListConnectedProps, withDictionaryTableList} from "./dictionary-table-list-connector";

type TOwnProps = {
    header: string;
    list: (TCreatures | string)[];
    type: EDictionaryName;
};
type TProps = TOwnProps & TDictionaryTableListConnectedProps;

const DictionaryTableList = React.memo((props: TProps) => (
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
                                    {props.getDictionaryProperty(
                                        props.type,
                                        'game_id',
                                        item,
                                        'localize_name')}
                                </Table.Cell>
                            </Table.Row>
                        )
                    }

                    return (
                        <Table.Row key={item.name}>
                            <Table.Cell>
                                {props.getDictionaryProperty(
                                    EDictionaryName.Creatures,
                                    'game_id',
                                    item.name,
                                    'localize_name'
                                )}
                             </Table.Cell>
                            <Table.Cell content={item.count} />
                        </Table.Row>
                    )
                })
            }
        </Table.Body>
    </Table>
));

export const DictionaryTableListController = compose<React.FC<TOwnProps>>(
    withDictionaries,
    withDictionaryTableList,
)(DictionaryTableList);
