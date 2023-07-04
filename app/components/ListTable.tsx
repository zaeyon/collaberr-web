'use client';
import styled from '@emotion/styled';
import styles from './ListTable.module.scss';
import Link from 'next/link';

import Button from './Button';
import Tooltip from './Tooltip';

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const TableContainer = styled.div`
margin-top: 14px;
`;

const TableColumn = styled.div`
display: flex;
flex-direction: row;
background-color: #F1F4F7;
`;

const ColumnItem = styled.div`
min-width: 0px;
display: flex;
justify-content: center;
padding-top: 8px;
padding-bottom: 8px;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
color :#35424C;
`;

const ColumnSpan = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;  
`;

interface props {
    title?: string;
    subTitle?: string;
    marginTop?: number;
    tableMarginTop: number;
    headerColumns: any [];
    data: any [];
}

export default function ListTable({title, subTitle, marginTop, tableMarginTop, headerColumns, data}: props) {
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
                            </div>
                        )                        
                    })}
                </div>
               {data.map((item, index) => {
                const keyValueArr = Object.entries(item);
                return (
                    <div
                    className={styles.dataRow}
                    key={index}>
                        {keyValueArr.map((item: any, index) => {
                                if(item[0] === "name") {
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
                                        style={{textAlign: "center", width: `${headerColumns[index].width}%`}}
                                        className={styles.dataItem}
                                        key={index}>
                                                <span
                                                className={styles.dataColumn}>
                                                <Link
                                                href={item[1]}
                                                target={"_blank"}>
                                                <Button
                                                label={"보기"}
                                                style={"tertiery"}
                                                size={"xsmall"}
                                                state={"default"}/>
                                                </Link>
                                                </span>
                                        </div>
                                    )
                                } else  {
                                    return (
                                        <div
                                        style={{textAlign:"center", width: `${headerColumns[index].width}%`}}
                                        className={styles.dataItem}
                                        key={index}>
                                            <span
                                            className={styles.dataColumn}>
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
