import {Card, Image, Message} from "semantic-ui-react";
import {find} from "lodash/fp";
import * as React from "react";
import {EDictionaryName} from "../dictionary";
import {mapTypeToDictionary} from "./dictionary-card-constants";

type TProps = {
    // id записи
    gameId: string;
    // тип справочника
    type: EDictionaryName;
    // Название элемента карточки
    locale: string;
};

/**
 * Отображение карточки заклинания или предмета
 */
export const DictionaryCard = (props: TProps) => {
    const item = find(
        { gameId: props.gameId },
        mapTypeToDictionary[props.type],
    );

    if (!item) {
        return (
            <Message error content={`Отсутствует иконка для: ${props.gameId}`} />
        )
    }

    return (
        <Card>
            <Image src={item.icon} />
            <Card.Content
                textAlign="center"
                style={{
                    wordBreak: "break-word"
                }}
            >
                <Card.Header content={props.locale} />
            </Card.Content>
        </Card>
    )
};
