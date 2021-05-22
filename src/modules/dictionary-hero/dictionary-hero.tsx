import {find, flow, get} from "lodash/fp";
import * as React from "react";
import {compose} from "redux";
import {Header, Image, Message} from "semantic-ui-react";
import {DictionaryContext, EDictionaryName, withDictionaries} from "../dictionary";
import {MAP_HERO_IDS_TO_ICONS} from "./dictionary-hero-constants";
import {THeroRecord} from "../dictionary/dictionary-types";

type TProps = {
    hero: string;
};

/**
 * Компонент отображения иконки, названия и расы героя
 */
export const DictionaryHero = React.memo((props: TProps) => {
    const {
        getDictionaryRecordByGameId,
        getLocalizeDictionaryValueByGameId,
    } = React.useContext(DictionaryContext);

    // @ts-ignore
    const heroRecord: THeroRecord = getDictionaryRecordByGameId(EDictionaryName.Heroes, props.hero);

    if (!heroRecord) {
        return <Message error content={`Не удалось найти героя: ${props.hero}`} />
    }

    const heroRaceName = getLocalizeDictionaryValueByGameId(EDictionaryName.Races, heroRecord.race_game_id);

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

export const DictionaryHeroController = compose<React.FC<TProps>>(
    withDictionaries,
)(DictionaryHero);