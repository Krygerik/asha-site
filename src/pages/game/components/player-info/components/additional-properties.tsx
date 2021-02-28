import {Table} from "semantic-ui-react";
import * as React from "react";
import {TPlayer} from "../../../game-types";
import {mapBonusToRussian} from "../player-info-constants";

type TProps = {
    player: TPlayer;
}

/**
 * Компонент отображения дополнительных характеристик игрока
 */
export const AdditionalProperties = (props: TProps) => (
    <Table columns={2} singleLine size="large" textAlign="center" striped>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan={2} content="Дополнительные характеристики героя" />
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell content="Стартовый бонус" />
                <Table.Cell content={mapBonusToRussian[props.player.start_bonus]} />
            </Table.Row>
            <Table.Row>
                <Table.Cell content="Количество ментора" />
                <Table.Cell content={props.player.mentoring} />
            </Table.Row>
            <Table.Row>
                <Table.Cell content="Маны осталось" />
                <Table.Cell content={props.player.mana_end} />
            </Table.Row>
        </Table.Body>
    </Table>
);
