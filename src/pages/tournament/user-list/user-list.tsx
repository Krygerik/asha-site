import * as React from "react";
import {compose} from "redux";
import {Button, Divider, Grid, Header, Segment, Table} from "semantic-ui-react";
import {createRequest} from "../../../utils/create-request";
import {withFetching} from "../../../wrappers";
import {TTournamentParticipant} from "../tournament-page-types";
import {TWithUserListConnectedProps, withUserListConnector} from "./user-list-connector";

type TProps = {
    data: TTournamentParticipant[];
    refreshPage: Function;
    tournamentId: string;
} & TWithUserListConnectedProps;

/**
 * Списсок участников турнира
 */
const UserListComponent = React.memo((props: TProps) => {
    const [loading, setLoadingStatus] = React.useState(false);

    /**
     * Текущий пользователь - участник
     */
    const userIsParticipant = props.data.find(participant => participant._id === props.activeUserId);

    /**
     * Обобщенный конструктор запросов для регистрации/снятии реги с турнира
     */
    const requestCreator = (url: string) => {
        setLoadingStatus(true);
        createRequest()
            .post(url, { tournament_id: props.tournamentId })
            .then(() => props.refreshPage())
            .catch(e => console.log(e?.response?.data?.MESSAGE || e.toString()))
    }

    /**
     * Обработчик нажатия "Зарегистрироваться в турнире"
     */
    const handleClickJoinToTournament = () => requestCreator('/tournament/register');

    /**
     * Обработчик нажатия "Отменить регистрацию"
     */
    const handleClickLeaveFromTournament = () => requestCreator('/tournament/leave')

    return (
        <Segment loading={loading}>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4} verticalAlign="middle">
                        <Header
                            content="Список участников"
                        />
                    </Grid.Column>
                    {
                        props.activeUserId && (
                            <Grid.Column width={4} floated="right">
                                {
                                    userIsParticipant
                                        ? (
                                            <Button
                                                color="orange"
                                                content="Отменить регистрацию"
                                                fluid
                                                onClick={handleClickLeaveFromTournament}
                                            />
                                        )
                                        : (
                                            <Button
                                                color="green"
                                                content="Зарегистрироваться"
                                                fluid
                                                onClick={handleClickJoinToTournament}
                                            />
                                        )
                                }
                            </Grid.Column>
                        )
                    }
                </Grid.Row>
            </Grid>
            <Divider />
            {
                props.data.length === 0 && (
                    <Header
                        content="Нет зарегистрированных участников"
                        textAlign="center"
                    />
                )
            }
            {
                props.data.length > 0 && (
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell
                                    content="Номер игрока"
                                />
                                <Table.HeaderCell
                                    content="Никнейм"
                                />
                                <Table.HeaderCell
                                    content="Дискорд"
                                />
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {props.data.map(
                                (participant: TTournamentParticipant, index: number) => (
                                    <Table.Row key={participant._id}>
                                        <Table.Cell
                                            content={index+1}
                                        />
                                        <Table.Cell
                                            content={participant.nickname}
                                        />
                                        <Table.Cell
                                            content={participant.discord}
                                        />
                                    </Table.Row>
                                )
                            )}
                        </Table.Body>
                    </Table>
                )
            }
        </Segment>
    )
});

export const UserList = compose<React.FC<any>>(
    withFetching,
    withUserListConnector,
)(UserListComponent);