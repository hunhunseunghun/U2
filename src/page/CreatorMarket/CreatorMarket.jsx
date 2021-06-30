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
  const [tabActive, setTabActive] = useState('entire');

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
        <section className="challange_wrap">
          <section className="challange_tab">
            <div
              className={
                tabActive === 'entire' ? 'tab_entire tab_active' : 'tab_entire'
              }
              onClick={() => {
                setTabActive('entire');
              }}
            >
              <span>전체</span>
            </div>
            <div
              className={
                tabActive === 'compte' ? 'tab_compte tab_active' : 'tab_compte'
              }
              onClick={() => {
                setTabActive('compte');
              }}
            >
              <span>공모전</span>
            </div>
            <div
              className={
                tabActive === 'promo' ? 'tab_promo tab_active' : 'tab_promo'
              }
              onClick={() => {
                setTabActive('promo');
              }}
            >
              <span>광고/홍보</span>
            </div>
            <div
              className={tabActive === 'cv' ? 'tab_cv tab_active' : 'tab_cv'}
              onClick={() => {
                setTabActive('cv');
              }}
            >
              <span>창작영상</span>
            </div>
            <div
              className={tabActive === 've' ? 'tab_ve tab_active' : 'tab_ve'}
              onClick={() => {
                setTabActive('ve');
              }}
            >
              <span>영상편집</span>
            </div>
            <div
              className={tabActive === 'ir' ? 'tab_ir tab_active' : 'tab_ir'}
              onClick={() => {
                setTabActive('ir');
              }}
            >
              <span>강사모집</span>
            </div>
          </section>

          <div className="challange_ele">
            <ContentElement data={data} />
            <ContentElement data={data} />
            <ContentElement data={data} />
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
