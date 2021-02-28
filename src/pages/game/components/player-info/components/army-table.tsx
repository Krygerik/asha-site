import * as React from "react";
import {Table} from "semantic-ui-react";
import {TCreatures} from "../../../game-types";

type TArmyTableProps = {
    armyList: TCreatures[];
    header: string;
}

/**
 * Таблица списка армии игрока
 */
export const ArmyTable = (props: TArmyTableProps) => (
    <Table columns={2} textAlign="center" striped>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan={2} content={props.header} />
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                props.armyList.map((armyItem: TCreatures) => (
                    <Table.Row key={armyItem.name}>
                        <Table.Cell content={armyItem.name} />
                        <Table.Cell content={armyItem.count} />
                    </Table.Row>
                ))
            }
        </Table.Body>
    </Table>
);