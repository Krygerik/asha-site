import {AmmoCart, Ballista, FirstAidTent} from "../../assets/war-machines";

/**
 * Тип заклинания для отображения
 */
export type TWarMachine = {
    gameId: string;
    icon: string;
};

export const WAR_MACHINES: TWarMachine[] = [
    {
        gameId: "ID1",
        icon: Ballista
    },
    {
        gameId: "ID3",
        icon: FirstAidTent
    },
    {
        gameId: "ID4",
        icon: AmmoCart
    }
];
