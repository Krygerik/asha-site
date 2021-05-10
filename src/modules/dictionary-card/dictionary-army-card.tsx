import {Card, Image, Message} from "semantic-ui-react";
import {find} from "lodash/fp";
import * as React from "react";
import {EDictionaryName} from "../dictionary";
import {mapTypeToDictionary} from "./dictionary-card-constants";

type TProps = {
    // количество юнитов
    count: number;
    // id записи
    gameId: string;
};

/**
 * Отображение карточки существ
 */
export const DictionaryArmyCard = (props: TProps) => {
    const item = find({ gameId: props.gameId }, mapTypeToDictionary[EDictionaryName.Creatures])

    if (!item) {
        return (
            <Message error content={`Запись не была найдена иконка для: ${props.gameId}`} />
        )
    }

    return (
        <Card>
            <Image src={item.icon} />
            <Card.Content
                textAlign="center"
            >
                <Card.Header content={props.count} />
            </Card.Content>
        </Card>
    )
};
