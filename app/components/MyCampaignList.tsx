'use client';

import {useRouter} from 'next/navigation'
import styled from '@emotion/styled';

import Button from './Button';
import MyCampaignListItem from './MyCampaignListItem';

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const Header = styled.div`
margin-top: 56px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
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
padding-top: 8px;
padding-bottom: 8px;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
color :#35424C;
`;

interface props {
    myCampaignsData: any [];
}

export default function MyCampaignList({myCampaignsData}: props) {

    const router = useRouter(); 

    return (
        <Container>
            <Header>
                <h2>All Campaigns</h2>
                <Button
                size={"small"}
                style={"primary"}
                label={"Create New"}
                state={"default"}
                onClick={() => router.push('/mycampaigns/create')}/>
            </Header>
            <TableContainer>
                <TableColumn>
                    <ColumnItem
                    style={{flex: 1}}>
                    ID
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 1}}>
                    State
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 3.3}}>
                    Campaign
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 1}}>
                    SNS
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 1}}>
                    Type
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 2.35}}>
                    Date
                    </ColumnItem>
                    <ColumnItem
                    style={{flex: 1}}>
                    Options
                    </ColumnItem>
                </TableColumn>
                {myCampaignsData.map((campaignItem, index) => {
                    return (
                        <MyCampaignListItem
                        key={index}
                        campaignItem={campaignItem}/>
                    )
                })
                }
            </TableContainer>

        </Container>
    )
}
