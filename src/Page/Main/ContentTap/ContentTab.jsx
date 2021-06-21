import React from "react";
import { TabContainer } from "./ContentTabStyled.jsx";

const ContentTap = () => {
  return (
    <TabContainer>
      <div className="tab_entire">전체</div>
      <div className="tab_compet">공모전</div>
      <div className="tab_promo">광고 / 홍보</div>
      <div className="tab_cv">창작영상</div>
      <div className="tab_ve">영상편집</div>
      <div className="tab_ir">강사모집</div>
    </TabContainer>
  );
};

export default ContentTap;
