import React, { useState } from "react";
import { MainContainer } from "./MainStyled.jsx";
import TopView from "./TopView/TopView.jsx";
import TopAds from "./TopAds/TopAds.jsx";
import ContentTap from "./ContentTap/ContentTab.jsx";
import ContentElement from "./ContentElement/ContentElement.jsx";
const Main = () => {
  const [isloading, setIsloading] = useState();

  return (
    <MainContainer>
      <section className="topWrap">
        <TopView />
        <TopAds />
      </section>
      <sction className="contentWrap">
        <ContentTap />
        <div className="contentEle">
          <ContentElement />
        </div>
      </sction>
    </MainContainer>
  );
};

export default Main;
