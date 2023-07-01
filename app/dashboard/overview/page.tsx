'use client';
import {useState} from 'react';
import styled from '@emotion/styled';
import GraphTab from "@/app/components/Dashboard/GraphTab"

const TAB_DATA = [
    {
        label: "평균 지출 대비 수익",
        value: "283%",
        data: [10, 20 , 50 , 100, 1, 66, 2],
        description: '이것은 툴팁입니다.\n 툴팁 안의 텍스트를 입력해주세요',
    },
    {
        label: "조회수당 가격",
        value: "$4.2",
        data: [50, 20 , 10 , 0, 100, 26, 2],
        description: "이것은 툴팁입니다. 툴팁 안의 텍스트를 입력해주세요",
    },
    {
        label: "이벤트당 평균가격",
        value: "$3.1",
        data: [10, 20 , 30 , 40, 50, 66, 70],
        description: "이것은 툴팁입니다. 툴팁 안의 텍스트를 입력해주세요",
        
    }
]

const Container = styled.div`
    padding: 40px 0px;
`;

export default function Overview() {
    const [curTab, setCurTab] = useState(TAB_DATA[0].label);
    const [graphData, setGraphData] = useState<number[]>(TAB_DATA[0].data);

    const changeTab = (tab: string, data: number []) => {
        setCurTab(tab);
        setGraphData(data);
    }

    return (
        <Container>
            <GraphTab
            curTab={curTab}
            tabs={TAB_DATA}
            changeTab={changeTab}
            graphData={graphData}/>
        </Container>
    )
}