import * as React from "react";
import {Segment} from "semantic-ui-react";
import {EDictionaryType} from "../../../../components/custom-card";
import {Hero} from "../../../../modules/hero";
import {TPlayer} from "../../game-types";
import {AdditionalProperties, ArmyTable, CustomList, HeroPropertiesTable, TableAsList} from "./components";
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
            <Hero hero={props.player.hero} />
            <HeroPropertiesTable player={props.player} />
            <AdditionalProperties player={props.player} />
            <ArmyTable armyList={props.player.army} header="Армия игрока" />
            <CustomList list={props.player.spells} type={EDictionaryType.SPELLS} />
            <TableAsList list={props.player.skills} header="Школы" />
            <TableAsList list={props.player.perks} header="Навыки" />
            <CustomList list={props.player.arts} type={EDictionaryType.ARTS} />
            {
                props.player.army_remainder.length > 0 && (
                    <ArmyTable armyList={props.player.army_remainder} header="Армия осталась" />
                )
            }
        </Segment>
    </>
));
