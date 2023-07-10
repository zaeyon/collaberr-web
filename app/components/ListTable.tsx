'use client';
import Image from 'next/image';
import styled from '@emotion/styled';
import styles from './ListTable.module.scss';
import Link from 'next/link';
import classNames from 'classnames/bind';

import Button from './Button';
import Tooltip from './Tooltip';
import Checkbox from './Checkbox';

import icon_youtube from '@/app/assets/icons/icon_youtube.png';
import icon_instagram from '@/app/assets/icons/icon_instagram.png';
import icon_tiktok from '@/app/assets/icons/icon_tiktok.png';
import icon_outlink from '@/app/assets/icons/icon_outlink.png';

const cx = classNames.bind(styles);

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;


interface props {
    title?: string;
    subTitle?: string;
    marginTop?: number;
    tableMarginTop?: number;
    headerColumns: any [];
    data: any [];
    clickCheckbox?: (index?: number) => void;
    clickAllCheckbox?: () => void;
    allSelected?: boolean;
}

export default function ListTable({title, subTitle, marginTop, tableMarginTop, headerColumns, data, clickCheckbox, clickAllCheckbox, allSelected}: props) {
    return (
        <Container
        style={{marginTop: marginTop}}>
            {title && (
                <h3>
                    {title}
                </h3>
            )}
            {subTitle && (
                <div
                className={styles.subTitle}>
                    {subTitle}
                </div>
            )}
            <div
            style={{marginTop: tableMarginTop}}>
                <div
                className={styles.head}>
                    {headerColumns.map((item, index) => {
                        return (
                            <div
                            style={{width: `${item.width}%`, justifyContent: item.label === "Campaign" || item.label === "크리에이터" ? "flex-start" : "center"}}
                            className={styles.tableHeader}
                            key={index}>
                                {item.label === "selected" && (
                                    <Checkbox
                                    selected={allSelected}
                                    clickCheckbox={clickAllCheckbox}/>
                                )}
                                {item.label !== "selected" && (
                                <>
                                <span
                                    className={styles.label}>
                                    {item.label}
                                </span>
                                {item.description && (
                                    <Tooltip
                                    iconType='help'
                                    description={item.description}
                                    tooltipWidth={item.tooltipWidth}
                                    />
                                )}
                                </>
                                )}
                            </div>
                        )                        
                    })}
                </div>
               {data.map((item, dataIndex) => {
                const keyValueArr = Object.entries(item);
                return (
                    <div
                    className={styles.dataRow}
                    key={dataIndex}>
                        {keyValueArr.map((item: any, index) => {
                                if(item[0] === "name" || item[0] === "title") {
                                    return (
                                        <div
                                        className={styles.dataItem}
                                        style={{width: `${headerColumns[index].width}%`}}
                                        key={index}>
                                            <span
                                            className={styles.dataColumn}>
                                             {item[1]}
                                            </span>
                                        </div>
                                    )
                                } else if(item[0] === "content") {
                                    return (
                                        <div
                                        style={{justifyContent: "center", width: `${headerColumns[index].width}%`}}
                                        className={styles.dataItem}
                                        key={index}>
                                                <span
                                                style={{marginLeft: 5}}
                                                className={styles.dataColumn}>
                                                <Link
                                                href={`/mycampaigns/manage/${item[1]}/recruit`}>
                                                <Button
                                                label={"보기"}
                                                style={"tertiery"}
                                                size={"xsmall"}
                                                state={"default"}/>
                                                </Link>
                                                </span>
                                        </div>
                                    )
                                } else if(item[0] === 'state')  {
                                    return (
                                        <div
                                        style={{justifyContent:"center", width: `${headerColumns?.[index]?.width}%`}}
                                        className={styles.dataItem}
                                        key={index}>
                                            <span
                                            className={cx('stateBadge', item[1])}>
                                            {item[1] === 'proceeding' && "진행중"}
                                            {item[1] === 'recruitment_complete' && '모집완료'}
                                            {item[1] === 'recruiting' && '모집중'}
                                            {item[1] === 'writing' && '작성중'}
                                            {item[1] === 'progress_complete' && '진행완료'}
                                            {item[1] === 'request' && '참여요청'}
                                            {item[1] === 'participation_confirmed' && '참여확정'}
                                            {item[1] === 'participation_rejected' && '거절됨'}
                                            </span>
                                        </div>
                                    )
                                } else if(item[0] === 'platform')  {
                                    return (
                                        <div
                                        style={{justifyContent:"center", width: `${headerColumns?.[index]?.width}%`}}
                                        className={styles.dataItem}
                                        key={index}>
                                            <Image
                                            width={20}
                                            height={20}
                                            src={
                                                item[1] === 'Youtube' ? icon_youtube : item[1] === 'Instagram' ? icon_instagram : item[1] === 'Tiktok' ? icon_tiktok : icon_youtube
                                            }
                                            alt={"icon_platform"}/>
                                        </div>
                                    )
                                } else if(item[0] === 'selected')  {
                                    return (
                                        <div
                                        style={{justifyContent:"center", width: `${headerColumns?.[index]?.width}%`}}
                                        className={styles.dataItem}
                                        key={index}>
                                            <Checkbox
                                            index={dataIndex}
                                            clickCheckbox={clickCheckbox}
                                            selected={item[1]}
                                            />
                                        </div>
                                    )
                                } else if(item[0] === 'url')  {
                                    return (
                                        <div
                                        style={{justifyContent:"center", width: `${headerColumns?.[index]?.width}%`}}
                                        className={styles.dataItem}
                                        key={index}>
                                            <Link
                                            target={"_blank"}
                                            href={item[1]}>
                                            <Image
                                            width={20}
                                            height={20}
                                            alt={"icon_outlink"}
                                            src={icon_outlink}/>
                                            </Link>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div
                                        style={{justifyContent:"center", width: `${headerColumns?.[index]?.width}%`}}
                                        className={styles.dataItem}
                                        key={index}>
                                            <span
                                            className={cx('dataColumn')}>
                                            {item[1]}
                                            </span>
                                        </div>
                                    )
                                }
                        })}
                    </div>
                )
               })

               }
            </div>

        </Container>
    )
}
