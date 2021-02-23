import * as React from "react";
import {Container, Loader, Segment, Table} from "semantic-ui-react";
import {SHORT_GAME_INFO_TABLE_CONFIG} from "./games-constants";
import {GamesConnector, TGameConnectedProps} from "./games-connector";
import {ShortGameInfoRow} from "./components";

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
                                        <ShortGameInfoRow
                                            blueHero={row.blueHero}
                                            blueNickname={row.blueNickname}
                                            date={row.date}
                                            key={index}
                                            redHero={row.redHero}
                                            redNickname={row.redNickname}
                                            result={row.result}
                                        />
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
