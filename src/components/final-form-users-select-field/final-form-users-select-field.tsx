import {map} from "lodash/fp";
import * as React from "react";
import {createRequest} from "../../utils/create-request";
import {FinalFormSelectField} from "../final-form-select-field";
import {TUserIdWithNickname} from "./final-form-users-select-field-types";

type TProps = {
    fluid?: boolean;
    label?: string;
    name: string;
    search?: boolean;
};

/**
 * Компонент отображения списка пользователей
 */
export const FinalFormUsersSelectField = React.memo((props: TProps) => {
    const [users, setUsers] = React.useState([] as TUserIdWithNickname[]);
    const [isLoading, setLoadingStatus] = React.useState(true);

    /**
     * Запрос списка всех пользователей
     */
    React.useEffect(() => {
        createRequest()
            .get('/account/get-all-id-with-nicknames')
            .then((response: { data: { DATA: TUserIdWithNickname[] } }) => setUsers(response.data.DATA))
            .finally(() => setLoadingStatus(false));
    }, []);

    /**
     * Преобразование списка пользователей в список опций для выбора
     */
    const mapUsersToOptions = map((item: TUserIdWithNickname) => ({
        key: item._id,
        text: item.nickname,
        value: item._id,
    }))

    return (
        <FinalFormSelectField
            {...props}
            loading={isLoading}
            options={mapUsersToOptions(users)}
            search={props.search}
        />
    )
})
