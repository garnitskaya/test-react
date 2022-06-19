import './errorField.scss';

const ErrorField = ({ children }) => {
    return (
        <span className="error__field">{children}</span>
    );
};

export default ErrorField;