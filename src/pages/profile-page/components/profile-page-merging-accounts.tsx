import React from "react";
import {Button, Grid, Header, Message, Segment} from "semantic-ui-react";
import { MERGING_ACCOUNT_MESSAGE_TEXT } from "../profile-page-constants";
import {SimpleModalContext} from "../../../modules/simple-modal";
import {createRequest} from "../../../utils/create-request";
import { useHistory } from "react-router-dom";
import { noop } from "lodash/fp";
import {ProfilePageMergeAccountsModal} from "./profile-page-merge-accounts-modal";

type TProps = {
    id: string | undefined;
};

/**
 * Компонент привязки старого аккаунта
 */
export const ProfilePageMergingAccounts = React.memo((
    {
        id,
    }: TProps
) => {
    const history = useHistory();
    const { showSimpleModal } = React.useContext(SimpleModalContext);

    const [isOpenMergeAccountModal, setOpenMergeAccountStatus] = React.useState(false);

    /**
     * Запрос на отказ от слияния
     */
    const requestCancelMergingAccount = async () => {
        await createRequest().post('/account/cancel-account-merging', { id });

        history.go(0);
    }

    /**
     * Обработчик нажатия отказа от слияния аккаунтов
     */
    const handleClickCancelMerging = () => {
        showSimpleModal({
            title: 'Отказ от слияния со старым аккаунтом',
            message: 'Вы уверены, что хотите отказаться от переноса данных из старого аккаунта?'
                + ' Возобновить операцию будет невозможно.',
            handleClickNo: noop,
            handleClickYes: requestCancelMergingAccount,
        })
    }

    return (
        <Segment>
            <ProfilePageMergeAccountsModal
                id={id}
                open={isOpenMergeAccountModal}
                setOpen={setOpenMergeAccountStatus}
            />
            <Header content="Слияние со старым аккаунтом" />
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Message
                            content={MERGING_ACCOUNT_MESSAGE_TEXT}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Button
                            color='green'
                            content="Произвести"
                            fluid
                            onClick={() => setOpenMergeAccountStatus(true)}
                        />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Button
                            color='orange'
                            content="Отказаться"
                            fluid
                            onClick={handleClickCancelMerging}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
})

ProfilePageMergingAccounts.displayName = 'ProfilePageMergingAccounts';
