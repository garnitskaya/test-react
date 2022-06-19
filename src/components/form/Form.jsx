import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import serviceData from '../services/serviceData';
import { useInput } from './../hooks/useInput';
import { ModalContext } from './../../contexts/ModalContext';
import Button from './../button/Button';
import Field from './../field/Field';

import './form.scss';

const Form = () => {
    const { closeModal } = useContext(ModalContext);
    const { postData } = serviceData();

    const user = useInput("", { isEmpty: true, isLetter: true });
    const number = useInput("", { isEmpty: true, minLenght: 12, isNumber: true });

    const clearInputs = () => {
        user.setEmptyValue();
        number.setEmptyValue();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: uuidv4(),
            user: user.value,
            number: number.value
        }

        postData(data)
            .then(res => console.log(res, "Отправка успешна"))
            .catch(err => console.log(err))

        clearInputs();

        const closeTimeout = setTimeout(() => {
            closeModal();
            clearTimeout(closeTimeout);
        }, 3000);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <Field {...user} type={"text"} placeholder="Name" name="user" />
            <Field {...number} type={"text"} placeholder="Number" name="number" />
            <Button
                disabled={!user.valueValid || !number.valueValid}
                children={
                    <>
                        order
                        <span className='arrow-hover'>
                            <span></span>
                        </span>
                    </>}
                cl="form__btn"
            />
        </form>
    );
};

export default Form;