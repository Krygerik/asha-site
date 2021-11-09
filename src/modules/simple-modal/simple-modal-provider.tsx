import * as React from "react";
import {Button, Modal } from "semantic-ui-react";
import { SimpleModalContext } from "./simple-modal-context";
import { TShowSimpleModalArgs } from "./simple-modal-types";

export const SimpleModalProvider = ({ children }: { children: React.ReactChild}) => {
    const [isOpenModal, setModalOpened] = React.useState(false);
    const [modalContent, setModalContent] = React.useState({} as TShowSimpleModalArgs);

    const closeModal = () => {
        setModalOpened(false)
    }

    const openModal = () => {
        setModalOpened(true);
    }

    const handleClickContinue = () => {
        setModalOpened(false);
        modalContent.handleClickYes();
    }

    const handleClickCancel = () => {
        setModalOpened(false);
        modalContent.handleClickNo();
    }

    /**
     * Функция создатель модальных окон в местах вызова контекста
     */
    const showSimpleModal = (content: TShowSimpleModalArgs) => {
        setModalContent(content);
        openModal();
    }

    return (
        <SimpleModalContext.Provider value={{ showSimpleModal }}>
            <Modal
                onClose={closeModal}
                onOpen={openModal}
                open={isOpenModal}
                size="tiny"
            >
                <Modal.Header content={modalContent.title} />
                <Modal.Content style={{ fontSize: '16px' }} content={modalContent.message} />
                <Modal.Actions>
                    <Button
                        content="Отмена"
                        onClick={handleClickCancel}
                        {...modalContent.isPositive ? { negative: true } : { positive: true }}
                    />
                    <Button
                        content="Продолжить"
                        onClick={handleClickContinue}
                        {...modalContent.isPositive ? { positive: true } : { negative: true }}
                    />
                </Modal.Actions>
            </Modal>
            {children}
        </SimpleModalContext.Provider>
    )
}