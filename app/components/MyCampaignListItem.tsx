import './MyCampaignListItem.scss'
import Image from 'next/image';
import classNames from 'classnames';

import Button from './Button';
import { campaignListType } from '../type/campaign';
import icon_youtube from '../assets/icons/icon_youtube.png';
import icon_instagram from '../assets/icons/icon_instagram.png';
import icon_tiktok from '../assets/icons/icon_tiktok.png';

interface props {
    campaignItem: campaignListType;
}

export default function MyCampaignListItem({campaignItem}: props) {
    return (
        <div
        className={"container"}>
            <div
            className={classNames("column", "id")}>
                {campaignItem.id}
            </div>
            <div
            className={classNames("column", "state")}>
                {/* <span
                className={classNames("chip", campaignItem.state)}>
                {campaignItem.state.replace(/^[a-z]/, char => char.toUpperCase())}
                </span> */}
            </div>
            <div
            className={classNames("column", "title")}>
                {campaignItem.title}
            </div>
            <div
            className={classNames("column", "platform")}>
                {campaignItem.platform === 'Youtube' && (
                    <Image
                    width={24}
                    height={24}
                    alt={"icon_youtube"}
                    src={icon_youtube}/>
                )}
                {campaignItem.platform === 'Instagram' && (
                    <Image
                    width={24}
                    height={24}
                    alt={"icon_instagram"}
                    src={icon_instagram}/>
                )}
                {campaignItem.platform === 'Tiktok' && (
                    <Image
                    width={24}
                    height={24}
                    alt={"icon_tiktok"}
                    src={icon_tiktok}/>
                )}
            </div>
            <div
            className={classNames("column", "type")}>
                {campaignItem.type}
            </div>            
            <div
            className={classNames("column", "date")}>
                {campaignItem.start_date + " ~ " + campaignItem.end_date}
            </div>
            <div
            className={classNames("column", "options")}>
                <Button
                label={"Edit"}
                style={"tertiery"}
                size={"xsmall"}
                state={"default"}
                />
            </div>
        </div>
    )
}