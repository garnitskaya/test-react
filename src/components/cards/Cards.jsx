import { useContext, useEffect, useState } from "react";
import { ModalContext } from "./../../contexts/ModalContext";
import serviceData from "../services/serviceData";
import CardItem from "../cardItem/CardItem";
import Button from "../button/Button";

import "./cards.scss";

const Cards = () => {
    const { openModal } = useContext(ModalContext);
    const [dataList, setDtaList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { getAllData } = serviceData();

    useEffect(() => {
        onRequest();
    }, []);

    if (loading) {
        return <h1 className="title">Загрузка...</h1>;
    }

    if (error) {
        return <h1 className="title">Ошибка</h1>;
    }

    const onRequest = () => {

        setLoading(true);
        getAllData()
            .then(onListLoaded)
            .catch(onError);
    };

    const onListLoaded = (data) => {
        setDtaList(data);
        setLoading(false);
    };

    const onError = () => {
        setLoading(false);
        setError(true);
    };

    const renderItem = dataList.map((item) => (
        <CardItem key={item.name} {...item} />
    ));

    const minPrice = Math.min(...dataList.map((num) => num.price));
    const itemMinPrice = dataList.filter((item) => item.price === minPrice);

    const handleClickBuyCheapest = () => {
        openModal(...itemMinPrice);
    };

    return (
        <div className="cards">
            <div className="cards__wrap">{renderItem}</div>
            <Button
                callback={handleClickBuyCheapest}
                cl="cards__btn"
                children="Buy cheapest"
            />
        </div>
    );
};

export default Cards;
