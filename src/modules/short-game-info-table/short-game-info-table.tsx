import * as React from "react";
import {compose} from "redux";
import {Grid, Icon, Loader, Message, Pagination, Segment, Table, PaginationProps} from "semantic-ui-react";
import {DictionaryContext, EDictionaryName, withDictionaries} from "../dictionary";
import {ShortGameInfoRow} from "./components/short-game-info-row";
import {SHORT_GAME_INFO_TABLE_CONFIG} from "./short-game-info-table-constants";
import {TShortGameInfoTableConnectedProps, withShortGameInfoTableConnector} from "./short-game-info-table-connector";

type TOwnProps = {
    countItems?: number;
    hidePagination?: boolean;
};
type TProps = TOwnProps & TShortGameInfoTableConnectedProps;

const DEFAULT_PAGE_SIZE = 10;

/**
 * Визуальное отображение
 */
export const ShortGameInfoTable = React.memo((props: TProps) => {
    const { getLocalizeDictionaryValueByGameId } = React.useContext(DictionaryContext);

    const handleChangePagination = (event: React.SyntheticEvent, data: PaginationProps) => {
        props.fetchGames({
            items: props.countItems || DEFAULT_PAGE_SIZE,
            requestPage: Number(data.activePage),
        })
    };

    /**
     * Запрос данных для таблицы
     */
    React.useEffect(() => {
        props.fetchGames({
            items: props.countItems || DEFAULT_PAGE_SIZE,
            requestPage: 1,
        })
    }, []);

    /**
     * Если ошибка при загрузке с сервера
     */
    if (props.isErrorFetch) {
        return (
            <Message
                content="Не удалось получить данные с сервера"
                error
            />
        );
    }

    /**
     * Если данные с сервера еще запрашиваются крутим спиннер
     */
    if (props.isFetchingStatus) {
        return (
            <Segment>
                <Loader active inline="centered" size={"large"}/>
            </Segment>
        );
    }

    return (
        <>
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
                                blueHero={getLocalizeDictionaryValueByGameId(EDictionaryName.Heroes, row.blueHero)}
                                blueNickname={row.blueNickname}
                                date={row.date}
                                id={row.id}
                                key={index}
                                redHero={getLocalizeDictionaryValueByGameId(EDictionaryName.Heroes, row.redHero)}
                                redNickname={row.redNickname}
                                result={row.result}
                            />
                        ))
                    }
                </Table.Body>
            </Table>
            {
                !props.hidePagination && (
                    <Grid>
                        <Grid.Row centered>
                            <Pagination
                                defaultActivePage={props.pagination.activePage}
                                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                                nextItem={{ content: <Icon name='angle right' />, icon: true }}
                                onPageChange={handleChangePagination}
                                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                                totalPages={props.pagination.totalPages}
                            />
                        </Grid.Row>
                    </Grid>
                )
            }
        </>
    );
});

export const ShortGameInfoTableController = compose<React.FC<TOwnProps>>(
    withDictionaries,
    withShortGameInfoTableConnector,
)(ShortGameInfoTable);
