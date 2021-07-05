import * as React from "react";
import {ArcherContainer, ArcherElement} from "react-archer";
import {Link} from "react-router-dom";
import {Divider, Grid, Header, List, Message, Popup, Segment, Table} from "semantic-ui-react";
import {TTournamentParticipant, TTournamentRound} from "./tournament-page-types";
import {AUTO_WIN} from "./tournament-constants";

type TProps = {
    grid: TTournamentRound[];
    mapUsersIdToUserInfo: Record<string, TTournamentParticipant>;
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

    /**
     * Получение ника игрока из маппинга
     */
    const getPlayerNicknameById = (userId: string | undefined) => {
        if (!userId) {
            return '-';
        }

        if (userId === AUTO_WIN.VALUE) {
            return AUTO_WIN.TITLE;
        }

        return props.mapUsersIdToUserInfo[userId]?.nickname;
    }

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
                                <Popup
                                    disabled={currentRound.games.length === 0}
                                    hoverable
                                    trigger={
                                        <Table compact textAlign="center">
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell
                                                        colSpan={2}
                                                        style={{
                                                            backgroundColor: '#bee2ff'
                                                        }}
                                                    >
                                                        <b>{currentRound.round_format}</b>
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell
                                                        content={getPlayerNicknameById(currentRound.players[0]?.user_id)}
                                                        width={12}
                                                    />
                                                    <Table.Cell
                                                        content={currentRound.players[0]?.win_count || 0}
                                                        width={2}
                                                    />
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell
                                                        content={getPlayerNicknameById(currentRound.players[1]?.user_id)}
                                                        width={12}
                                                    />
                                                    <Table.Cell
                                                        content={currentRound.players[1]?.win_count || 0}
                                                        width={2}
                                                    />
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    }
                                >
                                    <Popup.Header content="Список сыгранных игр" />
                                    <Popup.Content>
                                        <List ordered>
                                            {
                                                currentRound.games.map(gameId => (
                                                    <List.Item>
                                                        <Link to={`/game/${gameId}`} target="_blank">
                                                            {gameId}
                                                        </Link>
                                                    </List.Item>
                                                ))
                                            }
                                        </List>
                                    </Popup.Content>
                                </Popup>
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
