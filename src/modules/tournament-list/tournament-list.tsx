import * as React from "react";
import {Link} from "react-router-dom";
import {Button, Grid, Header, Icon, Segment, Table} from "semantic-ui-react";
import {DeleteTournament} from "../../pages/tournament-list/delete-tournament";
import { convertUtcToLocalDate } from "../../utils/convert-utc-to-local-date";
import {withFetching} from "../../wrappers";
import {WithPermissionWrapper} from "../../wrappers/with-permission";
import {ERoles} from "../profile";
import {TTournament} from "./tournament-list-types";

type TProps = {
    data: TTournament[];
    header?: string;
    withoutRefresh?: boolean;
    refreshData: Function;
}

const TournamentList = React.memo((props: TProps) => (
    <Segment>
        <Grid>
            <Grid.Row verticalAlign="middle">
                <Grid.Column width={8}>
                    <Header
                        content={props.header ? props.header : "Список турниров"}
                    />
                </Grid.Column>
                {
                    !props.withoutRefresh && (
                        <Grid.Column width={3} floated="right">
                            <Button
                                content="Обновить"
                                fluid
                                onClick={() => props.refreshData()}
                            />
                        </Grid.Column>
                    )
                }
            </Grid.Row>
        </Grid>

        <Table>
            <Table.Header>
                <Table.Row
                    textAlign="center"
                >
                    <Table.HeaderCell
                        content="Название турнира"
                    />
                    <Table.HeaderCell
                        content="Дата начала турнира"
                    />
                    <Table.HeaderCell
                        content="Статус турнира"
                    />
                    <Table.HeaderCell
                        content="Количество участников"
                    />
                    <Table.HeaderCell
                        width={2}
                        content="Действия"
                    />
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    props.data.map((tournament: TTournament) => (
                        <Table.Row
                            key={tournament._id}
                            textAlign="center"
                        >
                            <Table.Cell
                                content={tournament.name}
                            />
                            <Table.Cell
                                content={convertUtcToLocalDate(tournament.start_date)}
                            />
                            <Table.Cell
                                content={
                                    tournament.started
                                        ? tournament.winner_id
                                            ? "Завершен"
                                            : "В процессе"
                                        : "Регистрация на турнир"
                                }
                            />
                            <Table.Cell
                                content={`${tournament.users.length}/${tournament.maximum_player_count}`}
                            />
                            <Table.Cell>
                                <Link
                                    target="_blank"
                                    title="Просмотр"
                                    to={`/tournament/${tournament._id}`}
                                >
                                    <Icon name="eye" size="large" />
                                </Link>
                                <WithPermissionWrapper accessRole={ERoles.ADMIN}>
                                    <DeleteTournament
                                        refreshData={props.refreshData}
                                        tourId={tournament._id}
                                        tourName={tournament.name}
                                    />
                                </WithPermissionWrapper>
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    </Segment>
))

export const TournamentListController = withFetching(TournamentList);
