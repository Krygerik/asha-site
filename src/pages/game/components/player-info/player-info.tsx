import * as React from "react";
import {Segment, Image, Header} from "semantic-ui-react";
import ora from "../../../../assets/ora.png";
import {TPlayer} from "../../game-types";
import {
    AdditionalProperties,
    ArmyTable,
    HeroPropertiesTable,
    TableAsList,
} from "./components";
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
            <Header content={`${props.player.hero}, ${props.player.race}`} textAlign="center" />
            <HeroPropertiesTable player={props.player} />
            <AdditionalProperties player={props.player} />
            <ArmyTable armyList={props.player.army} header="Армия игрока" />
            <TableAsList list={props.player.spells} header="Заклинания" />
            <TableAsList list={props.player.skills} header="Школы" />
            <TableAsList list={props.player.perks} header="Навыки" />
            <TableAsList list={props.player.arts} header="Артефакты" />
            {
                props.player.army_remainder.length > 0 && (
                    <ArmyTable armyList={props.player.army_remainder} header="Армия осталась" />
                )
            }
        </Segment>
    </>
));
