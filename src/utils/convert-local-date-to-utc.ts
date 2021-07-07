import moment from "moment"
import {REPRESENTATIVE_DATE_MASK} from "../common/constants";

/**
 * Преобразование даты с utc формата на локаль пользователя
 */
export const convertLocalDateToUtc = (date: string) => {
    return moment(date, REPRESENTATIVE_DATE_MASK).utc().format();
}