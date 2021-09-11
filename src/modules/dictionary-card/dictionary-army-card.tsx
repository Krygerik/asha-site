import {Card, Image, Message} from "semantic-ui-react";
import {find} from "lodash/fp";
import * as React from "react";
import {EDictionaryName} from "../dictionary";
import {mapTypeToDictionary} from "./dictionary-card-constants";
import {TCreatures} from "./creatures-constants";

type TProps = {
    // центрирование картинки
    centered?: boolean;
    // количество юнитов
    count: number;
    // id записи
    gameId: string;
};

/**
 * Отображение карточки существ
 */
export const DictionaryArmyCard = (props: TProps) => {
    const item: TCreatures | undefined = find<TCreatures>(
        (creature: TCreatures) => creature.gameId.includes(props.gameId),
        mapTypeToDictionary[EDictionaryName.Creatures],
    )

    if (!item) {
        return (
            <Message error content={`Отсутствует иконка для: ${props.gameId}`} />
        )
    }

    return (
        <Card centered={props.centered} >
            <Image src={item.icon} />
            <Card.Content
                textAlign="center"
            >
                <Card.Header content={props.count} />
            </Card.Content>
        </Card>
    )
};
