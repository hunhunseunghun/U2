import React from "react";
import Ads from "./Select/Ads.jsx";
import CreateVid from "./Select/CreateVid.jsx";
import EditVid from "./Select/EditVid.jsx";
import IR from "./Select/IR.jsx";
import Registration from "./Registration/Registration.jsx";
import { PrjRegiContainer } from "./ProjectRegiStyled.jsx";

const ProjectRegi = () => {
  return (
    <PrjRegiContainer>
      <section className="titleArea">
        <div>대상 선택</div>
      </section>
      <section className="contentArea prjSelect">
        <Ads />
        <CreateVid />
        <EditVid />
        <IR />
      </section>
      <section className="titleArea">
        <div>과제 등록</div>
      </section>
      <section className="contentArea prjRegi">
        <div className="prjDesc">
          해당 영상 제작/편집 프리랜서들에게 단 몇분만에 연락을 취해 보실 수
          있습니다. 프로필 정보나 평가 등급, 포트폴리오 자료, 등을 확인해 보신
          다음에, 채팅 서비스를 이용하여 얘기도 나눠 보십시오. 작업 결과를
          받으면, 그 결과를 확인하여 100% 만족하실 때에만 그 보상을 지불해
          주십시오.
        </div>
        <Registration />
      </section>
    </PrjRegiContainer>
  );
};

export default ProjectRegi;
