'use client'

import Image from 'next/image'
import styles from './page.module.css'

import { GET_youtubeAuth } from './api/youtube'

export default function Home() {
  
  const clickYoutube = () => {
    const accessToken = localStorage.getItem('access_token');
    GET_youtubeAuth(accessToken)
    .then((res) => {
      console.log("GET_youtubeAuth success", res)
    })
    .catch((err) => {
      console.log("GET_youtube failed", err)
    })
  }

  return (
    <main>
      <h1>Main Page 2</h1>
      <button
      onClick={() => clickYoutube()}
      className={styles.youtube}>
        Youtube
      </button>
      
    </main>
  )
}
