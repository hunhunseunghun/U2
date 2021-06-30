import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MainContainer } from './CreatorMarketStyled.jsx';
import TopView from './TopView/TopView.jsx';
import TopAds from './TopAds/TopAds.jsx';
import ContentTap from './ContentTap/ContentTab.jsx';
import ContentElement from './ContentElement/ContentElement.jsx';
import CampaignSlide from './CampaignSlide/CampaignSlide.jsx';
import Slider3 from '../../Img/slider3.jpeg';

const server = process.env.REACT_APP_U2_DB_HOST;

const Main = () => {
  const [data, setData] = useState(null);

  // useEffect(()=>{
  //   axios.get(`${server}/api/Campaign/challengemaster`).then(res=>{
  //     setData(res.data)
  //   }
  //   )
  // }, [])
  return (
    <MainContainer className="contents_wrap">
      <div className="creatormarket_section">
        <section className="topWrap">
          <TopView />
          <TopAds />
        </section>
        <section className="contentWrap">
          <ContentTap />
          <div className="contentEle">
            <ContentElement data={data} />
            <ContentElement data={data} />
            <ContentElement data={data} />
            <ContentElement data={data} />
          </div>
        </section>
        <section className="campArea">
          <div className="campListWrap">
            <div className="campTitle">
              <div className="campTitle_top">U2 와 함께한</div>
              <div className="campTitle_bottom">스마트한 영상 제작</div>
            </div>

            <div className="campList"></div>
          </div>

          <div className="campSlideWrap">{/* <CampaignSlide /> */}</div>
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
      </div>
    </MainContainer>
  );
};

export default Main;
