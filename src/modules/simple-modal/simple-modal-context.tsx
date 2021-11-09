import {createContext} from "react";
import {TShowSimpleModalArgs} from "./simple-modal-types";

export const SimpleModalContext = createContext({
    showSimpleModal: (content: TShowSimpleModalArgs) => {},
});