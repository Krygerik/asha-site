import * as React from "react";
import {find} from "lodash/fp";
import {EDictionaryType, mapTypeToDictionary} from "./custom-card-constants";
import {Card, Image, Message} from "semantic-ui-react";

type TProps = {
    // id записи
    name: string;
    // тип справочника
    type: EDictionaryType;
};

/**
 * Отображение карточки заклинания или предмета
 */
export const CustomCard = (props: TProps) => {
    const item = find({ name: props.name }, mapTypeToDictionary[props.type])

    if (!item) {
        return (
            <Message error content={`Запись не быа найдена в справочнике: ${props.name}`} />
        )
    }

    return (
        <Card>
            <Image src={item.icon} />
            <Card.Content textAlign="center">
                <Card.Header content={item.locale} />
            </Card.Content>
        </Card>
    )
};
