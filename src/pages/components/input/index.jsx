import Styles from './Input.module.scss';

const Input = ({ type, placeholder, pattern, required, onBlur }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            required={required}
            className={Styles.input}
            onBlur={onBlur} // evento do input
        />
    );
}

export default Input;