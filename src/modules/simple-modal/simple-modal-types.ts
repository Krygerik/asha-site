
/**
 * Данные, отображаемые в модалке
 */
export type TShowSimpleModalArgs = {
    // Обработчик нажатия на кнопку "Отмена" в модальном окне
    handleClickNo: Function;
    // Обработчик нажатия на кнопку "Продолжить" в модальном окне
    handleClickYes: Function;
    // Сообщение в модалке
    message: string;
    // Заголовок модального окна
    title: string;
}