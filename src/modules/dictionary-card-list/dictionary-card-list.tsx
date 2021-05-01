import {Grid, Header, Segment} from "semantic-ui-react";
import * as React from "react";
import {compose} from "redux";
import {DictionaryCard, mapTypeDictionaryToHeader} from "../dictionary-card";
import {EDictionaryName, withDictionaries} from "../dictionary";
import {TDictionaryCardListConnectedProps, withDictionaryCardListConnector} from "./dictionary-card-list-connector";

type TOwnProps = {
    list: string[];
    type: EDictionaryName;
};
type TProps = TOwnProps & TDictionaryCardListConnectedProps;

/**
 * Список артефактов (в будущем любых элементов)
 */
const DictionaryCardList = React.memo((props: TProps) => {
    if (props.list.length === 0) {
        return null;
    }

    return (
        <>
            <Header attached="top" content={mapTypeDictionaryToHeader[props.type]} textAlign="center" block />
            <Segment attached="bottom">
                <Grid columns={3}>
                    {
                        props.list.map((item: string) => (
                            <Grid.Column key={item}>
                                <DictionaryCard
                                    gameId={item}
                                    locale={props.getDictionaryProperty(props.type, 'game_id', item, 'localize_name')}
                                    type={props.type}
                                />
                            </Grid.Column>
                        ))
                    }
                </Grid>
            </Segment>
        </>
    )
});

export const DictionaryCardListController = compose<React.FC<TOwnProps>>(
    withDictionaries,
    withDictionaryCardListConnector,
)(DictionaryCardList);