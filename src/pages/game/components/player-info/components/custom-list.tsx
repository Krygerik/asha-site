import * as React from "react";
import {Grid, Header, Segment} from "semantic-ui-react";
import {CustomCard, EDictionaryType, mapTypeDictionaryToHeader} from "../../../../../components/custom-card";

type TProps = {
    list: string[];
    type: EDictionaryType;
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
            <Header attached="top" content={mapTypeDictionaryToHeader[props.type]} textAlign="center" block />
            <Segment attached="bottom">
                <Grid columns={3}>
                    {
                        props.list.map((art: string) => (
                            <Grid.Column key={art}>
                                <CustomCard name={art} type={props.type} />
                            </Grid.Column>
                        ))
                    }
                </Grid>
            </Segment>
        </>
    )
};
