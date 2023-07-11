import styles from './SideBar.module.scss';
import Link from 'next/link'
import { userState } from '../recoil/user';
import { useRecoilValue } from 'recoil';

import CategoryLinkItem from './CategoryLinkItem';

export default function SideBar() {
    const user = useRecoilValue(userState);

    return (
        <div
        className={styles.container}>
            <div
            className={styles.categoryClassification}>
                Campaign
            </div>
            <CategoryLinkItem
            label={"All Campaigns"}
            href={"/campaigns"}
            />
            <CategoryLinkItem
            label={"Creators"}
            href={"/creators"}
            />
            {user.role === "CREATOR" && (
            <>  
            <div
            className={styles.categoryClassification}>
                Creator
            </div>
            <CategoryLinkItem
            label={"My Campaigns"}
            href={"/appliedcampaigns"}
            />
            </>
            )}
            {user.role === "BUSINESS" && (
                <>
                  <div
                  className={styles.categoryClassification}>
                  Business
                  </div>
                  <CategoryLinkItem
                  label={"My Campaigns"}
                  href={"/mycampaigns"}
                  />
                <CategoryLinkItem
                label={"Dashboard"}
                href={"/dashboard"}
                />
                </>

            )}
          
        </div>
    )
}