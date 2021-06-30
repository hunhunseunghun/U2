import React from "react";
import { SelectContainer } from "./SelectStyled.jsx";
import logo from "../../../Img/logo.svg";
import { IoMdArrowDropright } from "react-icons/io";
const Ads = () => {
  return (
    <SelectContainer>
      <section className="ckBoxArea">
        <div className="ckBoxTop">
          <input type="checkbox" className="ckBox" />
        </div>
        <div className="ckBoxBot">
          <img src={logo} alt="" className="ckIcon" />
          <div className="ckText">광고 / 홍보</div>
        </div>
      </section>
      <section className="contentArea">
        <div className="contnetTop">
          <div className="contentTitle">
            <IoMdArrowDropright className="textIcon" />
            <div>예제 영상</div>
          </div>
          <p>다양한 분야의 인플루언서를 통해 고객님의 상품을 광고해보세요</p>
        </div>
        <div className="contnetBot">
          <div>광고영상</div>
        </div>
      </section>
    </SelectContainer>
  );
};
export default Ads;
