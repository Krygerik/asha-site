import {map} from "lodash/fp";
import * as React from "react";
import {createRequest} from "../../utils/create-request";
import {FinalFormSelectField, TFinalFormSelectFieldProps} from "../final-form-select-field";
import {TUserIdWithNickname} from "./final-form-users-select-field-types";

type TFinalFormUsersSelectFieldProps = Omit<TFinalFormSelectFieldProps, 'options'>;

/**
 * Компонент отображения списка пользователей
 */
export const FinalFormUsersSelectField = React.memo((props: TFinalFormUsersSelectFieldProps) => {
    const [users, setUsers] = React.useState([] as TUserIdWithNickname[]);
    const [isLoading, setLoadingStatus] = React.useState(true);

    /**
     * Запрос списка всех пользователей
     */
    React.useEffect(() => {
        createRequest()
            .get('/account/get-all-id-with-nicknames')
            .then((response: { data: { DATA: TUserIdWithNickname[] } }) => setUsers(response.data.DATA.filter(x => x.visible)))
            .finally(() => setLoadingStatus(false));
    }, []);

    /**
     * Преобразование списка пользователей в список опций для выбора
     */
    const mapUsersToOptions = map((item: TUserIdWithNickname) => ({
        key: item._id,
        text: item.username,
        value: item._id,
    }))

    return (
        <FinalFormSelectField
            {...props}
            loading={isLoading}
            options={mapUsersToOptions(users)}
        />
    )
})
