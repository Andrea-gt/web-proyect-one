import styles from './Button.module.css'

const Button = ({type, size, label}) => {
    const buttonClass = `${styles.button} ${styles[type]} ${styles[size]}`
    return (
        <button className={buttonClass} type="button">
            {label}
        </button>
    )
}

export default Button
