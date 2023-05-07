import {AmmoCart, Ballista, FirstAidTent} from "../../assets/war-machines";

/**
 * Тип маппинга id на иконку военных машин для отображения
 */
export type TWarMachine = {
    gameId: string;
    icon: string;
};

export const WAR_MACHINES: TWarMachine[] = [
    {
        gameId: "1",
        icon: Ballista
    },
    {
        gameId: "3",
        icon: FirstAidTent
    },
    {
        gameId: "4",
        icon: AmmoCart
    }
];
