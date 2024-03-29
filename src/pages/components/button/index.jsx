import Styles from './button.module.scss';

/*
Props

title: string
kind: "primary" | "secundary"

*/

const Button = ({ title, kind, onClick, type }) => {
    const genarationClassByKind = () => {
        if (kind === "secundary") return Styles.secundary;
        if (kind === "full") return Styles.full;

        return Styles.primary;
    }

    return (
        <button
            type={type}
            className={`${Styles.button} ${genarationClassByKind()}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default Button;