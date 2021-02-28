import * as React from "react";
import {Card, Message} from "semantic-ui-react";
import {find} from "lodash/fp";
import {ARTIFACTS} from "./artifact-constants";

type TProps = {
    name: string;
};

/**
 * Компонент отображения заклинания
 */
export const Artifact = (props: TProps) => {
    const artifact = find({ name: props.name }, ARTIFACTS);

    if (!artifact) {
        return (
            <Message error content={`Артефакт не был найден в справочнике: ${props.name}`} />
        )
    }

    return (
        <Card
            header={artifact.locale}
            image={artifact.icon}
        />
    );
};
