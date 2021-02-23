import * as React from "react";
import {Container, Icon, Loader, Segment, Table} from "semantic-ui-react";
import {SHORT_GAME_INFO_TABLE_CONFIG} from "./games-constants";
import {GamesConnector, TGameConnectedProps} from "./games-connector";

type TProps = TGameConnectedProps;

/**
 * Компонент отображения списка всех сыгранных игр
 */
export const Games = React.memo((props: TProps) => {
    React.useEffect(() => {
        props.fetchGames()
    }, []);

    return (
        <Container>
            {
                props.isFetchedShortGameInfoList
                    ? (
                        <Table>
                            <Table.Header>
                                <Table.Row textAlign={"center"}>
                                    {
                                        SHORT_GAME_INFO_TABLE_CONFIG.map((cell, index) => (
                                            <Table.HeaderCell
                                                key={index}
                                                width={cell.width}
                                            >
                                                {cell.title}
                                            </Table.HeaderCell>
                                        ))
                                    }
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {
                                    props.tableData.map((row, index) => (
                                        <Table.Row
                                            textAlign={"center"}
                                            key={index}
                                        >
                                            <Table.Cell>{row.date}</Table.Cell>
                                            <Table.Cell className={"red_player"}>{row.redNickname}</Table.Cell>
                                            <Table.Cell>{row.redHero}</Table.Cell>
                                            <Table.Cell><Icon name={row.result}/></Table.Cell>
                                            <Table.Cell>{row.blueHero}</Table.Cell>
                                            <Table.Cell className={"blue_player"}>{row.blueNickname}</Table.Cell>
                                            <Table.Cell><Icon name="angle down"/></Table.Cell>
                                        </Table.Row>
                                    ))
                                }
                            </Table.Body>
                        </Table>
                    )
                    : (
                        <Segment>
                            <Loader active inline="centered" size={"large"}/>
                        </Segment>
                    )
            }
        </Container>
    )
});

export const GamesController = GamesConnector(Games);
