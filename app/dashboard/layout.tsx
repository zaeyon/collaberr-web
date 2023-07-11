'use client'
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import ShownDateButton from "../components/Dashboard/ShownDateButton"
import Tab from '../components/Dashboard/Tab';

export default function DashboardLayout({children} : {
    children: React.ReactNode
}) {
    const [year, setYear] = useState(Number(new Date().getFullYear()));
    const [month, setMonth] = useState(Number(new Date().getMonth() + 1));
    const [curTab, setCurTab] = useState("/");

    const router = useRouter();


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

    const changeTab = (tab:string) => {
        setCurTab(tab)
        router.push(`/dashboard` + tab);
    }

    return (
        <section>
            <main>
            <h1>캠페인 성과</h1>
            <ShownDateButton
            year={year}
            month={month}
            clickLeftButton={clickLeftButton}
            clickRightButton={clickRightButton}
            />
            <Tab
            marginTop={52}
            root={"dashboard"}
            changeTab={changeTab}/>
            {children}
            </main>
        </section>
    )
}