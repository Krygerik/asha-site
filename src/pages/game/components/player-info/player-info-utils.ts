import {EPlayerColor} from "../../game-types";
import {SemanticCOLORS} from "semantic-ui-react";

/**
 * Маппинг сохраненного цвета на цвет для компонентов Semantic
 */
export const mapPlayerColorToSegmentColor = (playerColor: EPlayerColor): SemanticCOLORS => {
    switch (playerColor) {
        case EPlayerColor.RED:
            return "red";
        case EPlayerColor.BLUE:
            return "blue";
    }
}
