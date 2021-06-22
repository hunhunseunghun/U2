import React, { useState } from "react";
import { AdsContainer } from "./TopAdsStyled.jsx";

const TopAds = () => {
  return (
    <AdsContainer>
      <h2>광고 / 마케팅</h2>
      <p>다양한 분야의 인플루언서를 통해 고객님의 상품을 광해 보세요</p>
      <div className="adsImgWrap">
        <img src="" alt="" className="adsImg" />
      </div>
      <div className="adsBtnArea">
        <button className="adsBtn">의뢰하기</button>
      </div>
    </AdsContainer>
  );
};

export default TopAds;
