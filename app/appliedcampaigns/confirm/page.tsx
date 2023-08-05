"use client";
import { useRef } from "react";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import { useRecoilState, useSetRecoilState } from "recoil";

import InfoInput from "@/app/components/InfoInput";
import Button from "@/app/components/Button";
import { toastState } from "@/app/recoil/user";
import Toast from "@/app/components/Toast";

export default function Confirm() {
  const [toast, setToast] = useRecoilState(toastState);
  const toastRef = useRef<any>();
  const router = useRouter();

  const clickConfirm = () => {
    setTimeout(() => {
      router.push("/appliedcampaigns");

      if (!toast.visible) {
        setToast({
          visible: true,
          message: "콘텐츠 승인이 요청되었습니다",
          type: "confirm",
          request: "/appliedcampaigns/confirm",
        });
      }
    }, 300);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>캠페인 승인 요청</h1>
        <h6>업로드한 콘텐츠의 url을 입력해주세요.</h6>
        <div className={styles.inputDiv}>
          <InfoInput
            label={"콘텐츠 URL"}
            placeholder={"Enter the url of your uploaded content"}
          />
        </div>
        <div className={styles.buttonDiv}>
          <Button
            onClick={clickConfirm}
            label={"승인요청"}
            style={"primary"}
            size={"medium"}
            state={"default"}
          />
        </div>
      </div>
    </main>
  );
}
