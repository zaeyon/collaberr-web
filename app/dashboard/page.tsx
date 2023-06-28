'use client';
import {useState} from 'react';

import ShownDateButton from "../components/Dashboard/ShownDateButton"
import Tab from '../components/Dashboard/Tab';

export default function Dashboard() {
    const [year, setYear] = useState(Number(new Date().getFullYear()));
    const [month, setMonth] = useState(Number(new Date().getMonth() + 1));
    const [curTab, setCurTab] = useState(1);

    const clickLeftButton = () => {
        if(month === 1) {
            setMonth(12);
            setYear((prev) => prev-1);
            return;
        }

        setMonth((prev) => prev-1)
    }

    const clickRightButton = () => {
        if(month === 12) {
            setMonth(1);
            setYear((prev) => prev+1);
            return;
        }

        setMonth((prev) => prev+1)
    }

    const changeTab = (index:number) => {
        setCurTab(index)
    }

    return (
        <main>
            <h1>캠페인 성과</h1>
            <ShownDateButton
            year={year}
            month={month}
            clickLeftButton={clickLeftButton}
            clickRightButton={clickRightButton}
            />
            <Tab
            curTab={curTab}
            changeTab={changeTab}/>
        </main>
    )
}