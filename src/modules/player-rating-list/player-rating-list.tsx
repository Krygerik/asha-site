import * as React from "react";
import { withFetching } from "../../wrappers";
import {Header, Segment, Table} from "semantic-ui-react";

type TProps = {
    data: { nickname: string; rating: number; }[];
};

const PlayerRatingList = React.memo((props: TProps) => {
    const playerRatingList = props.data.sort(
        (a, b) => a.rating < b.rating ? 1 : -1
    )

    return (
        <Segment>
            <Header
                content="Ладдерный рейтинг игроков (тестовый)"
            />
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
                                key={player.nickname}
                                textAlign="center"
                            >
                                <Table.Cell
                                    content={index + 1}
                                />
                                <Table.Cell
                                    content={player.nickname}
                                />
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