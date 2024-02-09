import Styles from './Input.module.scss';

const Input = ({
    type,
    placeholder,
    pattern,
    required,
    onBlur,
    name,
    id,
    onChange,
    value
}) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            value={value}
            required={required}
            className={Styles.input}
            onBlur={onBlur} // evento do input
            onChange={onChange}
        />
    );
}

export default Input;