'use client';

import styled from '@emotion/styled';
import Scoreboard from '@/app/components/Dashboard/Scoreboard';

const Container = styled.div`
padding: 40px 0px 120px 0px;
`;


export default function Actions() {
    return (
        <Container>
            <Scoreboard
            data={SCOREBOARD_DATA}/>
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
        description: "이벤트당 평균 가격(CPE)\n = (전체 참여수 + 총 지출 비용)x100",
        tooltipWidth: 233,
        change: "increase",
        changeDescription: "한달 전 보다 10% 증가했어요",
    },
]