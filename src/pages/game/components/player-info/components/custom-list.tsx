import * as React from "react";
import {Grid, Header, Segment} from "semantic-ui-react";
import {Artifact} from "../../../../../components/artifact";

type TProps = {
    list: string[];
};

/**
 * Список артефактов (в будущем любых элементов)
 */
export const CustomList = (props: TProps) => {
    if (props.list.length === 0) {
        return null;
    }

    return (
        <>
            <Header attached="top" content="Артефакты" textAlign="center" block />
            <Segment attached="bottom">
                <Grid columns={3}>
                    {
                        props.list.map((art: string) => (
                            <Grid.Column key={art}>
                                <Artifact name={art} />
                            </Grid.Column>
                        ))
                    }
                </Grid>
            </Segment>
        </>
    )
};
