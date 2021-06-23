import { omit } from "lodash";
import * as React from "react";
import {Loader, Message} from "semantic-ui-react";

type TProps = {
    request: Function;
} & any;

/**
 * Хок для контроля статуса загрузки данных с сервера
 */
export const withFetching = (Component: React.FC<any>) => (props: TProps) => {
    const [isErrorFetch, setErrorFetchingStatus] = React.useState(false);
    const [isFetching, setFetchingStatus] = React.useState(true);
    const [data, setData] = React.useState(true);

    /**
     * Контролируемый запрос
     */
    const fetchData = () => {
        setFetchingStatus(true);

        props.request()
            .then((response: { data: { DATA: any } }) => setData(response.data.DATA))
            .catch(() => setErrorFetchingStatus(true))
            .finally(() => setFetchingStatus(false));
    };

    /**
     * Запрос при первоначальном рендере
     */
    React.useEffect(
        () => {
            fetchData();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    if (isErrorFetch) {
        return (
            <Message
                content="Произошла ошибка при запросе данных с сервера"
                color="red"
            />
        )
    }

    if (isFetching) {
        return (
            <Loader active inline="centered" size="large" />
        );
    }

    return (
        <Component
            {...omit(props, ['request'])}
            data={data}
            refreshData={fetchData}
        />
    )
}
