import styles from './page.module.scss';
import Image from 'next/image';

import CampaignDetail from '@/app/components/CampaignDetail';

export default function Page({params}: {params: {id: number}}) {
    
    return (
        <main className={styles.main}>
            <CampaignDetail/>
        </main>
    )

}