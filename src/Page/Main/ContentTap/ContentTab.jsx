import React from "react";
import { TabContainer } from "./ContentTabStyled.jsx";

const ContentTap = () => {
  return (
    <TabContainer>
      <div className="tab_entire">
        <div>전체</div>
      </div>
      <div className="tab_compet">
        <div>공모전</div>
      </div>
      <div className="tab_promo">
        <div>광고/홍보</div>
      </div>
      <div className="tab_cv">
        <div>창작영상</div>
      </div>
      <div className="tab_ve">
        <div>영상편집</div>
      </div>
      <div className="tab_ir">
        <div>강사모집</div>
      </div>
    </TabContainer>
  );
};

export default ContentTap;
