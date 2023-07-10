'use client';
import {useState, useCallback, useEffect} from 'react';
import styled from '@emotion/styled';
import { useSearchParams } from 'next/navigation';
import {useRouter} from 'next/navigation';

import ManageTab from '@/app/components/Manage/ManageTab';
import Scoreboard from '@/app/components/Dashboard/Scoreboard';
import ListTable from '@/app/components/ListTable';
import Button from '@/app/components/Button';

const Container = styled.div`
    
`;


const RequestTableFooter = styled.div`
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 8px;
`;

export default function RecruitManage() {
    const [requestedCreatorArr, setRequestedCreatorArr] = useState(CAMPAIGN_JOIN_REQUEST_TABLE_DATA);
    const [allSelected, setAllSelected] = useState(false);
    const router = useRouter();

   

    const clickCheckbox = useCallback((index?: number) => {
        let tmpArr = [...requestedCreatorArr];
        tmpArr[index ? index : 0].selected = !tmpArr[index ? index : 0].selected;
        setRequestedCreatorArr(tmpArr);
        
    }, [requestedCreatorArr])

    const clickAllCheckbox = useCallback(() => {
        let tmpArr = [...requestedCreatorArr];
        if(allSelected) {
            setAllSelected(false);
            const unSelectedArr = tmpArr.map((item) => {
                return {
                    ...item,
                    selected: false,
                }
            })

            setRequestedCreatorArr(unSelectedArr);
        } else {
            setAllSelected(true);
            const selectedArr = tmpArr.map((item) => {
                return {
                    ...item,
                    selected: true,
                }
            })
            setRequestedCreatorArr(selectedArr)
        }
    }, [requestedCreatorArr, allSelected])

    return (
        <Container>
            <Scoreboard
            marginTop={24}
            data={SCOREBOARD_DATA}
            />
            <ListTable
            marginTop={64}
            tableMarginTop={8}
            title={"캠페인 참여요청"}
            headerColumns={CAMPAIGN_JOIN_REQUEST_TABLE_HEADER}
            data={requestedCreatorArr}
            clickCheckbox={clickCheckbox}
            clickAllCheckbox={clickAllCheckbox}
            allSelected={allSelected}
            />
            <RequestTableFooter>
                <Button
                label={"참여 거절"}
                style={"tertiery"}
                size={"small"}
                state={"default"}
                />
                <Button
                label={"참여 확정"}
                style={"primary"}
                size={"small"}
                state={"default"}
                />
            </RequestTableFooter>
            <ListTable
            marginTop={72}
            tableMarginTop={8}
            title={"모집된 크리에이터"}
            headerColumns={CREATOR_TABLE_HEADER}
            data={CONFIRMED_CREATOR_TABLE_DATA}/>
            <ListTable
            marginTop={64}
            tableMarginTop={8}
            title={"거절된 크리에이터"}
            headerColumns={CREATOR_TABLE_HEADER}
            data={REJECTED_CREATOR_TABLE_DATA}/>
        </Container>
    )
}


const SCOREBOARD_DATA = [
    {
        label: "모집 정원",
        value: "6명"
    },
    {
        label: "모집된 참가자",
        value: "2명"
    },
    {
        label: "예상 지출금액",
        value: "$1,000"
    },
    {
        label: "모집 마감까지",
        value: "D-4"
    }
]

const CAMPAIGN_JOIN_REQUEST_TABLE_HEADER = [
    {
        label: "selected",
        width: "4.16"
    },
    {
        label: "상태",
        width: "8.32"
    },
    {
        label: "크리에이터",
        width: "20.83"
    },
    {
        label: "구독자 수",
        width: "15.62"
    },
    {
        label: "평균 댓글 수",
        width: "15.62",
    },
    {
        label: "평균 좋아요 수",
        width: "15.62"
    },
    {
        label: "30일 내 업로드",
        width: "15.62"
    },
    {
        label: "채널",
        width: "4.16"
    },
]


const CAMPAIGN_JOIN_REQUEST_TABLE_DATA = [
    {
        selected: false,
        state: "request",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        selected: false,
        state: "request",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        selected: false,
        state: "request",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        selected: false,
        state: "request",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        selected: false,
        state: "request",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        selected: false,
        state: "request",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        selected: false,
        state: "request",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        selected: false,
        state: "request",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        selected: false,
        state: "request",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        selected: false,
        state: "request",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    }
]


const CREATOR_TABLE_HEADER = [
    {
        label: "상태",
        width: "8.32"
    },
    {
        label: "크리에이터",
        width: "20.83"
    },
    {
        label: "구독자 수",
        width: "16.66"
    },
    {
        label: "평균 댓글 수",
        width: "16.66",
    },
    {
        label: "평균 좋아요 수",
        width: "16.66"
    },
    {
        label: "30일 내 업로드",
        width: "16.66"
    },
    {
        label: "채널",
        width: "4.16"
    },
]


const CONFIRMED_CREATOR_TABLE_DATA = [
    {
        state: "participation_confirmed",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_confirmed",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_confirmed",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_confirmed",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_confirmed",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_confirmed",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_confirmed",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_confirmed",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_confirmed",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_confirmed",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    }
]

const REJECTED_CREATOR_TABLE_DATA = [
    {
        state: "participation_rejected",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_rejected",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_rejected",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_rejected",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_rejected",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_rejected",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_rejected",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_rejected",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_rejected",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    },{
        state: "participation_rejected",
        name: "Creator Name",
        subscribers_num: 4234,
        aver_comment_num: 200,
        aver_like_num: 20012,
        recent_upload: 31,
        url: "https://www.youtube.com/"
    }
]


