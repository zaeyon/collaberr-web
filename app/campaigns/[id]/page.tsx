import styles from './page.module.scss';
import Image from 'next/image';

import CampaignDetail from '@/app/components/CampaignDetail';
import JoinCampaign from '@/app/components/JoinCampaign';


export default function Page({params}: {params: {id: number}}) {
    
    return (
        <main className={styles.main}>
            <CampaignDetail/>
            <JoinCampaign/>
        </main>
    )

}