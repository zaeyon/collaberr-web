'use client'
import {useEffect} from 'react';
import { useRouter } from "next/navigation"

import Button from "../components/Button"
import { GET_youtubeConfirm } from "../api/youtube";
import { deleteCookie } from '../lib/cookie';

export default function YoutubeConfirmTest() {
    const router = useRouter();

    useEffect(() => {
        console.log("window.close()")
        window.close();
    }, [])
    
    return (
        <main>
            <h1>Youtube Confirm Page</h1>
            <Button
            label={"main"}
            style={"primary"}
            state={"default"}
            size={"medium"}
            onClick={() =>router.push("/")}
            />
        </main>
    )
}