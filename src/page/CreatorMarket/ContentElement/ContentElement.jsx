import React, { useState, useEffect } from "react";

import { EleContainer } from "./ContentElementStyled.jsx";
import { LinearProgress } from "@material-ui/core";
import dummyImg from "../../../Img/topviewEX.png";
import ceImg from "../../../Img/ceImg.png";

const ContentElement = ({ data }) => {
  const [progressValue, setProgressValue] = useState(60);
  const [commentValue, setcommentValue] = useState(5);
  const [shareValue, setShareValue] = useState(78);

  return (
    <EleContainer>
      <div className="eleImgArea">
        <img src={ceImg} alt={ceImg} className="eleImg" />
      </div>
      <div className="eleDescArea">
        <h1 className="eleDesTitle">{data !== null ? data[0].title : ""}</h1>
        <div className="eleDesc">{data !== null ? data[0].subtitle : ""}</div>
      </div>
      <div className="eleFunc">
        <div className="progressArea">
          <div className="progressText">
            {/* <button className="paticipantBtn">+</button> */}
            {/* <div>참가자</div> <div>{`${progressValue}`}</div> */}
          </div>
          <LinearProgress
            className="progressBar"
            variant="determinate"
            color="secondary"
            value={progressValue}
          />
        </div>
        <section className="infoTop">
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
        </section>

        <section className="infoBottom">
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
        </section>
      </div>
    </EleContainer>
  );
};

export default ContentElement;