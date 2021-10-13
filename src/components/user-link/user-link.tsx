import * as React from "react";
import { Link } from "react-router-dom";

type TProps = {
    color?: string;
    id: string;
    nickname: string;
};

/**
 * Ссылка на профиль пользователя
 */
export const UserLink = React.memo((props: TProps) => (
    <Link
        target="_blank"
        to={`/profile/${props.id}`}
    >
        {props.nickname}
    </Link>
))