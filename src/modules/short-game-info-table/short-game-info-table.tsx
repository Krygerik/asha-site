import {FormApi} from "final-form";
import * as React from "react";
import {Form} from "react-final-form";
import {compose} from "redux";
import {
    Button,
    Form as SemanticForm,
    Grid,
    Header,
    Icon,
    Loader,
    Message,
    Pagination,
    PaginationProps,
    Segment,
    Table
} from "semantic-ui-react";
import {FinalFormDictionarySelectField} from "../../components/final-form-dictionary-select-field";
import {FinalFormSelectField} from "../../components/final-form-select-field";
import {DictionaryContext, EDictionaryName, withDictionaries} from "../dictionary";
import {ShortGameInfoRow} from "./components/short-game-info-row";
import {SHORT_GAME_INFO_TABLE_CONFIG} from "./short-game-info-table-constants";
import {TShortGameInfoTableConnectedProps, withShortGameInfoTableConnector} from "./short-game-info-table-connector";
import {TSearchGamesFormValues} from "./short-game-info-table-types";
import {THeroRecord} from "../dictionary/dictionary-types";

type TOwnProps = {
    countItems?: number;
    hideFilter?: boolean;
    hidePagination?: boolean;
};
type TProps = TOwnProps & TShortGameInfoTableConnectedProps;

const DEFAULT_PAGE_SIZE = 10;

/**
 * Визуальное отображение
 */
export const ShortGameInfoTable = React.memo((props: TProps) => {
    const { getLocalizeDictionaryValueByGameId } = React.useContext(DictionaryContext);

    /**
     * Активные значения фильтрации
     */
    const [searchGameFilter, setFilterGamesData] = React.useState({} as TSearchGamesFormValues);

    /**
     * Обработчик перехода по пагинации
     */
    const handleChangePagination = (event: React.SyntheticEvent, data: PaginationProps) => {
        props.fetchGames(
            {
                items: props.countItems || DEFAULT_PAGE_SIZE,
                requestPage: Number(data.activePage),
            },
            searchGameFilter,
        );
    };

    /**
     * Обработчик поиска списка игр с фильтрацией
     */
    const handleSubmitSearchGames = (values: TSearchGamesFormValues) => {
        setFilterGamesData(values);

        props.fetchGames(
            {
                items: props.countItems || DEFAULT_PAGE_SIZE,
                requestPage: 1,
            },
            values
        );
    };

    /**
     * Обработчик нажатия на очистку формы фильтра
     */
    const handleClickClearFilter = (form: FormApi<any, any>) => {
        setFilterGamesData({});
        form.reset()
    }

    /**
     * Запрос данных для таблицы при загрузке страницы
     */
    React.useEffect(() => {
        props.fetchGames({
            items: props.countItems || DEFAULT_PAGE_SIZE,
            requestPage: 1,
        });

        /**
         * Запрос списка игроков для фильтра
         */
        props.fetchUsersIdWithNicknames();
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
            {
                !props.hideFilter && (
                    <Segment>
                        <Header
                            textAlign="center"
                            content="Параметры фильтрации"
                        />
                        <Form
                            onSubmit={handleSubmitSearchGames}
                            initialValues={{}}
                            render={({handleSubmit, form, values }) => (
                                <SemanticForm size='large' onSubmit={handleSubmit}>
                                    <Grid>
                                        <Grid.Row columns="equal">
                                            <Grid.Column>
                                                <FinalFormDictionarySelectField
                                                    dictionary={EDictionaryName.Races}
                                                    label="Фракция"
                                                    name="race"
                                                />
                                            </Grid.Column>
                                            <Grid.Column>
                                                <FinalFormDictionarySelectField
                                                    dictionary={EDictionaryName.Heroes}
                                                    // @ts-ignore
                                                    filter={
                                                        values.race
                                                            ? (item: THeroRecord) => item.race_game_id === values.race
                                                            : undefined
                                                    }
                                                    label="Герой"
                                                    name="hero"
                                                />
                                            </Grid.Column>
                                            <Grid.Column>
                                                <FinalFormSelectField
                                                    label="Игрок"
                                                    name="user_id"
                                                    options={props.userNicknamesOptionList}
                                                />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row centered>
                                            <Grid.Column width={4}>
                                                <Button
                                                    content="Сбросить"
                                                    fluid
                                                    onClick={() => handleClickClearFilter(form)}
                                                    size='large'
                                                />
                                            </Grid.Column>
                                            <Grid.Column width={4}>
                                                <Button
                                                    content="Отфильтровать"
                                                    fluid
                                                    primary
                                                    size='large'
                                                    type="submit"
                                                />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </SemanticForm>
                            )}
                        />
                    </Segment>
                )
            }
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
