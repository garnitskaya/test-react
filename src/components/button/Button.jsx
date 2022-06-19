import "./button.scss";

const Button = ({ children, cl, callback, disabled }) => {
    return (
        <button disabled={disabled} onClick={callback} className={`btn ${cl}`}>
            {children}
        </button>
    );
};

export default Button;
