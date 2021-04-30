import { omit } from "lodash/fp";
import * as React from "react";
import {Loader, Message, Segment} from "semantic-ui-react";
import {TDictionaryConnectedProps, withDictionaryConnector} from "./dictionary-connector";
import {ERROR_FETCH_DICTIONARY} from "./dictionary-constants";

/**
 * ХОК для работы со справочниками
 */
export const withDictionaries = (Component: React.FC<any>) => withDictionaryConnector(
    (props: TDictionaryConnectedProps) => {
        /**
         * Запрос справочников
         */
        React.useEffect(() => {
            if (!props.dictionaries && !props.isFetchingStatusDictionaries) {
                props.fetchDictionaries();
            }
        }, []);

        /**
         * Спиннер, если справочник не загружен
         */
        if (props.isFetchingStatusDictionaries) {
            return (
                <Segment>
                    <Loader active inline="centered" size={"large"}/>
                </Segment>
            );
        }

        /**
         * Если справочники загрузились с ошибкой
         */
        if (props.isErrorFetchedDictionaries) {
            return (
                <Message
                  red
                  content={ERROR_FETCH_DICTIONARY}
                />
            );
        }

        return (
            <Component
                {...omit([
                    'fetchDictionaries',
                    'isErrorFetchedDictionaries',
                    'isFetchedDictionary',
                ])(props)}
            />
        );
    }
);
