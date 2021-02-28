import {Table} from "semantic-ui-react";
import * as React from "react";
import {TPlayer} from "../../../game-types";

type TProps = {
    player: TPlayer;
}

/**
 * КОмпонент отображения характеристик прокаченного героя
 */
export const HeroPropertiesTable = (props: TProps) => (
    <Table columns={2} singleLine size="large" textAlign="center" striped>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan={2} content="Характеристики героя" />
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell content="Нападение" />
                <Table.Cell content={props.player.attack} />
            </Table.Row>
            <Table.Row>
                <Table.Cell content="Защита" />
                <Table.Cell content={props.player.defence} />
            </Table.Row>
            <Table.Row>
                <Table.Cell content="Колдовство" />
                <Table.Cell content={props.player.spell_power} />
            </Table.Row>
            <Table.Row>
                <Table.Cell content="Знание" />
                <Table.Cell content={props.player.knowledge} />
            </Table.Row>
            <Table.Row>
                <Table.Cell content="Боевой дух" />
                <Table.Cell content={props.player.morale} />
            </Table.Row>
            <Table.Row>
                <Table.Cell content="Удача" />
                <Table.Cell content={props.player.luck} />
            </Table.Row>
            <Table.Row>
                <Table.Cell content="Мана" />
                <Table.Cell content={props.player.mana_start} />
            </Table.Row>
        </Table.Body>
    </Table>
);
