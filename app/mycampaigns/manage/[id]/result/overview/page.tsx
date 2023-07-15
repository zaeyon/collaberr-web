'use client';
import {useState} from 'react';
import styled from '@emotion/styled';
import GraphTab from "@/app/components/Dashboard/GraphTab"
import ListTable from '@/app/components/ListTable';


const Container = styled.div`
    padding: 40px 0px 120px 0px;
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
            <ListTable
            emptyTitle={"아직 참가를 신청한 크리에이터가 없습니다."}
            title={"TOP 크리에이터"}
            subTitle={"2023.00.00 기준"}
            marginTop={64}
            tableMarginTop={28}
            headerColumns={TOP_CREATOR_TABLE_HEADER}
            data={TOP_CREATOP_TABLE_DATA}/>
        </Container>
    )
}

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

const TOP_CREATOR_TABLE_HEADER = [
    {
        label: "순위",
        width: "9.37",
    },
    {
        label: "크리에이터",
        width: "18.75",
    },
    {
        label: "반응률",
        width: "14.58",
        description: "반응률 = (좋아요 수 + 댓글 수 /전체 조회수)x100",
        tooltipWidth: 308,
    },
    {
        label: "조회수",
        width: "15.93",
    },
    {
        label: "좋아요 수",
        width: "15.93",
    },
    {
        label: "댓글 수",
        width: "15.93",
    },
    {
        label: "콘텐츠",
        width: "9.37",
    },
]

const TOP_CREATOP_TABLE_DATA = [
    {
        rank: 1,
        name: "creatorId 1",
        reactionRate: "0.1%",
        view: 23503,
        like: 1234,
        comment: 634,
        content: "https://www.youtube.com/watch?v=-600vB7FiGA"
    },
    {
        rank: 2,
        name: "creatorId 2",
        reactionRate: "10%",
        view: 2001,
        like: 132,
        comment: 30,
        content: "https://www.youtube.com/watch?v=-600vB7FiGA"
    },
    {
        rank: 3,
        name: "creatorId 3",
        reactionRate: "30%",
        view: 1020,
        like: 33,
        comment: 23,
        content: "https://www.youtube.com/watch?v=-600vB7FiGA"
    },
    {
        rank: 4,
        name: "creatorId 4",
        reactionRate: "0.1%",
        view: 23503,
        like: 1234,
        comment: 634,
        content: "https://www.youtube.com/watch?v=-600vB7FiGA"
    },
    {
        rank: 5,
        name: "creatorId 5",
        reactionRate: "0.1%",
        view: 23503,
        like: 1234,
        comment: 634,
        content: "https://www.youtube.com/watch?v=-600vB7FiGA"
    },
    {
        rank: 6,
        name: "creatorId 6",
        reactionRate: "0.1%",
        view: 23503,
        like: 1234,
        comment: 634,
        content: "https://www.youtube.com/watch?v=-600vB7FiGA"
    },
    {
        rank: 7,
        name: "creatorId 7",
        reactionRate: "0.1%",
        view: 23503,
        like: 1234,
        comment: 634,
        content: "https://www.youtube.com/watch?v=-600vB7FiGA"
    },
    {
        rank: 8,
        name: "creatorId 8",
        reactionRate: "0.1%",
        view: 23503,
        like: 1234,
        comment: 634,
        content: "https://www.youtube.com/watch?v=-600vB7FiGA"
    },
    {
        rank: 9,
        name: "creatorId 9",
        reactionRate: "0.1%",
        view: 23503,
        like: 1234,
        comment: 634,
        content: "https://www.youtube.com/watch?v=-600vB7FiGA"
    },
    {
        rank: 10,
        name: "creatorId 10",
        reactionRate: "0.1%",
        view: 23503,
        like: 1234,
        comment: 634,
        content: "https://www.youtube.com/watch?v=-600vB7FiGA"
    }
]