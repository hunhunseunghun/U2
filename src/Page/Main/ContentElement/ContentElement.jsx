import React, { useState } from "react";
import { EleContainer } from "./ContentElementStyled.jsx";
import { LinearProgress } from "@material-ui/core";
import dummyImg from "../../../Img/topviewEX.png";
import ceImg from "../../../Img/ceImg.png";

const ContentElement = () => {
  const [progressValue, setProgressValue] = useState(60);
  const [commentValue, setcommentValue] = useState(5);
  const [shareValue, setShareValue] = useState(78);

  return (
    <EleContainer>
      <div className="eleImgArea">
        <img src={ceImg} alt={ceImg} className="eleImg" />
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
      <div className="eleFunc">
        <div className="progressArea">
          <div className="progressText">
            {/* <button className="paticipantBtn">+</button> */}
            <div>참가자</div> <div>{`${progressValue}`}</div>
          </div>
          <LinearProgress
            className="progressBar"
            variant="determinate"
            color="secondary"
            value={progressValue}
          />
          <div className="progressValue">{progressValue}</div>
        </div>
        <div className="meetArea">
          <input type="checkbox" name="chk_info" value="HTML" />
          <div className="meetText">OFF 미팅</div>
        </div>
        <div className="budgetArea">
          <div className="budget">3천만원</div>
          <div className="bugetText">예산금액</div>
        </div>
        <div className="remainDateArea">
          <div className="remainDate">00일</div>
          <div className="remainText">남은 일자</div>
        </div>
      </div>
      <div className="cmntValArea">
        <img
          src={require("../../../Img/comment.svg").default}
          className="cmntIcon"
        />
        <div className="cmntVal">{commentValue}</div>
      </div>

      <div className="shareValArea">
        <img
          src={require("../../../Img/share.svg").default}
          className="shareIcon"
        />
        <div className="shareVal">{shareValue}</div>
      </div>
    </EleContainer>
  );
};

export default ContentElement;
