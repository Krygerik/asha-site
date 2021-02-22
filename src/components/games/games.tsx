import * as React from "react";
import {Container, Table} from "semantic-ui-react";

/**
 * Компонент отображения списка всех сыгранных игр
 */
export const Games = React.memo(() => {
    return (
        <Container>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Дата</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>21-02-2021 22:26</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Container>
    )
});
