import React, { useState } from "react";
import { MainContainer } from "./MainStyled.jsx";
import TopView from "./TopView/TopView.jsx";
import TopAds from "./TopAds/TopAds.jsx";
import ContentTap from "./ContentTap/ContentTab.jsx";
import ContentElement from "./ContentElement/ContentElement.jsx";
import CampaignSlide from "./CampaignSlide/CampaignSlide.jsx";
import Slider3 from "../../Img/slider3.jpeg";

const Main = () => {
  return (
    <MainContainer>
      <section className="topWrap">
        <TopView />
        <TopAds />
      </section>
      <section className="contentWrap">
        <ContentTap />
        <div className="contentEle">
          <ContentElement />
          <ContentElement />
          <ContentElement />
        </div>
      </section>
      <section className="campArea">
        <div className="campListWrap">
          <div className="campTitle">
            <div className="campTitle_top">U2 와 함께한</div>
            <div className="campTitle_bottom">스마트한 영상 제작</div>
          </div>

          <div className="campList">
            {/* {campList.map((ele, idx) => (const dummyData = [Slider1, Slider2, Slider3];

                <img
                  src={ele.logo}
                  alt={ele.logo}
                  className={`campImg${idx}`}
                />

                <div>{ele.name}</div>
              </div>
            ))} */}

            <div className="campEle">
              <div>LOGO</div>
              <div>삼성생명</div>
            </div>
            <div className="campEle">
              <div>LOGO</div>
              <div>삼성생명</div>
            </div>
            <div className="campEle">
              <div>LOGO</div>
              <div>삼성생명</div>
            </div>
            <div className="campEle">
              <div>LOGO</div>
              <div>삼성생명</div>
            </div>
          </div>
        </div>

        <div className="campSlideWrap">
          <CampaignSlide />
        </div>
      </section>
      <div className="applyBanner">
        <img src={Slider3} alt={Slider3} className="applyBannerImg" />
        <div className="applyBtnWrap">
          <button className="applyBtn">
            <div>프로젝트</div>
            <div>등록</div>
          </button>
        </div>
      </div>
    </MainContainer>
  );
};

export default Main;
