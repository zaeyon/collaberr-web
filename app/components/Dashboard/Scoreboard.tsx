import styles from './Scoreboard.module.scss';

interface props {
    label: string;
    value: string;
}

export default function Scoreboard({label, value}: props) {
    return (
        <div
        className={styles.container}>
            <div
            className={styles.label}>
                {label}
            </div>
            <div
            className={styles.value}>
                {value}
            </div>
        </div>

    )
}