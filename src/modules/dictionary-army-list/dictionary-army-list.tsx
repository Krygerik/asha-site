import * as React from "react";
import {Grid, Header, Segment} from "semantic-ui-react";
import {TCreatures} from "../../pages/game/game-types";
import {withDictionaries} from "../dictionary";
import {DictionaryArmyCard} from "../dictionary-card";

type TProps = {
    header: string;
    list: TCreatures[];
};

const DictionaryArmyList = React.memo((props: TProps) => (
    <>
        <Header attached="top" content={props.header} textAlign="center" block />
        <Segment attached="bottom">
            <Grid columns={4} centered>
                {
                    props.list.map((item: TCreatures) => Boolean(item.count) && (
                        <Grid.Column key={item.name} width={4}>
                            <DictionaryArmyCard
                                count={item.count}
                                gameId={item.name}
                            />
                        </Grid.Column>
                    ))
                }
            </Grid>
        </Segment>
    </>
));

export const DictionaryArmyListController = withDictionaries(DictionaryArmyList);