import * as React from "react";
import {Link} from "react-router-dom";
import {Icon, SemanticICONS, Table} from "semantic-ui-react";
import {convertUtcToLocalDate} from "../../../../utils/convert-utc-to-local-date";
import {UserLink} from "../../../user-link";
import "./short-game-info-row.css";

type TProps = {
    blueHero: string;
    blueNickname: string;
    blueUserId: string;
    date: string;
    id: string;
    redHero: string;
    redNickname: string;
    redUserId: string;
    result: SemanticICONS;
};

export const ShortGameInfoRow = React.memo((props: TProps) => (
    <Table.Row textAlign={"center"}>
        <Table.Cell>{convertUtcToLocalDate(props.date)}</Table.Cell>
        <Table.Cell>
            <UserLink
                // id={props.redUserId}
                id={""}
                // nickname={props.redNickname}
                nickname={"Скрыт"}
            />
        </Table.Cell>
        <Table.Cell>{props.redHero}</Table.Cell>
        <Table.Cell
            className="border-left-red border-right-blue"
        >
            <Icon name={props.result}/>
        </Table.Cell>
        <Table.Cell>{props.blueHero}</Table.Cell>
        <Table.Cell>
            <UserLink
                // id={props.blueUserId}
                id={""}
                // nickname={props.redNickname}
                nickname={"Скрыт"}
            />
        </Table.Cell>
        <Table.Cell>
            <Link to={`/game/${props.id}`} target="_blank">
                <Icon name="eye" size="large" />
            </Link>
        </Table.Cell>
    </Table.Row>
));
