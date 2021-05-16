import * as React from "react";
import {Link} from "react-router-dom";
import {Icon, SemanticICONS, Table} from "semantic-ui-react";
import {convertUtcToLocalDate} from "../../../../utils/convert-utc-to-local-date";
import "./short-game-info-row.css";

type TProps = {
    blueHero: string;
    blueNickname: string;
    date: string;
    id: string;
    redHero: string;
    redNickname: string;
    result: SemanticICONS;
};

export const ShortGameInfoRow = React.memo((props: TProps) => (
    <Table.Row textAlign={"center"}>
        <Table.Cell>{convertUtcToLocalDate(props.date)}</Table.Cell>
        <Table.Cell className={"red_player"}>{props.redNickname}</Table.Cell>
        <Table.Cell className={"red_hero"}>{props.redHero}</Table.Cell>
        <Table.Cell><Icon name={props.result}/></Table.Cell>
        <Table.Cell className={"blue_hero"}>{props.blueHero}</Table.Cell>
        <Table.Cell className={"blue_player"}>{props.blueNickname}</Table.Cell>
        <Table.Cell>
            <Link to={`/game/${props.id}`} target="_blank">
                <Icon name="eye" size="large" />
            </Link>
        </Table.Cell>
    </Table.Row>
));
