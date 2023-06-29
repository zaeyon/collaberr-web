import styled from '@emotion/styled';
import Button from '../Button';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--gray-gray-600, #536878);
    font-size: 15px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.225px;
    overflow: hidden;
    border-bottom: 1px solid var(--gray-gray-200, #E6EAEF);

`;

const ColumnDiv = styled.div`
    min-width: 0;
    padding: 14px 8px;
    display: flex; 
    align-items: center;
    justify-content: center;
`;

const ColumnSpan = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

interface props {
    campaignItem: any;
}

export default function CampaignsRankingTableItem({campaignItem}: props) {
    return (
        <Container>
            <ColumnDiv
            style={{flex: 1}}>
                <ColumnSpan>
                {campaignItem.ranking}
                </ColumnSpan>
            </ColumnDiv>
            <ColumnDiv
            style={{flex: 4.2, justifyContent: 'flex-start'}}>
                <ColumnSpan>
                {campaignItem.title}
                </ColumnSpan>
            </ColumnDiv>
            <ColumnDiv
            style={{flex: 2.2}}>
                <ColumnSpan>
                {campaignItem.date}
                </ColumnSpan>
            </ColumnDiv>
            <ColumnDiv
            style={{flex: 1.1}}>
                <ColumnSpan>
                {campaignItem.recruits}
                </ColumnSpan>
            </ColumnDiv>
            <ColumnDiv
            style={{flex: 1.1}}>
                <ColumnSpan>
                {campaignItem.reaction_rate}
                </ColumnSpan>
            </ColumnDiv>
            <ColumnDiv
            style={{flex: 1}}>
                <Button
                label={"보기"}
                size={"xsmall"}
                style={"tertiery"}
                state={"default"}
                />
            </ColumnDiv>
            

        </Container>
    )
}