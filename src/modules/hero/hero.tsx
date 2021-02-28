import {find} from "lodash/fp";
import * as React from "react";
import {Header, Image, Message} from "semantic-ui-react";
import {HEROES} from "./hero-constants";

type TProps = {
    hero: string;
};

/**
 * Компонент отображения иконки, названия и расы героя
 */
export const Hero = (props: TProps) => {
    const heroProps = find({ locale: props.hero }, HEROES);

    if (!heroProps) {
        return <Message error content={`Не удалось найти героя: ${props.hero}`} />
    }

    return (
        <>
            <Image src={heroProps.icon} centered/>
            <Header
                content={`${heroProps.locale}, ${heroProps.race}`}
                textAlign="center"
            />
        </>
    )
};