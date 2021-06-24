import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
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
            <Link
              onClick={() => {
                handleDdProfile();
                console.log("link clicked");
              }}
              to={{ pathname: "/mywork", state: { test: "test" } }}
            >
              나의 과제
            </Link>
          </li>
          <li>
            <Link>검수 현황</Link>
          </li>
          <li>
            <Link>로그 아웃</Link>
          </li>
        </ul>
      </nav>
    </DdContainer>
  );
};

export default DdProfile;
