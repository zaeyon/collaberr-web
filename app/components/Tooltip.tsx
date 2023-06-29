import Image from 'next/image';
import styles from './Tooltip.module.scss';
import icon_polygon from '../assets/icons/icon_polygon.png';

interface props {
    description: string;
}

export default function Tooltip({description}: props) {
    return (
        <div
        className={styles.container}>
            {description}
            <Image
            className={styles.icon_polygon}
            width={16}
            height={5.5}
            alt={"icon_polygon"}
            src={icon_polygon}/>
        </div>
    )
}