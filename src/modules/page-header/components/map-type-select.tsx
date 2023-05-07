import {Dropdown, Menu} from "semantic-ui-react";
import * as React from "react";
import { compose } from "redux";
import {TMapTypeSelectConnectedProps, withMapTypeSelectConnector} from "./map-type-select-connector";

/**
 * Выбор версии карты, для которой отображаются данные
 */
const MapTypeSelect = (props: TMapTypeSelectConnectedProps) => {
    /**
     * Запрос актуальных поддерживаемых типов карт
     */
    React.useEffect(() => {
        props.fetchMapTypeList();
    }, []);

    return (
        <Menu.Item key="mapTypeSelect">
            <Dropdown
                style={{ fontSize: "1.5em" }}
                loading={props.isFetching}
                onChange={props.handleChangeSelectedMapType}
                options={props.mapTypeOptionList}
                value={props.selectedMapType}
            />
        </Menu.Item>
    )
}

export const MapTypeSelectController: React.FC = compose(
    withMapTypeSelectConnector,
)(MapTypeSelect);