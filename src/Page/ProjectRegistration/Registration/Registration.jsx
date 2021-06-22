import React from "react";
import { RegiContainer } from "./RegistrationStyled.jsx";

const Registration = () => {
  return (
    <RegiContainer>
      <section className="ele request">
        <div className="menu">의뢰 주체</div>
        <div className="inputInfo">
          <div className="radioWrap">
            <input type="radio" name="chk_info" value="indivisual" />
            <div>개인 : 홍길동 님</div>
            <input type="radio" name="chk_info" value="business" />
            <div>비즈니스</div>
          </div>
        </div>
      </section>
      <section className="ele">
        <div className="menu">* 프로젝트 명</div>
        <div className="inputInfo">
          <div className="inputPrjName">
            <input
              type="text"
              className="prjName"
              placeholder="프로젝트명을 입력해 주십시오"
            />
          </div>
          <div>프로젝트명을 입력해 주십시오</div>
        </div>
      </section>
      <section className="ele">
        <div className="menu">* 프로젝트 설명</div>
        <div className="inputInfo">
          <div className="inputPrjDesc">
            <input
              type="text"
              className="prjName"
              placeholder="U2 서비스 매니저에게 프로젝트에 대하여 좀 더 자세한 내용을 알려주세요"
            />
          </div>
          <div>프로젝트 설명을 입력해 주십시오</div>
        </div>
      </section>
      <section className="ele">
        <div className="menu"> 파일 업로드</div>
        <div className="inputPrjUpload">
          <div>프로젝트 관련한 자료를 업로드 해주세요</div>
        </div>
      </section>
      <section className="ele">
        <div className="menu">* 프로젝트 미팅 여부</div>
      </section>
      <section className="ele">
        <div className="menu">편집 대상 파일</div>
      </section>
    </RegiContainer>
  );
};

export default Registration;
