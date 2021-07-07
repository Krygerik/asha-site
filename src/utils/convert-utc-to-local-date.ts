import moment from "moment"
import {REPRESENTATIVE_DATE_MASK} from "../common/constants";

/**
 * Преобразование даты с utc формата на локаль пользователя
 */
export const convertUtcToLocalDate = (utcDate: string) => {
    return moment.utc(utcDate).local().format(REPRESENTATIVE_DATE_MASK);
}