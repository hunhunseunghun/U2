import React, { useState } from "react";
import { MainContainer } from "./MainStyled.jsx";
import TopView from "./TopView/TopView.jsx";

const Main = () => {
  const [isloading, setIsloading] = useState();

  return (
    <MainContainer>
      <TopView />
    </MainContainer>
  );
};

export default Main;
