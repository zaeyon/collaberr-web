'use client';

import styled from '@emotion/styled';

import Button from '../Button';
import CampaignsRankingTableItem from './CampaignsRankingTableItem';

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
align-items: center;
padding: 14px 8px;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
color :#35424C;
`;

const ColumnSpan = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

interface props {
    campaignsRankingData: any [];
}

export default function CampaignsRankingTable({campaignsRankingData}: props) {


    return (
        <Container>
            <TableContainer>
                <TableColumn>
                    <ColumnItem
                    style={{flex: 1}}>
                        <ColumnSpan>
                        순위
                        </ColumnSpan>
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 4.2, justifyContent: 'flex-start'}}>
                        <ColumnSpan>
                        Campaign
                        </ColumnSpan>
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 2.2}}>
                        <ColumnSpan>
                        기간
                        </ColumnSpan>
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 1.1}}>
                        <ColumnSpan>
                        모집 인원
                        </ColumnSpan>
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 1.1}}>
                        <ColumnSpan>
                        반응률
                        </ColumnSpan>
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 1}}>
                        <ColumnSpan>
                        상세분석
                        </ColumnSpan>
                    </ColumnItem>
                </TableColumn>
                {campaignsRankingData.map((campaignItem, index) => {
                    return (
                        <CampaignsRankingTableItem
                        key={index}
                        campaignItem={campaignItem}/>
                    )
                })
                }
            </TableContainer>

        </Container>
    )
}
