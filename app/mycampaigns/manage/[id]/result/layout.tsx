'use client'
import {useRouter, useSearchParams, usePathname} from 'next/navigation';

import Tab from "@/app/components/Dashboard/Tab"

export default function ResultManageLayout({children}: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const pathnameArr = usePathname().split('/');


    const changeTab = (tab: string) => {
        router.push(`/${pathnameArr[1]}/${pathnameArr[2]}/${pathnameArr[3]}/${pathnameArr[4]}` + tab);
    }

    return (
        <section>
            <Tab
            marginTop={44}
            root={"manage"}
            changeTab={changeTab}
            />
            {children}
        </section>
    )
}