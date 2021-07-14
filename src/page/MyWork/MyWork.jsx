import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyWorkContainer } from './MyWorkStyled.jsx';
import ParticipateTable from './tables/ParticipateTable';
import RegistTable from './tables/RegistTable.jsx';
import participateDatas from './sampledatas/sampledataParticipate.js';
import registDatas from './sampledatas/sampledataRegist.js';
import { GrAdd } from 'react-icons/gr';
import axios from 'axios';
import { useSelector } from 'react-redux';
const server = process.env.REACT_APP_U2_DB_HOST;
const table = {
  '등록 프로젝트': <RegistTable datas={registDatas}></RegistTable>, //add new props
  '참여 프로젝트': (
    <ParticipateTable datas={participateDatas}></ParticipateTable>
  ), //add new props
};

const MyWork = props => {
  let twoTabs;
  if (participateDatas.length < registDatas.length) {
    twoTabs = ['등록 프로젝트', '참여 프로젝트'];
  } else {
    twoTabs = ['참여 프로젝트', '등록 프로젝트'];
  }
  const [currentTab, setCurrentTab] = useState(twoTabs[0]);
  const [newRegistration, setNewAccept] = useState(true);
  const [newParticipant, setNewQuest] = useState(false);

  const userInfo = useSelector(state => state.userInfo);
  console.log('userInfo: ', userInfo);

  let clickHandler = id => {
    setCurrentTab(id);
  };
  const token = localStorage.getItem('token');
  console.log('token in mywork: ', token);
  var data = JSON.stringify({
    missions: [
      {
        videos: [
          {
            challengeIdx: 0,
            seq: 0,
            platform: 'string',
            url: 'string',
            platformRequired: 0,
            registMemberIdx: 0,
            registDate: '2021-07-06T01:35:47.227Z',
            modifyMemberIdx: 0,
            modifyDate: '2021-07-06T01:35:47.227Z',
          },
        ],
        challengeIdx: 0,
        seq: 0,
        missionDesc: 'string',
        datePub: '2021-07-06T01:35:47.227Z',
        dateBegin: '2021-07-06T01:35:47.227Z',
        dateFin: '2021-07-06T01:35:47.227Z',
        statusCode: 0,
        shareRequired: 0,
        filmRequired: 0,
        emailRequired: 0,
        contactRequired: 0,
        addrRequired: 0,
        imageRequired: 0,
        noteRequired: 0,
        registMemberIdx: 0,
        registDate: '2021-07-06T01:35:47.227Z',
        modifyMemberIdx: 0,
        modifyDate: '2021-07-06T01:35:47.227Z',
      },
    ],
    hire: {
      fields: [
        {
          challengeIdx: 0,
          seq: 0,
          fieldCode: 'string',
          fieldName: 'string',
          registMemberIdx: 0,
          registDate: '2021-07-06T01:35:47.227Z',
          modifyMemberIdx: 0,
          modifyDate: '2021-07-06T01:35:47.227Z',
        },
      ],
      docs: [
        {
          challengeIdx: 0,
          seq: 0,
          docCode: 'string',
          registMemberIdx: 0,
          registDate: '2021-07-06T01:35:47.227Z',
          modifyMemberIdx: 0,
          modifyDate: '2021-07-06T01:35:47.227Z',
        },
      ],
      challengeIdx: 1,
      seq: 0,
      isOnline: 0,
      loc: 'string',
      applyWay: 0,
      dateBegin: '2021-07-06T01:35:47.227Z',
      dateFin: '2021-07-06T01:35:47.227Z',
      deadline: 0,
      registMemberIdx: 0,
      registDate: '2021-07-06T01:35:47.227Z',
      modifyMemberIdx: 0,
      modifyDate: '2021-07-06T01:35:47.227Z',
    },
    applications: [
      {
        challengeIdx: 0,
        missonSeq: 0,
        memberIdx: 0,
        urlCat: 'string',
        url: 'string',
        contactCode: 0,
        contact: 'string',
        email: 'string',
        postCode: 'string',
        addr: 'string',
        photo: 'string',
        note: 'string',
        statusCode: 0,
        checkStatusCode: 0,
        dateApplied: '2021-07-06T01:35:47.227Z',
        registMemberIdx: 0,
        registDate: '2021-07-06T01:35:47.227Z',
        modifyMemberIdx: 0,
        modifyDate: '2021-07-06T01:35:47.227Z',
      },
    ],
    ownerName: '이호준',
    rewards: [
      {
        challengeIdx: 0,
        seq: 0,
        cat: 0,
        qty: 0,
        pts: 0,
        currency: 'string',
        datePayment: '2021-07-06T01:35:47.227Z',
        registMemberIdx: 0,
        registDate: '2021-07-06T01:35:47.227Z',
        modifyMemberIdx: 0,
        modifyDate: '2021-07-06T01:35:47.227Z',
      },
    ],
    challengerCount: 0,
    commentCount: 0,
    shareCount: 0,
    challengeIdx: 1,
    title: 'string',
    subtitle: 'string',
    ownerIdx: 0,
    companyA: 'string',
    companyB: 'string',
    url: 'string',
    challengeDesc: 'string',
    meetCode: 0,
    challengeTargetCode: 0,
    datePub: '2021-07-06T01:35:47.227Z',
    logo: 'string',
    mainImage: 'string',
    fileRef: 'string',
    promoting: 0,
    commentAllowed: 0,
    charge: 'string',
    chargeShown: 0,
    chargeContact: 'string',
    chargeContactShown: 0,
    chargeeMail: 'string',
    chargeeMailShown: 0,
    registMemberIdx: 0,
    registDate: '2021-07-06T01:35:47.227Z',
    modifyMemberIdx: 0,
    modifyDate: '2021-07-06T01:35:47.227Z',
  });
  const config = {
    method: 'post',
    url: 'https://u2-rest-dev.azurewebsites.net/api/Campaign/challenge',
    headers: {
      Authorization: 'Bearer ' + token,
    },
    data: data,
  };

  useEffect(() => {
    axios(config)
      .then(response => {
        console.log('response:');
        console.log(response.data);
      })
      .catch(err => {
        console.log('response error:');
        console.log(err);
      });
  });

  return (
    <MyWorkContainer className="mywork_contents_wrap">
      <section className="mywork_section">
        <div className="mywork_title_area">
          <div>나의 프로젝트</div>
          <div className="mywork_title_style"></div>
        </div>
        <div className="mywork_wrapper">
          {twoTabs.map((tabname, index) => {
            return (
              <span
                onClick={() => {
                  console.log('index: ', index);
                  clickHandler(tabname);
                }}
                className={
                  (() => {
                    if (currentTab === tabname) {
                      return 'selected';
                    } else {
                      return 'unselected';
                    }
                  })() +
                  ' ' +
                  'tab'
                }
              >
                {tabname}
                {(() => {
                  if (index === 0) {
                    return newRegistration;
                  } else if (index === 1) {
                    return newParticipant;
                  }
                })() ? (
                  <span className={'newAlert tab_newalert'}>new</span>
                ) : (
                  ''
                )}
              </span>
            );
          })}
        </div>
        {currentTab === 0 ? (
          <Link to={{ pathname: '/prjregi' }} className="regi-project">
            <GrAdd />
            신규 프로젝트 등록
          </Link>
        ) : (
          ''
        )}
        <div className="myproject_contents">{table[currentTab]}</div>
      </section>
    </MyWorkContainer>
  );
};

export default MyWork;
