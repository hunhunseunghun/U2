import React, { useState } from "react";
import { MyWorkContainer } from "./MyWorkStyled.jsx";
import Accepter from "./tabs/accepter/Accepter.jsx";
import Quester from "./tabs/quester/Quester.jsx";
const obj = {
  0: <Accepter></Accepter>,
  1: <Quester></Quester>,
};
const MyWork = (props) => {
  let [currentTab, setCurrentTab] = useState(0);

  let clickHandler = (id) => {
    setCurrentTab(id);
  };
  console.log(props.location.state);

  return (
    <MyWorkContainer>
      <div className="mywork wrapper">
        <ul className="tabs">
          <li
            onClick={() => {
              clickHandler(0);
            }}
            style={{ cursor: "pointer" }}
          >
            Accepter
          </li>
          <li
            onClick={() => {
              clickHandler(1);
            }}
            style={{ cursor: "pointer" }}
          >
            Quester
          </li>
        </ul>
      </div>
      <div className="contentes">{obj[currentTab]}</div>
    </MyWorkContainer>
  );
};

export default MyWork;
