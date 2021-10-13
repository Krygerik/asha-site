import {find} from "lodash/fp";
import {IShortGame, IShortPlayer} from "./short-game-info-table-types";
import {EPlayerColor} from "../../common/constants";

/**
 * Мапинг списка краткой информации по играм в даннные для таблицы краткой информации по играм
 */
export const transformShortGameInfoListToTableData = (shortGameInfoList: IShortGame[]) => {
    return shortGameInfoList.map((shortGameInfo: IShortGame) => {
        const redHero = find<IShortPlayer>({ color: EPlayerColor.RED })(shortGameInfo.players);
        const blueHero = find<IShortPlayer>({ color: EPlayerColor.BLUE })(shortGameInfo.players);

        const resultIcon = shortGameInfo.disconnect
            ? "broken chain"
            : shortGameInfo.winner === EPlayerColor.RED
                ? "angle right"
                : "angle left";

        return {
            blueHero: blueHero?.hero,
            blueUserId: blueHero?.user_id,
            blueNickname: blueHero?.nickname || "Неизвестный",
            date: shortGameInfo.date,
            id: shortGameInfo._id,
            redUserId: redHero?.user_id,
            redNickname: redHero?.nickname || "Неизвестный",
            result: resultIcon,
        };
    })
};
