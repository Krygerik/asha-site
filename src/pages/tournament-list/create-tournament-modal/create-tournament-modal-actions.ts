import {createRequest} from "../../../utils/create-request";
import {TCreateTournamentModalFormValues} from "./create-tournament-modal-types";

/**
 * Запрос на создание турнира
 */
export const createTournament = async (values: TCreateTournamentModalFormValues) => {
    try {
        await createRequest().post('/tournament/create', values);
    } catch (e) {
        throw new Error(e.response?.data?.MESSAGE || e);
    }
}
