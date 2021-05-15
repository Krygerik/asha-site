import {Loader, Message, Segment} from "semantic-ui-react";
import {isEmpty} from "lodash";
import * as React from "react";
import {DictionaryContext} from "./dictionary-context";
import {ERROR_FETCH_DICTIONARY} from "./dictionary-constants";

/**
 * ХОК для работы со справочниками
 */
export const withDictionaries = (Component: React.FC<any>) => (props: any) => {
    const dictionaries = React.useContext(DictionaryContext);

    /**
     * Статус загрузки справочников
     */
    const isLoading = !dictionaries.isFetching && !dictionaries.isErrorFetch && isEmpty(dictionaries.dictionaries);

    /**
     * Запрос справочников
     */
    React.useEffect(() => {
        if (isLoading && dictionaries.fetchDictionaries) {
            dictionaries.fetchDictionaries();
        }
    }, []);

    /**
     * Если справочники загрузились с ошибкой
     */
    if (dictionaries.isErrorFetch) {
        return (
            <Message
                red
                content={ERROR_FETCH_DICTIONARY}
            />
        );
    }

    /**
     * Спиннер, если справочник не загружен
     */
    if (dictionaries.isFetching || isEmpty(dictionaries.dictionaries)) {
        return (
            <Segment>
                <Loader active inline="centered" size={"large"}/>
            </Segment>
        );
    }

    return (
        <Component {...props} />
    );
};
