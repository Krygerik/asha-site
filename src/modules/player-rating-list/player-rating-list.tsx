import * as React from "react";
import {Header, Segment, Table} from "semantic-ui-react";
import { withFetching } from "../../wrappers";
import { TPlayerWithRating } from "./player-rating-list-types";
import {UserLink} from "../../components/user-link";

type TProps = {
    data: TPlayerWithRating[];
    header?: string;
};

const PlayerRatingList = React.memo((props: TProps) => {
    const playerRatingList = props.data.sort(
        (a, b) => a.rating < b.rating ? 1 : -1
    )

    return (
        <Segment>
            {
                props.header && (
                    <Header content={props.header} />
                )
            }
            <Table striped>
                <Table.Header>
                    <Table.Row
                        textAlign="center"
                    >
                        <Table.HeaderCell
                            content="Место"
                        />
                        <Table.HeaderCell
                            content="Никнейм игрока"
                        />
                        <Table.HeaderCell
                            content="Рейтинг"
                        />
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        playerRatingList.map((player, index) => (
                            <Table.Row
                                key={player._id}
                                textAlign="center"
                            >
                                <Table.Cell
                                    content={index + 1}
                                />
                                <Table.Cell>
                                    <UserLink
                                        id={player._id}
                                        nickname={player.nickname}
                                    />
                                </Table.Cell>
                                <Table.Cell
                                    content={player.rating}
                                />
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </Segment>
    )
});

export const PlayerRatingListController = withFetching(PlayerRatingList);