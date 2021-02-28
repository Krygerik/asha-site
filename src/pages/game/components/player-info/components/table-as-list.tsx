import {Table} from "semantic-ui-react";
import * as React from "react";

type TProps = {
    header: string;
    list: string[];
}

/**
 * Список заклинаний
 */
export const TableAsList = (props: TProps) => (
    <Table textAlign="center" striped>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell content={props.header} />
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                props.list.map((spell: string) => (
                    <Table.Row key={spell}>
                        <Table.Cell content={spell} />
                    </Table.Row>
                ))
            }
        </Table.Body>
    </Table>
);
