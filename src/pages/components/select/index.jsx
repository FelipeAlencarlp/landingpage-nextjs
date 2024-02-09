import Styles from './select.module.scss';

const Select = ({
    placeholder,
    required,
    options,
    onChange,
    name,
    id,
    value
}) => {
    return (
        <select
            id={id}
            name={name}
            className={Styles.select}
            value={value}
            onChange={onChange}
            required={required}>
            <option value="" >{placeholder}</option>
            {
                options?.map((option, index) => (
                    <option key={index} value={option.value} >{option.label}</option>
                ))
            }
        </select>
    );
}

export default Select;