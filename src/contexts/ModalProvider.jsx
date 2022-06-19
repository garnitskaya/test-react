import { useState } from "react";
import { ModalContext } from "./ModalContext";
import Modal from "./../components/modal/Modal";

const ModalProvider = ({ children }) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (modalConfig) => {
        setModalContent(modalConfig);
        setModalOpened(true);
    };

    const closeModal = () => {
        setModalOpened(false);
    };

    const modalValue = { openModal, closeModal };

    return (
        <ModalContext.Provider value={modalValue}>
            <Modal modalOpened={modalOpened} {...modalContent} />
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
