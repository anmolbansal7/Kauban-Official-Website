import styles from './styles.module.css';

const Button = ({type = 'filled', label = ''}) => {
    return (
        <button className={`${styles.button} ${type === 'hollow' ? styles.button_hollow : styles.button_filled}`}>
            {label}
</button>
    )
}

export default Button;