import React, { useState } from "react";
import { DdContainer } from "./DropDownStyled.jsx";

const DdProfile = ({ ddPofile, dropdownRef, history, handleDdProfile }) => {
  return (
    <DdContainer className="menu-container">
      <nav
        ref={dropdownRef}
        className={`menu ddProfile ${ddPofile ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            <a href="/mypage" className="mypage">
              My Page
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                history.push("/mywork");
                handleDdProfile();
              }}
            >
              나의 과제
            </a>
          </li>
          <li>
            <a href="/">검수 현황</a>
          </li>
          <li>
            <a href="/">로그 아웃</a>
          </li>
        </ul>
      </nav>
    </DdContainer>
  );

  // switch (ddpActive) {
  //   case true:
  //     return (
  //       <div className="profile_pop pop_sub">
  //         <ul>
  //           <li>My page</li>
  //           <li>나의 과제</li>
  //           <li>로그아웃</li>
  //         </ul>
  //       </div>
  //     );
  //   case false:
  //     return <></>;
  // }
};

export default DdProfile;
