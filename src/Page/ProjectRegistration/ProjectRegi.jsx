import React, { useState } from 'react';
import Ads from './Select/Ads.jsx';
import CreateVid from './Select/CreateVid.jsx';
import EditVid from './Select/EditVid.jsx';
import IR from './Select/IR.jsx';

import { PrjRegiContainer } from './ProjectRegiStyled.jsx';
import logo from '../../Img/logo.svg';
import { IoMdArrowDropright } from 'react-icons/io';

const ProjectRegi = ({ history }) => {
  const [pathRegi, setPathRegi] = useState(null); // 페이지네이션 관리

  const handleRadioChange = e => {
    setPathRegi(e.target.value);
    console.log(e.target.value);
  };

  return (
    <PrjRegiContainer>
      <section className="titleArea">
        <div>대상 선택</div>
      </section>

      <section className="contentArea prjSelect">
        <form>
          <section className="ckBoxArea">
            <div className="ckBoxTop">
              <input
                type="radio"
                className="ckBox"
                name="prjSelect"
                value="competiton"
                onChange={handleRadioChange}
              />
            </div>
            <div className="ckBoxBot">
              <img src={logo} alt="" className="ckIcon" />
              <div className="ckText">공모전</div>
            </div>
          </section>
          <section className="contentArea">
            <div className="contnetTop">
              <div className="contentTitle">
                <IoMdArrowDropright className="textIcon" />
                <div>예제 영상</div>
              </div>
              <p>
                다양한 분야의 인플루언서를 통해 고객님의 상품을 광고해보세요
              </p>
            </div>
            <div className="contnetBot">
              <div>광고영상</div>
            </div>
          </section>
          <section className="ckBoxArea">
            <div className="ckBoxTop">
              <input
                type="radio"
                className="ckBox"
                name="prjSelect"
                value="videditor"
                onChange={handleRadioChange}
              />
            </div>
            <div className="ckBoxBot">
              <img src={logo} alt="" className="ckIcon" />
              <div className="ckText">전문영상 편집자</div>
            </div>
          </section>
          <section className="contentArea">
            <div className="contnetTop">
              <div className="contentTitle">
                <IoMdArrowDropright className="textIcon" />
                <div>예제 영상</div>
              </div>
              <p>다양한 창작활동을 하는 크리에이터들에게 과제를 제공해보세요</p>
            </div>
            <div className="contnetBot">
              <div>광고영상</div>
            </div>
          </section>
          <section className="ckBoxArea">
            <div className="ckBoxTop">
              <input
                type="radio"
                className="ckBox"
                name="prjSelect"
                value="vidcreator"
                onChange={handleRadioChange}
              />
            </div>
            <div className="ckBoxBot">
              <img src={logo} alt="" className="ckIcon" />
              <div className="ckText">영상 크리에이터 인플루언서</div>
            </div>
          </section>
          <section className="contentArea">
            <div className="contnetTop">
              <div className="contentTitle">
                <IoMdArrowDropright className="textIcon" />
                <div>예제 영상</div>
              </div>
              <p>다양한 창작활동을 하는 크리에이터들에게 과제를 제공해보세요</p>
            </div>
            <div className="contnetBot">
              <div>광고영상</div>
            </div>
          </section>
          <section className="ckBoxArea">
            <div className="ckBoxTop">
              <input
                type="radio"
                className="ckBox"
                name="prjSelect"
                value="ir"
                onChange={handleRadioChange}
              />
            </div>
            <div className="ckBoxBot">
              <img src={logo} alt="" className="ckIcon" />
              <div className="ckText">강사 채용</div>
            </div>
          </section>
          <section className="contentArea">
            <div className="contnetTop">
              <div className="contentTitle">
                <IoMdArrowDropright className="textIcon" />
                <div>예제 영상</div>
              </div>
              <p>영상을 만들고 배우고 싶은 학생들에게 과제를 제공해 보세요</p>
            </div>
            <div className="contnetBot">
              <div>광고영상</div>
            </div>
          </section>
        </form>
      </section>

      <section className="btnArea">
        <button className="cancleBtn">취소</button>
        <button
          className="nextBtn"
          onClick={() => {
            if (pathRegi === null) {
              alert('대상을 선택해주세요');
            } else {
              history.push(`${pathRegi}`);
            }
          }}
        >
          다음
        </button>
      </section>
    </PrjRegiContainer>
  );
};

export default ProjectRegi;
