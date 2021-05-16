import moment from "moment"

/**
 * Преобразование даты с utc формата на локаль пользователя
 */
export const convertUtcToLocalDate = (utcDate: string) => {
    const utcMomentDate = moment.utc(utcDate);

    return utcMomentDate.local().format('YYYY-MM-DD HH:mm:ss');
}