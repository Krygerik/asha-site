import { noop } from "lodash";
import * as React from "react";
import {Button, Divider, Grid, Header, Segment, Table} from "semantic-ui-react";
import {UserLink} from "../../../components/user-link";
import {createRequest} from "../../../utils/create-request";
import {SimpleModalContext} from "../../../modules/simple-modal";
import {TTournamentParticipant} from "../tournament-page-types";
import {TWithUserListConnectedProps, withUserListConnector} from "./user-list-connector";

type TProps = {
    mapUsersIdToUserInfo: Record<string, TTournamentParticipant>;
    refreshPage: Function;
    tournamentEnded: boolean;
    tournamentId: string;
    tournamentStarted: boolean;
    userIdList: string[];
} & TWithUserListConnectedProps;

/**
 * Списсок участников турнира
 */
const UserListComponent = React.memo((props: TProps) => {
    const [loading, setLoadingStatus] = React.useState(false);
    const { showSimpleModal } = React.useContext(SimpleModalContext);

    /**
     * Текущий пользователь - участник
     */
    const userIsParticipant = props.activeUserId ? props.userIdList.includes(props.activeUserId) : false;

    /**
     * Обобщенный конструктор запросов для регистрации/снятии реги с турнира
     */
    const requestCreator = (url: string, user_id?: string) => {
        setLoadingStatus(true);
        createRequest()
            .post(url, {
                tournament_id: props.tournamentId,
                ...user_id
                    ? { user_id }
                    : {}
            })
            .then(() => props.refreshPage())
            .catch(e => {
                console.log(e?.response?.data?.MESSAGE || e.toString())
                props.refreshPage()
            })
    }

    /**
     * Обработчик нажатия "Зарегистрироваться в турнире"
     */
    const handleClickJoinToTournament = () => {
        showSimpleModal({
            handleClickNo: noop,
            handleClickYes: () => requestCreator('/tournament/register'),
            isPositive: true,
            message: 'Вы уверены, что хотите принять участие в турнире?',
            title: 'Регистрация на турнир',
        });
    }

    /**
     * Обработчик нажатия "Отменить регистрацию"
     */
    const handleClickLeaveFromTournament = () => {
        showSimpleModal({
            handleClickNo: noop,
            handleClickYes: () => requestCreator('/tournament/leave'),
            message: props.tournamentStarted
                ? 'Вы уверены, что хотите сдаться? Вернуться в турнир уже будет невозможно'
                : 'Вы уверены, что хотите отменить регистрацию на турнир?',
            title: props.tournamentStarted
                ? 'Снятие кандидатуры игрока с турнира'
                : 'Отмена регистрации игрока',
        });
    }

    /**
     * Обработчик нажатия "Выдать пользователю техническое поражение"
     */
    const handleClickSetParticipantTechnicalLoseButton = (participantId: string) => () => {
        showSimpleModal({
            title: 'Выставление игроку технического поражения',
            message: `Игроку ${props.mapUsersIdToUserInfo[participantId]?.nickname} будет проставлено техническое поражение.
             Вы уверены, что хотите продолжить?`,
            handleClickNo: noop,
            handleClickYes: () => requestCreator('/tournament/set-tech-lose', participantId),
        });
    }

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
                        props.activeUserId && !props.tournamentStarted && !props.tournamentEnded && (
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
                    {
                        props.tournamentStarted && userIsParticipant && !props.tournamentEnded && (
                            <Grid.Column width={4} floated="right">
                                <Button
                                    color="red"
                                    content="Сняться с турнира"
                                    fluid
                                    onClick={handleClickLeaveFromTournament}
                                />
                            </Grid.Column>
                        )
                    }
                </Grid.Row>
            </Grid>
            <Divider />
            {
                props.userIdList.length === 0 && (
                    <Header
                        content="Нет зарегистрированных участников"
                        textAlign="center"
                    />
                )
            }
            {
                props.userIdList.length > 0 && (
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
                                {
                                    props.activeUserIsAdmin && props.tournamentStarted && !props.tournamentEnded && (
                                        <Table.HeaderCell
                                            content="Управление"
                                        />
                                    )
                                }
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {props.userIdList.map(
                                (id: string, index: number) => (
                                    <Table.Row key={id}>
                                        <Table.Cell
                                            content={index+1}
                                        />
                                        <Table.Cell>
                                            <UserLink
                                                id={id}
                                                nickname={props.mapUsersIdToUserInfo[id]?.nickname}
                                            />
                                        </Table.Cell>
                                        <Table.Cell
                                            content={props.mapUsersIdToUserInfo[id]?.discord}
                                        />
                                        {
                                            props.activeUserIsAdmin && props.tournamentStarted && !props.tournamentEnded && (
                                                <Table.Cell width={4}>
                                                    <Button
                                                        color="red"
                                                        content="Тех. поражение"
                                                        fluid
                                                        onClick={handleClickSetParticipantTechnicalLoseButton(id)}
                                                    />
                                                </Table.Cell>
                                            )
                                        }
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

export const UserList = withUserListConnector(UserListComponent);