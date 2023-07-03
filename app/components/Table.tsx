import styles from './Table.module.scss';
import Link from 'next/link';
import Button from './Button';
import Tooltip from './Tooltip';

interface props {
    title?: string;
    subTitle?: string;
    marginTop?: number;
    tableMarginTop: number;
    header: any [];
    data: any [];
}


export default function Table({title, subTitle, marginTop, tableMarginTop, header, data}: props) {
    return (
        <div
        style={{marginTop: marginTop, width: "100%"}}>
            {title && (
                <h3>{title}</h3>
            )}
            {subTitle && (
                <div
                className={styles.subTitle}>{subTitle}</div>
            )}
            <table
            width={"100%"}
            cellSpacing={0}
            style={{marginTop: tableMarginTop, whiteSpace: "nowrap", tableLayout: "fixed"}}>
                <thead
                className={styles.head}>
                    <tr
                    className={styles.row}>
                        {header.map((item, index) => {
                            if(item.label === "크리에이터" || item.label === 'Campaign'){
                                return (
                                    <td
                                    height={40}
                                    key={index}
                                    width={`${item.width}%`}
                                    className={styles.label}>
                                        {item.label}
                                    </td>
                                )
                            } else {
                                return (
                                <td
                                height={40}
                                style={{textAlign: "center"}}
                                className={styles.label}
                                key={index}
                                width={`${item.width}%`}>
                                        <span
                                    
                                        style={{overflow:"hidden"}}>
                                        {item.label}
                                        </span>
                                        {item.description && (
                                        <Tooltip
                                        iconType='help'
                                        description={item.description}
                                        tooltipWidth={item.tooltipWidth}
                                        />
                                        )}
                                </td>
                                )
                            }
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        const keyValueArr = Object.entries(item);
                        return (
                            <tr
                            key={index}>
                                {keyValueArr.map((item: any, index) => {
                                if(item[0] === "name") {
                                    return (
                                        <td
                                        height={52}
                                        className={styles.data}
                                        key={index}>
                                            {item[1]}
                                        </td>
                                    )
                                } else if(item[0] === "content") {
                                    return (
                                        <td
                                        height={52}
                                        style={{textAlign: "center"}}
                                        className={styles.data}
                                        key={index}>
                                                <Link
                                                href={item[1]}
                                                target={"_blank"}>
                                                <Button
                                                label={"보기"}
                                                style={"tertiery"}
                                                size={"xsmall"}
                                                state={"default"}/>
                                                </Link>
                                        </td>
                                    )
                                } else  {
                                    return (
                                        <td
                                        height={52}
                                        style={{textAlign:"center"}}
                                        className={styles.data}
                                        key={index}>
                                            {item[1]}

                                        </td>
                                    )
                                }
                                })}
                              
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    )
}