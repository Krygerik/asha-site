import {Table} from "semantic-ui-react";
import * as React from "react";
import {compose} from "redux";
import {TCreatures} from "../../pages/game/game-types";
import {EDictionaryName, withDictionaries} from "../dictionary";
import {TDictionaryCreatureListConnectedProps, withDictionaryCreatureList} from "./dictionary-creature-list-connector";

type TOwnProps = {
    armyList: TCreatures[];
    header: string;
};
type TProps = TOwnProps & TDictionaryCreatureListConnectedProps;

const DictionaryCreatureList = React.memo((props: TProps) => (
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
                        <Table.Cell>
                            {props.getDictionaryProperty(
                                EDictionaryName.Creatures,
                                'game_id',
                                armyItem.name,
                                'localize_name')}
                        </Table.Cell>
                        <Table.Cell content={armyItem.count} />
                    </Table.Row>
                ))
            }
        </Table.Body>
    </Table>
));

export const DictionaryCreatureListController = compose<React.FC<TOwnProps>>(
    withDictionaries,
    withDictionaryCreatureList,
)(DictionaryCreatureList);
