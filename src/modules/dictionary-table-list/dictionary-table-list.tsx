import {Table} from "semantic-ui-react";
import * as React from "react";
import {DictionaryContext, EDictionaryName, withDictionaries} from "../dictionary";

type TProps = {
    header: string;
    list: string[];
    type: EDictionaryName;
};

const DictionaryTableList = React.memo((props: TProps) => {
    const { getLocalizeDictionaryValueByGameId } = React.useContext(DictionaryContext);

    return (
        <Table
            columns={1}
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
                    props.list.map((item: string) => (
                        <Table.Row key={item}>
                            <Table.Cell>
                                {getLocalizeDictionaryValueByGameId(props.type, item)}
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
});

export const DictionaryTableListController = withDictionaries(DictionaryTableList);
