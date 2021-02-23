import * as React from "react";
import {Icon, SemanticICONS, Table} from "semantic-ui-react";
import "./short-game-info-row.css";

type TProps = {
    blueHero: string;
    blueNickname: string;
    date: string;
    redHero: string;
    redNickname: string;
    result: SemanticICONS;
};

export const ShortGameInfoRow = React.memo((props: TProps) => (
    <Table.Row textAlign={"center"}>
        <Table.Cell>{props.date}</Table.Cell>
        <Table.Cell className={"red_player"}>{props.redNickname}</Table.Cell>
        <Table.Cell className={"red_hero"}>{props.redHero}</Table.Cell>
        <Table.Cell><Icon name={props.result}/></Table.Cell>
        <Table.Cell className={"blue_hero"}>{props.blueHero}</Table.Cell>
        <Table.Cell className={"blue_player"}>{props.blueNickname}</Table.Cell>
        <Table.Cell><Icon name="angle down"/></Table.Cell>
    </Table.Row>
));
