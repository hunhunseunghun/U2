import React from "react";
import { SelectContainer } from "./SelectStyled.jsx";
import logo from "../../../Img/logo.svg";
import { IoMdArrowDropright } from "react-icons/io";
const CreateVid = () => {
  return (
    <SelectContainer>
      <section className="ckBoxArea">
        <div className="ckBoxTop">
          <input type="checkbox" className="ckBox" />
        </div>
        <div className="ckBoxBot">
          <img src={logo} alt="" className="ckIcon" />
          <div className="ckText">창작영상</div>
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
    </SelectContainer>
  );
};
export default CreateVid;
