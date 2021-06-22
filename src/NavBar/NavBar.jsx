import React, { useState, useRef } from "react";
import { NavContainer } from "./NavBarStyled";
import logo from "../Img/logo.svg";
import profileImg from "../Img/profileImg.svg";
import DdProfile from "./DropDown/DdProfile.jsx";

const NavBar = ({ history }) => {
  const dropdownRef = useRef(null);
  const [ddPofile, setDdprofile] = useState(false);
  const handleDdProfile = () => setDdprofile(!ddPofile);

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
          <li className="tab_porfile">
            <div className="profileImg">
              <img
                src={profileImg}
                alt=""
                className="profileImg"
                onClick={handleDdProfile}
              />
              <DdProfile
                ddPofile={ddPofile}
                dropdownRef={dropdownRef}
                history={history}
                handleDdProfile={handleDdProfile}
              />
            </div>
          </li>
        </ul>
      </div>
    </NavContainer>
  );
};

export default NavBar;
