'use client';
import {useState} from 'react';
import styled from '@emotion/styled';

import Scoreboard from '@/app/components/Dashboard/Scoreboard';
import GraphTab from '@/app/components/Dashboard/GraphTab';

const Container = styled.div`
padding: 40px 0px 120px 0px;
`;


export default function Actions() {
    const [curTab, setCurTab] = useState(GRAPH_DATA[0].label);
    const [graphData, setGraphData] = useState<number[]>(GRAPH_DATA[0].data);

    const changeTab = (tab: string, data: number []) => {
        setCurTab(tab);
        setGraphData(data);
    }

    return (
        <Container>
            <Scoreboard
            data={SCOREBOARD_DATA}/>
            <GraphTab
            marginTop={40}
            curTab={curTab}
            tabs={GRAPH_DATA}
            changeTab={changeTab}
            graphData={graphData}
            />
        </Container>
        
    )
}


const SCOREBOARD_DATA = [
    {
        label: "총 참여수",
        value: "33,000",
        description: "총 참여 수 = 공유 수 + 좋아요 수 + 댓글 수",
        tooltipWidth: 270,
        change: "increase",
        changeDescription: "한달 전 보다 10% 증가했어요",
    },
    {
        label: "이벤트당 평균가격",
        value: "$1,000",
        description: "이벤트당 평균 가격(CPE)\n = (전체 참여수 + 총 지출 비용) x 100",
        tooltipWidth: 233,
        change: "increase",
        changeDescription: "한달 전 보다 10% 증가했어요",
    },
]


const GRAPH_DATA = [
    {
        label: "전체 참여",
        value: "53,230",
        data: [10, 20 , 50 , 100, 1, 66, 2],
        description: '이것은 툴팁입니다.\n 툴팁 안의 텍스트를 입력해주세요',
        change: "increase",
        changeDescription: "한달 전 보다 10% 증가했어요",
        
    },
    {
        label: "공유 횟수",
        value: "7,322",
        data: [50, 20 , 10 , 0, 100, 26, 2],
        description: "이것은 툴팁입니다.\n 툴팁 안의 텍스트를 입력해주세요",
        change: "decrease",
        changeDescription: "한달 전 보다 20% 감소했어요",
    },
    {
        label: "댓글 수",
        value: "12,300",
        data: [10, 20 , 30 , 40, 50, 66, 70],
        description: "이것은 툴팁입니다.\n 툴팁 안의 텍스트를 입력해주세요",
        change: "decrease",
        changeDescription: "한달 전 보다 20% 감소했어요",
        
    },
    {
        label: "좋아요 수",
        value: "12,300",
        data: [10, 20 , 30 , 40, 50, 66, 70],
        description: "이것은 툴팁입니다.\n툴팁 안의 텍스트를 입력해주세요",
        change: "decrease",
        changeDescription: "한달 전 보다 20% 감소했어요",
    }
]