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

export default function ContentManage() {
    const [requestedCreatorArr, setRequestedCreatorArr] = useState(CONTENT_REQUEST_TABLE_DATA);
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
            <ListTable
            marginTop={48}
            tableMarginTop={8}
            title={"대기중인 콘텐츠"}
            headerColumns={CONTENT_REQUEST_TABLE_HEADER}
            data={requestedCreatorArr}
            clickCheckbox={clickCheckbox}
            clickAllCheckbox={clickAllCheckbox}
            allSelected={allSelected}
            emptyTitle={"아직 업로드 예정인 콘텐츠가 없습니다."}
            emptyDescrip={"크리에이터 참가가 확정되면 목록에 나타납니다."}
            />
            <RequestTableFooter>
                <Button
                label={"승인거부"}
                style={"tertiery"}
                size={"small"}
                state={"default"}
                />
                <Button
                label={"승인"}
                style={"primary"}
                size={"small"}
                state={"default"}
                />
            </RequestTableFooter>
            <ListTable
            marginTop={56}
            tableMarginTop={8}
            title={"승인이 완료된 콘텐츠"}
            headerColumns={CONTENT_TABLE_HEADER}
            data={CONFIRMED_CONTENT_TABLE_DATA}
            emptyTitle={"아직 업로드 예정인 콘텐츠가 없습니다."}
            emptyDescrip={"크리에이터 참가가 확정되면 목록에 나타납니다."}/>
            <ListTable
            marginTop={48}
            tableMarginTop={8}
            title={"승인이 거부된 콘텐츠"}
            headerColumns={CONTENT_TABLE_HEADER}
            data={REJECTED_CONTENT_TABLE_DATA}
            emptyTitle={"아직 업로드 예정인 콘텐츠가 없습니다."}
            emptyDescrip={"크리에이터 참가가 확정되면 목록에 나타납니다."}/>
        </Container>
    )
}

const CONTENT_REQUEST_TABLE_HEADER = [
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
        label: "콘텐츠 링크",
        width: "66.66"
    }
]


const CONTENT_REQUEST_TABLE_DATA = [
    {
        selected: false,
        state: "waiting_for_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/"
    },
    {
        selected: false,
        state: "waiting_for_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/"
    },
    {
        selected: false,
        state: "waiting_for_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/"
    },
    {
        selected: false,
        state: "waiting_for_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/"
    },
    {
        selected: false,
        state: "waiting_for_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/"
    },
    {
        selected: false,
        state: "unregistered",
        name: "Creator Name",
    },
]


const CONTENT_TABLE_HEADER = [
    {
        label: "상태",
        width: "8.32"
    },
    {
        label: "크리에이터",
        width: "20.83"
    },
    {
        label: "콘텐츠 링크",
        width: "66.66"
    }
]


const CONFIRMED_CONTENT_TABLE_DATA = [
    {
        state: "completed_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/watch?v=c0-xisl-Nes"
    },
    {
        state: "completed_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/watch?v=HO0AyUK-ASM"
    },
    {
        state: "completed_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/"
    },
    {
        state: "completed_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/"
    },
    {
        state: "completed_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/"
    },
]

const REJECTED_CONTENT_TABLE_DATA = [
    {
        state: "rejected_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/"
    },
    {
        state: "rejected_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/"
    },
    {
        state: "rejected_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/"
    },
    {
        state: "rejected_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/"
    },
    {
        state: "rejected_approval",
        name: "Creator Name",
        content_url: "https://www.youtube.com/"
    },
]


