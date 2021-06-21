import React from "react";
import { EleContainer } from "./ContentElementStyled.jsx";
import contentImg from "../../../Img/slider1.jpeg";

const ContentElement = () => {
  return (
    <EleContainer>
      <div className="eleImgArea">
        <img src={contentImg} alt={contentImg} className="eleImg" />
      </div>
      <div className="eleDescArea">
        <h1 className="eleDesTitle">
          Aespa 'forever 약속' 앨범 발매 기념 챌린지
        </h1>
        <div className="eleDesc">
          글로벌 슈퍼 루키 에스파, 싱글 포에버 2월 5일 공개 기념 이벤트 u2
          서비스에서 에스파 테마를 다운받고, 약속 메시지가 담긴 뮤직비디오를
          제작해
        </div>
      </div>
    </EleContainer>
  );
};

export default ContentElement;
