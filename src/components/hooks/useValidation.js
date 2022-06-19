import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState('This field in required');
    const [minLenghtError, setMinLenghtError] = useState('');
    const [isLetter, setIsLetter] = useState('');
    const [isNumber, setIsNumber] = useState('');
    const [valueValid, setValueValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    value
                        ? setIsEmpty('')
                        : setIsEmpty('This field in required');
                    break;
                case "minLenght":
                    value.length === validations[validation]
                        ? setMinLenghtError('')
                        : setMinLenghtError('Should contain 12 characters');
                    break;
                case "isLetter":
                    const regIsLetter = /^[a-zа-яієї _]+$/gi;
                    regIsLetter.test(value)
                        ? setIsLetter('')
                        : setIsLetter('Only letters allowed');
                    break;
                case "isNumber":
                    const regIsNumber = /^\d+$/g;
                    regIsNumber.test(value)
                        ? setIsNumber('')
                        : setIsNumber('Only numbers allowed');
                    break;
                default:
                    break;
            }
        }
    }, [value]);

    useEffect(() => {
        if (isEmpty || minLenghtError || isNumber || isLetter) {
            setValueValid(false);
        } else {
            setValueValid(true);
        }
    }, [isEmpty, minLenghtError, isNumber, isLetter]);


    const setEmptyValues = () => {
        setIsEmpty('This field in required');
        setMinLenghtError('');
        setIsLetter('');
        setIsNumber('');
    };

    return {
        isEmpty,
        minLenghtError,
        isLetter,
        isNumber,
        valueValid,
        setEmptyValues
    };
};

export default useValidation;
