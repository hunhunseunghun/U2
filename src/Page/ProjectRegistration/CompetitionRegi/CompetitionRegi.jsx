import React, { useState } from 'react';
import { RegiContainer } from './CompetitionRegiStyled.jsx';
import DropDown from './DropDown/DropDown.jsx';
import { Divider } from '@material-ui/core';

const CompetitionRegi = () => {
  // modal handle state------------------------------
  const [isActive, setIsActive] = useState(false);
  const [defaultIdx, setDefaultIdx] = useState(0);
  const [competition, setCompetition] = useState([
    {
      form: '개인',
      companyName: '홍길동',
      logo: '',
      email: '',
      phoneNumber: '',
      snsId: '',
      id: 1,
    },
    {
      form: '비즈프로필',
      companyName: 'abc입니다.test입니다.',
      logo: '',
      email: 'abc@gmail.com',
      phoneNumber: '023333333',
      snsId: 'abcCompany',
      id: 2,
    },
    {
      form: '비즈프로필',
      companyName: 'U2',
      logo: '',
      email: '',
      phoneNumber: '',
      snsId: '',
      id: 3,
    },
  ]);
  //--------------------------------------------------

  return (
    <RegiContainer>
      <section className="titleArea">
        <div>과제 등록</div>
      </section>

      <section className="ele">
        <div className="menu">* 주최사</div>
        <div className="inputInfo competitionName">
          <div
            className="defaultCompetition"
            onClick={() => {
              setIsActive(true);
            }}
          >
            {`${competition[defaultIdx].form} : ${competition[defaultIdx].companyName}`}
          </div>
          <DropDown
            setDefaultIdx={setDefaultIdx}
            competition={competition}
            setIsActive={setIsActive}
            isActive={isActive}
          />
        </div>
      </section>
      <section className="ele">
        <div className="menu">* 공모전명</div>
        <div className="inputInfo">
          <div className="inputPrjName">
            <input
              type="text"
              className="prjName"
              placeholder="프로젝트명을 입력해 주십시오"
            />
          </div>
        </div>
      </section>
    </RegiContainer>
  );
};

export default CompetitionRegi;
