import {SemanticICONS} from "semantic-ui-react";

/**
 * Тип ячейки панели навигации
 */
export type THeaderNavItem = {
    active: boolean;
    icon?: SemanticICONS;
    link: string;
    title: string;
};
