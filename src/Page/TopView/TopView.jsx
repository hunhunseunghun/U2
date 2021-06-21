import React, { useState } from "react";
import { TopViewContainer } from "./TopViewStyled.jsx";

const TopView = () => {
  const [isloading, setIsloading] = useState();

  return (
    <TopViewContainer>
      <div> hellowWord;</div>
    </TopViewContainer>
  );
};

export default TopView;
