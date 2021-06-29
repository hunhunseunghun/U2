import React from "react";
import { SelectContainer } from "./SelectStyled.jsx";
import logo from "../../../Img/logo.svg";
import { IoMdArrowDropright } from "react-icons/io";
const IR = () => {
  return (
    <SelectContainer>
      <section className="ckBoxArea">
        <div className="ckBoxTop">
          <input type="checkbox" className="ckBox" />
        </div>
        <div className="ckBoxBot">
          <img src={logo} alt="" className="ckIcon" />
          <div className="ckText">강사모집</div>
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
    </SelectContainer>
  );
};
export default IR;
