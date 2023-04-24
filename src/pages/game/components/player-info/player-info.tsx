import {isEmpty} from "lodash";
import * as React from "react";
import {Segment} from "semantic-ui-react";
import {EDictionaryName} from "../../../../modules/dictionary";
import {DictionaryArmyList} from "../../../../modules/dictionary-army-list";
import {DictionaryCardList} from "../../../../modules/dictionary-card-list";
import {DictionaryHero} from "../../../../modules/dictionary-hero";
import {TPlayer} from "../../game-types";
import {AdditionalProperties, HeroPropertiesTable, RatingInfo} from "./components";
import {mapPlayerColorToSegmentColor} from "./player-info-utils";

type TProps = {
    player: TPlayer;
};

/**
 * Убирает Катапульту из списка боевых машин игрока
 */
function removeCatapult(war_machines: string[]) {
    const catapultIndex: number = war_machines.indexOf("2");
    if (catapultIndex > -1) {
        war_machines.splice(catapultIndex, 1);
    }
    return war_machines;
}

/**
 * Компонент отображения данных об игроке
 */
export const PlayerInfo = React.memo((props: TProps) => (
    <>
        <Segment
            attached="top"
            color={mapPlayerColorToSegmentColor(props.player.color)}
            content={props.player.nickname || "Неизвестный"}
            inverted={true}
            size="massive"
            textAlign="center"
        />
        <Segment attached="bottom">
            <DictionaryHero hero={props.player.hero} />
            {
                props.player.changed_rating && props.player.new_rating && (
                    <RatingInfo
                        changed_rating={props.player.changed_rating}
                        new_rating={props.player.new_rating}
                    />
                )
            }
            <HeroPropertiesTable player={props.player} />
            <AdditionalProperties player={props.player} />
            <DictionaryArmyList
                header="Армия игрока"
                list={props.player.army}
            />
            <DictionaryCardList
                list={removeCatapult(props.player.war_machines)}
                type={EDictionaryName.WarMachines}
            />
            <DictionaryCardList
                list={props.player.spells}
                type={EDictionaryName.Spells}
            />
            <DictionaryCardList
                list={props.player.skills}
                type={EDictionaryName.Skills}
            />
            <DictionaryCardList
                list={props.player.perks}
                type={EDictionaryName.Perks}
            />
            <DictionaryCardList
                list={props.player.arts}
                type={EDictionaryName.Artifacts}
            />
            {
                !isEmpty(props.player.army_remainder) && (
                    <DictionaryArmyList
                        header="Конечная армия игрока"
                        list={props.player.army_remainder}
                    />
                )
            }
        </Segment>
    </>
));
