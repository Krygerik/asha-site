import * as React from "react";
import {ArcherContainer, ArcherElement} from "react-archer";
import {Divider, Grid, Header, Message, Segment, Table} from "semantic-ui-react";
import { TTournamentRound } from "./tournament-page-types";

type TProps = {
    grid: TTournamentRound[];
};

/**
 * Турнирная сетка
 */
export const TournamentGrid = React.memo((props: TProps) => {
    if (props.grid.length === 0) {
        return (
            <Message
                content="Турнирная сетка еще не создана"
            />
        )
    }

    // Мапа количества раундов на количество этапов
    const mapCountRoundOnCountStage = (countRound: number) => {
        if (countRound === 1) return 1;
        if (countRound < 4) return 2;
        if (countRound < 8) return 3;
        if (countRound < 16) return 4;
        if (countRound < 32) return 5;
        if (countRound < 64) return 6;
        return 7;
    };

    const getRenderGrid = () => {
        const stageCount = mapCountRoundOnCountStage(props.grid.length);
        const rows = [];
        let currentGridIndex = 0;

        for (let indexRow = 0; indexRow < stageCount; indexRow++) {
            const rounds = [];

            for (let indexRound = 0; indexRound < 2**indexRow; indexRound++) {
                const currentRound = props.grid[currentGridIndex];

                rounds.push(
                    <React.Fragment key={indexRound}>
                        {
                            indexRound !== 0 && (<Divider hidden />)
                        }
                        <ArcherElement
                            id={currentRound.number_of_round.toString()}
                            relations={
                                currentRound.parent_round
                                    ? [{
                                        targetId: currentRound.parent_round.toString(),
                                        targetAnchor: 'left',
                                        sourceAnchor: 'right',
                                        style: { strokeColor: 'black', strokeWidth: 2 },
                                    }]
                                    : []
                            }
                        >
                            <div
                                style={{
                                    width: '50%',
                                    marginLeft: '25%'
                                }}
                            >
                                <Table compact textAlign="center">
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell
                                                content={currentRound.players[0]?.user_id || '-'}
                                                width={12}
                                            />
                                            <Table.Cell
                                                content={currentRound.players[0]?.win_count || 0}
                                                width={2}
                                            />
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell
                                                content={currentRound.players[1]?.user_id ||'-'}
                                                width={12}
                                            />
                                            <Table.Cell
                                                content={currentRound.players[1]?.win_count || 0}
                                                width={2}
                                            />
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </ArcherElement>
                    </React.Fragment>
                )

                currentGridIndex = currentGridIndex + 1;
            }

            rows.push(
                <Grid.Column
                    key={indexRow}
                    verticalAlign="middle"
                >
                    {rounds}
                </Grid.Column>
            )
        }

        return rows.reverse();
    }

    return (
        <Segment>
            <Header textAlign="center" content="Турнирная сетка" />
            <ArcherContainer>
                <Grid columns="equal">
                    <Grid.Row>
                        { getRenderGrid() }
                    </Grid.Row>
                </Grid>
            </ArcherContainer>
        </Segment>
    )
});
