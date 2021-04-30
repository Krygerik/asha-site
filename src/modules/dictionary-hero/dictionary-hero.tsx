import {find, flow, get} from "lodash/fp";
import * as React from "react";
import {compose} from "redux";
import {Header, Image, Message} from "semantic-ui-react";
import {EDictionaryName, withDictionaries} from "../dictionary";
import {TDictionaryHeroConnectedProps, withDictionaryHeroConnector} from "./dictionary-hero-connector";
import {MAP_HERO_IDS_TO_ICONS} from "./dictionary-hero-constants";

type TOwnProps = {
    hero: string;
}

type TProps = TOwnProps & TDictionaryHeroConnectedProps;

/**
 * Компонент отображения иконки, названия и расы героя
 */
export const DictionaryHero = React.memo((props: TProps) => {
    const heroRecord = props.getDictionaryRecord(EDictionaryName.Heroes, 'game_id', props.hero);

    if (!heroRecord) {
        return <Message error content={`Не удалось найти героя: ${props.hero}`} />
    }

    const heroRaceName = props.getDictionaryProperty(
        EDictionaryName.Races, 'game_id', heroRecord.race_game_id, 'localize_name'
    );
    const heroIcon: string = flow(
        find({ gameId: props.hero }),
        get('icon')
    )(MAP_HERO_IDS_TO_ICONS);

    return (
        <>
            <Image src={heroIcon} centered />
            <Header
                content={`${heroRecord.localize_name}, ${heroRaceName}`}
                textAlign="center"
            />
        </>
    )
});

export const DictionaryHeroController = compose<React.FC<TOwnProps>>(
    withDictionaries,
    withDictionaryHeroConnector,
)(DictionaryHero);