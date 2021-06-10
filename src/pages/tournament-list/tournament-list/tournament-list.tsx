import * as React from "react";
import {Link} from "react-router-dom";
import {Button, Grid, Header, Icon, Segment, Table} from "semantic-ui-react";
import {withFetching} from "../../../wrappers";
import {TTournament} from "./tournament-list-types";

type TProps = {
    data: TTournament[];
    refreshData: Function;
}

const TournamentList = React.memo((props: TProps) => {
    return (
        <Segment>
            <Grid>
                <Grid.Row verticalAlign="middle">
                    <Grid.Column width={4}>
                        <Header
                            content="Список турниров"
                        />
                    </Grid.Column>
                    <Grid.Column width={3} floated="right">
                        <Button
                            content="Обновить"
                            fluid
                            onClick={() => props.refreshData()}
                        />
                    </Grid.Column>
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
                                    content={tournament.start_date}
                                />
                                <Table.Cell>
                                    <Link to={`/tournament/${tournament._id}`} target="_blank">
                                        <Icon name="eye" size="large" />
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </Segment>
    )
})

export const TournamentListController = withFetching(TournamentList);
