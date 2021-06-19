import * as React from "react";
import {Confirm, Icon} from "semantic-ui-react";
import {createRequest} from "../../../utils/create-request";

type TProps = {
    refreshData: Function;
    tourId: string;
    tourName: string;
};

/**
 * Кнопка удаления турнира
 */
export const DeleteTournament = React.memo((props: TProps) => {
    const [isOpen, setOpen] = React.useState(false);

    const handleConfirm = () => {
        createRequest()
            .post('/tournament/delete', { tournament_id: props.tourId })
            .finally(() => props.refreshData());
    }

    return (
        <React.Fragment>
            <Icon
                color="red"
                link
                name="delete"
                onClick={() => setOpen(true)}
                size="large"
            />
            <Confirm
                cancelButton='Нет'
                confirmButton="Удалить"
                content={`Вы действительно хотите удалить турнир "${props.tourName}"?`}
                header="Удаление турнира"
                onCancel={() => setOpen(false)}
                onConfirm={handleConfirm}
                open={isOpen}
                size='tiny'
            />
        </React.Fragment>
    )
})