import { noop } from "lodash";
import * as React from "react";
import {Icon} from "semantic-ui-react";
import { SimpleModalContext } from "../../../modules/simple-modal";
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
    const { showSimpleModal } = React.useContext(SimpleModalContext);

    /**
     * Запрос на удаление турнира
     */
    const requestDeleteTournament = () => {
        createRequest()
            .post('/tournament/delete', { tournament_id: props.tourId })
            .finally(() => props.refreshData());
    }

    /**
     * Обработчик нажатия кнопки "Удалить турнир"
     */
    const handleClickDeleteTournamentButton = () => {
        showSimpleModal({
            handleClickNo: noop,
            handleClickYes: requestDeleteTournament,
            message: `Вы действительно хотите удалить турнир "${props.tourName}"?`,
            title: "Удаление турнира",
        });
    }

    return (
        <React.Fragment>
            <Icon
                color="red"
                link
                name="delete"
                onClick={handleClickDeleteTournamentButton}
                size="large"
                title="Удаление"
            />
        </React.Fragment>
    )
})