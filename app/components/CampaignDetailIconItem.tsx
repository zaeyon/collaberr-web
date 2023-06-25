import styles from './CampaignDetailIconItem.module.scss';
import Image from 'next/image';

import icon_bid from '../assets/icons/icon_bid.png';
import icon_youtube from '../assets/icons/icon_youtube.png';

interface props {
    type: string;
    value: string | number | undefined;
}

export default function CampaignDetailIconItem({type, value}: props) {
    
    return (
        <div className={styles.container}>
            <Image
            width={24}
            height={24}
            src={type === 'rewards' ? icon_bid : type === 'mission' ? icon_youtube : ''}
            alt={"icon_type"}/>
            <div
            className={styles.value}>
                {value}
            </div>
        </div>
    )
}
