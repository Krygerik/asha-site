import * as React from "react";
import {Button, Grid, Header, Loader, Message, Segment, Table} from "semantic-ui-react";
import {TTournamentPageConnectedProps, withTournamentPageConnector} from "./tournament-list-connector";
import {TTournament} from "./tournament-list-types";

const TournamentList = React.memo((props: TTournamentPageConnectedProps) => {
    /**
     * Запрос актуальных турниров
     */
    React.useEffect(() => {
        props.fetchTournaments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * Обработчик нажатия кнопки "Обновить"
     */
    const handleClickRefresh = React.useCallback(() => {
        props.fetchTournaments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (props.isErrorFetch) {
        return (
            <Message
                content="Ошибка при загрузке списка турниров"
                red
            />
        );
    }

    if (props.isFetching) {
        return (
            <Segment>
                <Loader active inline="centered" size="large"/>
            </Segment>
        );
    }

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
                            onClick={handleClickRefresh}
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
                        props.tournaments.map((tournament: TTournament) => (
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
                                <Table.Cell
                                    content="TODO"
                                />
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </Segment>
    )
})

export const TournamentListController = withTournamentPageConnector(TournamentList);
