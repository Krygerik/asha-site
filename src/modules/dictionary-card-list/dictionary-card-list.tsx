import {Grid, Header, Segment} from "semantic-ui-react";
import * as React from "react";
import {compose} from "redux";
import {
    DictionaryCard,
    mapTypeDictionaryToHeader,
    BARBARIAN_ENLIGHTENMENT_GAME_ID_LIST,
} from "../dictionary-card";
import {DictionaryContext, EDictionaryName, withDictionaries} from "../dictionary";

type TProps = {
    list: string[];
    type: EDictionaryName;
};

/**
 * Список артефактов (в будущем любых элементов)
 */
const DictionaryCardList = React.memo((props: TProps) => {
    const dictionaries = React.useContext(DictionaryContext);

    if (props.list.length === 0) {
        return null;
    }

    console.log('props.list:', props.list);

    return (
        <>
            <Header attached="top" content={mapTypeDictionaryToHeader[props.type]} textAlign="center" block />
            <Segment attached="bottom">
                <Grid columns={3} centered>
                    {
                        props.list.map((item: string) => {
                            /**
                             * Не отображаем карточки образования у орка, т.к. Нивал придумал записывать их вместе с обычным образованием
                             */
                            if (BARBARIAN_ENLIGHTENMENT_GAME_ID_LIST.includes(item)) {
                                return null;
                            }

                            return (
                                <Grid.Column key={item}>
                                    <DictionaryCard
                                        gameId={item}
                                        locale={dictionaries.getLocalizeDictionaryValueByGameId(props.type, item)}
                                        type={props.type}
                                    />
                                </Grid.Column>
                            )
                        })
                    }
                </Grid>
            </Segment>
        </>
    )
});

export const DictionaryCardListController = compose<React.FC<TProps>>(
    withDictionaries,
)(DictionaryCardList);