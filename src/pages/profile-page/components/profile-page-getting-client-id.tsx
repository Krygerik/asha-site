import {noop} from "lodash/fp";
import * as React from "react";
import {Button, Grid, Header, Input, Message, Segment} from "semantic-ui-react";
import {createRequest} from "../../../utils/create-request";
import {SimpleModalContext} from "../../../modules/simple-modal";

/**
 * Компонент получения/изменения токена доступа к клиенту асха
 */
export const ProfilePageGettingClientId = () => {
    const { showSimpleModal } = React.useContext(SimpleModalContext);

    const [token, setToken] = React.useState<string | null>(null);
    const [loading, setLoadingStatus] = React.useState(false);
    const [isHiddenToken, setTokenHiddenStatus] = React.useState(true);

    /**
     * Запрос токена
     */
    const handleClickGetClientToken = async () => {
        try {
            setLoadingStatus(true);

            const response = await createRequest().get('/account/get-client-token');

            setToken(response?.data?.DATA);
        } catch (error) {
            showSimpleModal({
                handleClickYes: noop,
                isPositive: true,
                message: error?.response?.data?.MESSAGE,
                title: 'Ошибка при запросе токена',
            })
        } finally {
            setLoadingStatus(false);
        }
    }

    /**
     * Копирование токена вслепую
     */
    const handleClickCopyToken = () => {
        if (token) {
            navigator.clipboard.writeText(token);
        }
    }

    /**
     * Перегенерация токена
     */
    const handleClickReGenerationToken = async () => {
        try {
            setLoadingStatus(true);

            const response = await createRequest().get('/account/regenerate-client-token');

            setToken(response?.data?.DATA);
        } catch (error) {
            showSimpleModal({
                handleClickYes: noop,
                isPositive: true,
                message: error?.response?.data?.MESSAGE,
                title: 'Ошибка при перегенерации токена',
            })
        } finally {
            setLoadingStatus(false);
        }
    }

    return (
        <Segment>
            <Header content="Токен для входа в клиент АСХА" />

            <Grid>
                {
                    token && (
                        <Grid.Row>
                            <Grid.Column>
                                <Message
                                    warning
                                    content='Никому не сообщайте ваш токен входа в клиент!'
                                />
                            </Grid.Column>
                        </Grid.Row>
                    )
                }
                <Grid.Row>
                    {
                        !token && (
                            <Grid.Column width={4}>
                                <Button
                                    color='green'
                                    content="Получить токен"
                                    fluid
                                    loading={loading}
                                    onClick={handleClickGetClientToken}
                                />
                            </Grid.Column>
                        )
                    }
                    {
                        token && (
                            <>
                                <Grid.Column width={4}>
                                    <Input
                                        type={isHiddenToken ? 'password' : 'text'}
                                        value={token}
                                    />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Button
                                        color='orange'
                                        content={isHiddenToken ? "Показать" : "Скрыть"}
                                        fluid
                                        onClick={() => setTokenHiddenStatus(!isHiddenToken)}
                                    />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Button
                                        color='green'
                                        content='Копировать'
                                        fluid
                                        onClick={handleClickCopyToken}
                                    />
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Button
                                        color='orange'
                                        content='Перегенерировать'
                                        fluid
                                        onClick={handleClickReGenerationToken}
                                    />
                                </Grid.Column>
                            </>
                        )
                    }
                </Grid.Row>
            </Grid>
        </Segment>
    )
}
