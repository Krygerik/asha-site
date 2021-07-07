import * as React from "react";
import {Button, Form as SemanticForm, Header, Message, Modal, Segment} from "semantic-ui-react";
import {Form} from "react-final-form";
import {FinalFormInputTextField} from "../../../components/final-form-input-text-field";
import {FinalFormDateTimeInputField} from "../../../components/final-form-date-time-input-field";
import {FinalFormSelectField} from "../../../components/final-form-select-field";
import { ERoundFormat } from "../../../common/constants";
import {convertLocalDateToUtc} from "../../../utils/convert-local-date-to-utc";
import {TCreateTournamentModalFormValues} from "./create-tournament-modal-types";
import {createTournament} from "./create-tournament-modal-actions";

type TProps = {
    open: boolean;
    setOpen: Function;
};

/**
 * Формат раундов
 */
const ROUND_FORMAT_OPTIONS = Object.values(ERoundFormat).map(
    (value: string) => ({
        key: value,
        text: value,
        value,
    })
);

/**
 * Модалка создания турнира
 */
export const CreateTournamentModal = React.memo((props: TProps) => {
    /**
     * Статус ожидания ответа с сервера
     */
    const [isLoading, setLoading] = React.useState(false);
    /**
     * Ошибки с сервера
     */
    const [error, setError] = React.useState(null);
    /**
     * Турнир создан
     */
    const [isTournamentCreated, setTournamentCreateStatus] = React.useState(false);

    /**
     * Обработчик подтверждения создания турнира
     */
    const handleSubmit = async (values: TCreateTournamentModalFormValues) => {
        try {
            setLoading(true);

            await createTournament({
                ...values,
                start_date: convertLocalDateToUtc(values.start_date),
            });

            setTournamentCreateStatus(true);
        } catch (e) {
            setError(e.toString());
        } finally {
            setLoading(false);
        }
    }

    return (
        <Modal
            onClose={() => props.setOpen(false)}
            onOpen={() => props.setOpen(true)}
            open={props.open}
            size="tiny"
        >
            <Modal.Content>
                <Form
                    onSubmit={handleSubmit}
                    initialValues={{}}
                    render={({handleSubmit}) => (
                        <SemanticForm size='large' onSubmit={handleSubmit}>
                            <Header
                                as='h2'
                                color='teal'
                                textAlign='center'
                                content="Создание нового турнира"
                            />
                            <Segment
                                loading={isLoading}
                                stacked
                            >
                                <FinalFormInputTextField
                                    name="name"
                                    placeholder='Название турнира'
                                    required
                                />
                                <FinalFormDateTimeInputField
                                    name="start_date"
                                    placeholder='Дата начала турнира'
                                    required
                                />
                                <FinalFormInputTextField
                                    name="maximum_player_count"
                                    placeholder='Количество участников'
                                    required
                                    type="number"
                                />
                                <FinalFormSelectField
                                    name="super_final_format"
                                    options={ROUND_FORMAT_OPTIONS}
                                    placeholder='Формат суперфинала'
                                    required
                                />
                                <FinalFormSelectField
                                    name="rounds_format"
                                    options={ROUND_FORMAT_OPTIONS}
                                    placeholder='Формат прочих раундов'
                                    required
                                />
                                {
                                    error && (
                                        <Message
                                            color="red"
                                            content={error}
                                        />
                                    )
                                }
                                {
                                    isTournamentCreated && (
                                        <Message
                                            color="green"
                                            content="Турнир успешно создан"
                                        />
                                    )
                                }
                                <Button
                                    color='teal'
                                    content="Создать"
                                    fluid
                                    size='large'
                                    type="submit"
                                />
                            </Segment>
                        </SemanticForm>
                    )}
                />
            </Modal.Content>
        </Modal>
    )
})