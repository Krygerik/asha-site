import * as React from "react";
import {Segment, Image, Table} from "semantic-ui-react";
import ora from "../../../../assets/ora.png";
import {TPlayer} from "../../game-types";
import {mapPlayerColorToSegmentColor} from "./player-info-utils";

type TProps = {
    player: TPlayer;
};

/**
 * Компонент отображения данных об игроке
 */
export const PlayerInfo = React.memo((props: TProps) => (
    <>
        <Segment
            attached="top"
            color={mapPlayerColorToSegmentColor(props.player.color)}
            content={props.player.nickname}
            inverted={true}
            size="massive"
            textAlign="center"
        />
        <Segment attached="bottom">
            <Image src={ora} centered />
            <Table columns={2} singleLine size="large" textAlign="center" >
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
            </Table>
        </Segment>
    </>
));
