"use client";

import Image from "next/image";
import styles from "./page.module.scss";

import { GET_youtubeAuth } from "./api/youtube";
import axios from "axios";

export default function Home() {
  const clickYoutube = () => {
    axios
      .get("http://localhost:8000/api/youtube/import-data/")
      .then((res) => {
        console.log("import data api success", res);
      })
      .catch((err) => {
        console.log("import data err", err);
      });
  };

  return (
    <main>
      <h1>Main Page 2</h1>
      <button onClick={() => clickYoutube()} className={styles.youtube}>
        import data
      </button>
    </main>
  );
}
