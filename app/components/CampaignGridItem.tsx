'use client';

import styles from './CampaignGridItem.module.scss';
import {motion, MotionConfig} from "framer-motion";
import Link from 'next/link';
import Image from 'next/image'

import icon_facebook from '../assets/icons/icon_facebook.png';

interface props {
    campaign: any
}

export default function GampaignGridItem({campaign}: props) {

    const thumbnailAni = {
        initial: {boxShadow: "0px 0px 0px 0px",},
        animate: {boxShadow: '0px 8px 16px 0px #242D351A', transform: 'translateY(-5px)'}
    }

    const titleAni = {
        initial: {color: '#242D35'}, 
        animate: {color: '#F25476'},
    }

    return (
        <MotionConfig
        transition={{duration: 0.25, type: 'ease-in-out'}}>
        <motion.div
        initial="initial"
        animate="initial"
        whileHover="animate">
        <Link
        href={`/campaigns/${campaign.id}`}
        className={styles.container}>
            <motion.div
            className={styles.thumbnail}
            variants={thumbnailAni}>
            {campaign.thumbnail && (
            <Image
            width={309}
            height={180}
            alt={"campaign_thumbnail"}
            src={campaign.thumbnail}
            className={styles.thumbnail}/>
            )}
            </motion.div>
            <div
            className={styles.brandName}>
                {campaign.brand_name}
            </div>
            <motion.div
            variants={titleAni}
            className={styles.title}>
                {campaign.title}
            </motion.div>
            <Image
            width={24}
            height={24}
            alt={"platform_icon"}
            src={icon_facebook}
            className={styles.platformIcon}/>
        </Link>
        </motion.div>
        </MotionConfig>
    )
}