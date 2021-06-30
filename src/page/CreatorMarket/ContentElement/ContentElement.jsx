import React, { useState, useEffect } from 'react';

import { EleContainer } from './ContentElementStyled.jsx';
import { LinearProgress } from '@material-ui/core';
import dummyImg from '../../../Img/topviewEX.png';
import ceImg from '../../../Img/ceImg.png';

const ContentElement = ({ data }) => {
  const [progressValue, setProgressValue] = useState(60);
  const [commentValue, setcommentValue] = useState(5);
  const [shareValue, setShareValue] = useState(78);

  return (
    <EleContainer>
      <div className="challange_img_area">
        <img src={ceImg} alt={ceImg} className="challange_img" />
        {/* {tItem.bannerImage === null && (
          <div className={'no_img'}>
            <img src={'/img/no_image.png'} />
            <span className={'not_contents'}>Image not found</span>
          </div>
        )} */}
      </div>
      <div className="challange_contents">
        <h1 className="challange_title">
          Aespa "Forever (약속)" 앨범 발매기념 챌린지
          {data !== null ? data[0].title : ''}
        </h1>
        <div className="challange_sub">
          글로벌 슈퍼 루키 '에스파, 싱글 'Forever' 2월 5일 기념 이벤트! U2(가칭)
          서비스에서 에스파 'Forever(약속)' 테마 다운받고, 약속 메시지가 담긴
          뮤직비디오를 제작하세요
          {data !== null ? data[0].subtitle : ''}
        </div>
      </div>
      <div className="challange_bottom">
        <div className="challange_progress_area">
          <div className="challange_progress_text">
            {/* <button className="paticipantBtn">+</button> */}
            <div>참가자</div> <div>{`${progressValue}`}</div>
          </div>
          <LinearProgress
            className="challange_progressBar"
            variant="determinate"
            color="secondary"
            value={progressValue}
          />
        </div>
        <section className="challange_info_top">
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

        <section className="challange_info_bot">
          <div className="cmntValArea">
            <img
              src={require('../../../Img/comment.svg').default}
              className="cmntIcon"
            />
            <div className="cmntVal">{commentValue}</div>
          </div>

          <div className="shareValArea">
            <img
              src={require('../../../Img/share.svg').default}
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
