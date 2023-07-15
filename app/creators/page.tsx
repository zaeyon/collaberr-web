"use client";
import { useState } from "react";
import CreatorList from "../components/Creators/CreatorList";
import CreatorDetail from "../components/Creators/CreatorDetail";
import default_profile_image from "../assets/icons/icon_profile-fill.png";

export default function Creators() {
  const [isVisCreatorDetail, setIsVisCreatorDetail] = useState(false);

  const openCreatorDetail = () => {
    setIsVisCreatorDetail(true);
  };

  const clickModalOutside = () => {
    setIsVisCreatorDetail(false);
  };

  return (
    <main>
      <h1>Creators</h1>
      <CreatorList openCreatorDetail={openCreatorDetail} />
      {isVisCreatorDetail && (
        <CreatorDetail clickModalOutside={clickModalOutside} />
      )}
    </main>
  );
}
