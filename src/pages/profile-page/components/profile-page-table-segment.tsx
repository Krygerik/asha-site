import * as React from "react";
import {Header, Segment, Table} from "semantic-ui-react";
import { TTableConfig } from "../profile-page-types";

type TProps = {
    header: string;
    tableData: Record<string, any>;
    tableConfig: TTableConfig;
};

/**
 * Отображение информации для чтения в сегменте
 */
export const ProfilePageTableSegment = React.memo((props: TProps) => (
    <Segment>
        <Header content={props.header} />
        <Table singleLine>
            <Table.Body>
                {
                    props.tableConfig.map(row => {
                        const isEmptyValue = row.isList
                            ? props.tableData[row.key].length === 0
                            : props.tableData[row.key] === undefined;

                        return (
                            <Table.Row key={row.key}>
                                <Table.Cell width={4}>
                                    <b>{row.label}</b>
                                </Table.Cell>
                                <Table.Cell>
                                    {
                                        isEmptyValue
                                            ? row.emptyValue || "Значение не найдено"
                                            : row.isList
                                                ? props.tableData[row.key].map((item: any, index: number) => (
                                                    <p key={`${item}-${index}`}>{item}</p>
                                                ))
                                                : typeof props.tableData[row.key] === "boolean"
                                                    ? props.tableData[row.key] ? "Да" : "Нет"
                                                    : props.tableData[row.key]
                                    }
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    </Segment>
));
