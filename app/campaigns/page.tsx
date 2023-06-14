import styles from './page.module.scss';

import CampaignGrid from '../components/CampaignGrid';

export default function Campaigns() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Campaign
            </h1>
            <CampaignGrid
            campaignArr={CAMPAIGNS_DATA}/>
        </main>
    )
}

const CAMPAIGNS_DATA = [
    {
        id: 1,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'instagram',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
    {
        id: 2,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'youtube',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
    {
        id: 3,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'tictok',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
    {
        id: 4,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'instagram',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
    {
        id: 5,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'youtube',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
    {
        id: 6,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'instagram',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
    {
        id: 7,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'instagram',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
    {
        id: 8,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'instagram',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
    {
        id: 9,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'instagram',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
    {
        id: 10,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'instagram',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
    {
        id: 11,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'instagram',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
    {
        id: 12,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'instagram',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
    {
        id: 13,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'instagram',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
    {
        id: 14,
        thumbnail_url: 'https://thumb.mt.co.kr/06/2018/11/2018110909255321103_3.jpg/dims/optimize/',
        brand_name: 'Brand Name1',
        title: 'Campaign Title1',
        platform: 'instagram',
        description: 'Description',
        data: '2022-00-00 - 2023-00-00',
        bid: '100$',
    },
]