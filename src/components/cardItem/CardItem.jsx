import { useContext } from "react";
import { ModalContext } from "./../../contexts/ModalContext";
import Button from "../button/Button";

import "./cardItem.scss";

const CardItem = ({ name, category, price }) => {
    const { openModal } = useContext(ModalContext);

    const handleClickBuy = () => {
        openModal({ name, category, price });
    };

    return (
        <div className="card-item">
            <div className="card-item__block-name">
                <div className="card-item__category">{category}</div>
                <div className="card-item__name"> {name}</div>
            </div>
            <div className="card-item__block-price">
                <div className="card-item__price"> {price}</div>
                <Button callback={handleClickBuy} children="buy" cl="card-item__btn" />
            </div>
        </div>
    );
};

export default CardItem;
