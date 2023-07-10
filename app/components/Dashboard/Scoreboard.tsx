import styles from './Scoreboard.module.scss';

import Tooltip from '../Tooltip';

interface props {
    data: any [];
    marginTop?: number;
}

export default function Scoreboard({data, marginTop = 0}: props) {
    return (
        <div
        style={{marginTop: marginTop}}
        className={styles.container}>
        {data.map((item, index) => {
            return (
            <div
            key={index}
            className={styles.scoreboardItem}>
                <div
                className={styles.label}>
                    {item.label}
                    {item.description && (
                        <Tooltip
                        iconType={"info"}
                        description={item.description}
                        tooltipWidth={item.tooltipWidth}
                        />
                    )}
                </div>
                <div
                className={styles.value}>
                    {item.value}
                </div>
                {item.change && (
                <div
                style={{color: item.change === "increase" ? "#3AB09E" : "#3183F6"}}
                className={styles.change}>
                    {item.changeDescription}
                </div>
                )}
            </div>
            )
        })
        }
        </div>
    )
}