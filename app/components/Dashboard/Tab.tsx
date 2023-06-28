'use client';
import styled from '@emotion/styled';

interface TabItemProps {
    readonly isActive: boolean;
}

const Container = styled.div`
    margin-top: 52px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;  

  border-bottom: 1px solid #D1D7DF;
`;

const TabItem = styled.div<TabItemProps>`
  color: var(--secondary-gray-gray-900, #242D35);
  font-weight: 400;
  font-size: 17px;
  font-family: 'Pretendard';
  line-height: 160%;
  letter-spacing: -0.255px;  
  padding-bottom: 12px;

  border-bottom: ${(props) => props.isActive ? "1.5px solid #242D35" : "none"};
  cursor: pointer;

  :nth-child(n+2) {
    margin-left: 24px;
  }
`;

interface props {
    curTab: number;
    changeTab: (index: number) => void; 
}

export default function Tab({curTab, changeTab}: props) {
    return (
        <Container>
            <Header>
                <TabItem
                onClick={() => changeTab(1)}
                isActive={curTab === 1}>
                    캠페인 현황
                </TabItem>
                <TabItem
                onClick={() => changeTab(2)}
                isActive={curTab === 2}>
                    성과 요약
                </TabItem>
                <TabItem
                onClick={() => changeTab(3)}
                isActive={curTab === 3}>
                    캠페인 조회
                </TabItem>
                <TabItem
                onClick={() => changeTab(4)}
                isActive={curTab === 4}>
                    캠페인 행동
                </TabItem>
                <TabItem
                onClick={() => changeTab(5)}
                isActive={curTab === 5}>
                    캠페인 고객
                </TabItem>
            </Header>

        </Container>
    )
}