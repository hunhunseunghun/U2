import React from "react";
import { SelectContainer } from "./SelectStyled.jsx";
import logo from "../../../Img/logo.svg";
import { IoMdArrowDropright } from "react-icons/io";
const EditVid = () => {
  return (
    <SelectContainer>
      <section className="ckBoxArea">
        <div className="ckBoxTop">
          <input type="checkbox" className="ckBox" />
        </div>
        <div className="ckBoxBot">
          <img src={logo} alt="" className="ckIcon" />
          <div className="ckText chkTextEdit">전문영상 편집자</div>
        </div>
      </section>
      <section className="contentArea">
        <div className="contnetTop">
          <div className="contentTitle">
            <IoMdArrowDropright className="textIcon" />
            <div>예제 영상</div>
          </div>
          <p>전문편집자들을 통해 훌륭한 영상물을 만들 수 있습니다</p>
        </div>
        <div className="contnetBot">
          <div>광고영상</div>
        </div>
      </section>
    </SelectContainer>
  );
};
export default EditVid;
