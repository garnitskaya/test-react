import { useContext } from "react";
import { ModalContext } from "./../../contexts/ModalContext";
import Form from '../form/Form';

import "./modal.scss";

const Modal = ({ name, category, price, modalOpened }) => {
    const { closeModal } = useContext(ModalContext);

    return (
        <div
            onClick={closeModal}
            className={`${modalOpened ? "modal active" : "modal"}`}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`${modalOpened ? "modal__content active" : "modal__content"
                    }`}>
                <button onClick={closeModal} className="modal__close" />
                <div className="modal__category">{category}</div>
                <div className="modal__name">{name}</div>
                <div className="modal__price">{price}</div>

                <Form />
            </div>
        </div>
    );
};

export default Modal;
