import Styles from './button.module.scss';

/*
Props

title: string
kind: "primary" | "secundary"

*/

const Button = ({ title, kind }) => {
    const genarationClassByKind = () => {
        if (kind === "secundary") {
            return Styles.secundary;
        }

        return Styles.primary;
    }

    return (
        <button className={`${Styles.button} ${genarationClassByKind()}`}>{title}</button>
    );
}

export default Button;