import React from "react";
import {Table} from "semantic-ui-react";

type TProps = {
    changed_rating: number;
    new_rating: number;
};

/**
 * Отображение информации, касаемой рейтинга
 */
export const RatingInfo = React.memo((props: TProps) => (
    <Table columns={2} singleLine size="large" textAlign="center" striped>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan={2} content="Изменения рейтинга игрока" />
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell content="Изменение на" />
                <Table.Cell content={props.changed_rating} />
            </Table.Row>
            <Table.Row>
                <Table.Cell content="Итоговый" />
                <Table.Cell content={props.new_rating} />
            </Table.Row>
        </Table.Body>
    </Table>
));
