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
                    순위
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 4.2, justifyContent: 'flex-start'}}>
                    Campaign
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 2.2}}>
                    기간
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 1.1}}>
                    모집 인원
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 1.1}}>
                    반응률
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 1}}>
                    상세분석
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
