import Styles from './Input.module.scss';

const Input = ({ type, placeholder, pattern, required }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            required={required}
            className={Styles.input}
        />
    );
}

export default Input;