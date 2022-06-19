import ErrorField from './../errorField/ErrorField';
import "./field.scss";

const Field = ({
    name,
    value,
    type,
    placeholder,
    onChange,
    onBlur,
    isDirty,
    isEmpty,
    minLenghtError,
    isLetter,
    isNumber,
    setEmptyValue,
}) => {
    const valuesСhecking =
        (isDirty && isEmpty) ||
        (isDirty && minLenghtError) ||
        (isDirty && isNumber) ||
        (isDirty && isLetter);

    return (
        <div className="field">
            <label className="field__label" htmlFor={name}>
                <span
                    className={`${valuesСhecking && "error-close"}`}
                    onClick={setEmptyValue}
                />
                <input
                    id={name}
                    onChange={(e) => onChange(e)}
                    onBlur={(e) => onBlur(e)}
                    className={`${valuesСhecking ? `field-${name} error` : `field-${name}`}`}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                />
            </label>
            {isDirty && isEmpty && <ErrorField children={isEmpty} />}
            {isDirty && minLenghtError && <ErrorField children={minLenghtError} />}
            {isDirty && isNumber && <ErrorField children={isNumber} />}
            {isDirty && isLetter && <ErrorField children={isLetter} />}
        </div>
    );
};

export default Field;
