import React from "react";
import { TabContainer } from "./ContentTabStyled.jsx";

const ContentTap = () => {
  return (
    <TabContainer>
      <div className="tab_entire">
        <span>전체</span>
      </div>
      <div className="tab_compet">
        <span>공모전</span>
      </div>
      <div className="tab_promo">
        <span>광고/홍보</span>
      </div>
      <div className="tab_cv">
        <span>창작영상</span>
      </div>
      <div className="tab_ve">
        <span>영상편집</span>
      </div>
      <div className="tab_ir">
        <span>강사모집</span>
      </div>
    </TabContainer>
  );
};

export default ContentTap;
