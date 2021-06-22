import React from "react";
import { NavContainer } from "./NavBarStyled";
import logo from "../Img/logo.svg";
import profileImg from "../Img/profileImg.svg";

const NavBar = ({ history }) => {
  return (
    <NavContainer className="header white">
      <div className="header_tl">
        <a href="/">
          <div className="logo_section">
            <img src={logo} alt="" className="logoImg" />
          </div>
        </a>
      </div>
      <div className="main_menu">
        <ul>
          <li className="active">
            <a href="/">메인으로</a>
          </li>
          <li className="">
            <a href="/tutorial">영상제작팁</a>
          </li>
          <li className="">
            <a href="/price">요금제</a>
          </li>
          <li className="tab_vidmarket">
            <a
              onClick={() => {
                history.push("/survmain");
              }}
            >
              영상마켓
            </a>
            <div className="vidmarket_dorpdown">
              <div
                className="dropdown_prjapply"
                onClick={() => {
                  history.push("/prjregi");
                }}
              >
                프로젝트 등록
              </div>
              <div className="dropdown_currprj">진행중인 프로젝트</div>
            </div>
          </li>
          <li>
            <a className="profileImg" href="/login">
              <img src={profileImg} alt="" className="profileImg" />
            </a>
          </li>
        </ul>
      </div>
    </NavContainer>
  );
};

export default NavBar;
