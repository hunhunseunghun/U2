import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DropDown from './DropDown/DropDown.jsx';
import FileUploader from './FileUploader/FileUploader.jsx';
import EditFileUploader from './EditFileUploader/EditFileUploader.jsx';
import QuillTextEditor from './QuillTextEditor/QuillTextEditor.jsx';
import { RegiConationer } from './VidEditorRegiStyled.jsx';
import headerIcon from '../../../Img/Icons/headerIcon.png';
import onlineIcon from '../../../Img/Icons/onlineIcon.png';
import offlineIcon from '../../../Img/Icons/offlineIcon.png';
import downArrowIcon from '../../../Img/Icons/sortarrowdown.png';
import { DateTimePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import requestBodyGenerator from '../../../library/requestBodyGenerator.js';
import axios from 'axios';

const VidEditorRegi = () => {
  let history = useHistory();
  const userInfo = useSelector(state => state.userInfo);

  //handle editor ---------------------------------------------
  const [title, setTitle] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [sponsor, setSponsor] = useState('');
  const [refvidUrl, setrefvidUrl] = useState('');
  //대면미팅
  const [meetCode, setMeetCode] = useState(0);
  //보상일 비활성화
  const [confirmRewardsDate, SetConfirmRewardsDate] = useState(true);
  //보상 조건
  const [isCurrencyReward, setIsCurrencyReward] = useState(false);
  const [isDirectReward, setIsDirectReward] = useState(false);
  const [rewardCurrency, setRewardCurrency] = useState(null);
  const [rewardDirect, setRewardDirect] = useState(null);
  //ownerIdx for API
  const [ownerIdx, setOwnerIdx] = useState(0);

  //이메일
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [emailExposure, setEmailExposure] = useState(false);
  //연락처
  const [mobile1, setMobile1] = useState('010');
  const [mobile2, setMobile2] = useState('');
  const [mobile3, setMobile3] = useState('');
  const [mobileExposure, setMobileExposure] = useState(false);
  //담당자
  const [admin, setAdmin] = useState('');
  const [adminExposure, setAdminExposure] = useState(false);
  //댓글 기능
  const [isComment, setIsComment] = useState(true);
  //상세 내용
  const [missionDesc, setMissionDesc] = useState('');
  //시상종류
  const [contest, setContest] = useState(false);
  const [overseas, setOverseas] = useState(false);
  const [camp, setCamp] = useState(false);
  const [scatterPoint, setScatterPoint] = useState(false);
  const [intern, setIntern] = useState(false);
  const [full_time, setFull_time] = useState(false);
  const [prize, setPrize] = useState(false);
  const [toggleDirect, setToggleDirect] = useState(false);
  const [directInput, setDirectInput] = useState('');
  //접수방법
  const [isOnline, setIsOnline] = useState(false);
  const [isSnsRequired, setIsSnsRequired] = useState(true);
  const [isVideoProduction, setIsVideoProduction] = useState(false);
  const [isVidRequired, setIsVidRequired] = useState(true);
  const [isYoutube, setIsYoutube] = useState(false);
  const [isTiktok, setIsTiktok] = useState(false);
  const [isVimeo, setIsVimeo] = useState(false);
  const [isFileOrUrl, setFileOrUrl] = useState(false);
  //제출자 개인정보 수집
  const [isEmail, setIsEmail] = useState(false);
  const [emailRequired, setEmailRequired] = useState(true);

  const [isMobile, setIsMobile] = useState(false);
  const [mobileRequired, setMobileRequired] = useState(true);

  // handle modal state---------------------------------------
  const [isActive, setIsActive] = useState(false);
  const [defaultIdx, setDefaultIdx] = useState(0);
  const [profiles, setProfiles] = useState([]);
  // file uploade ---------------------------------------
  const [etcFile, setEtcFile] = useState([]);
  const [etcFilePath, setEtcFilePath] = useState('Choose file to upload');
  const [editTargetFile, setEditTargetFile] = useState([]);
  const [editTargetFilePath, setEditTargetFilePath] = useState(
    'Choose file to upload'
  );

  //-----------------------------------------------------

  const [onMeet, setOnMeet] = useState(null); //온라인 오프라인 미팅 state 값

  const myStorage = window.localStorage;
  //handle date ----------------------------------------------
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [rewardDate, setRewardDate] = useState(null);

  // handle datetime picker theme------------------------------
  const materialTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#000000',
      },
    },
  });
  const handleStartDate = date => {
    setStartDate(date);
    setFinishDate(date);
  };

  const handleSubmit = () => {
    console.log('userInfo: ', userInfo);
    var rewards = [];
    var rewardsEle = {};

    if (rewardCurrency) {
      if (confirmRewardsDate && rewardDate) {
        rewardsEle.datePayment = rewardDate;
        rewardsEle.currency = rewardCurrency;
      }
    }

    console.log(rewardsEle);
    console.log(rewards);

    var videos = [];
    isYoutube && videos.push({ platform: 'YU' });
    isTiktok && videos.push({ platform: 'TT' });
    isVimeo && videos.push({ platform: 'VM' });

    const body = requestBodyGenerator(
      {
        memberIdx: userInfo.memberIdx,
        title: title,
        ownerIdx: ownerIdx,
        // // ownerName: profiles[defaultIdx].companyName,
        // // ownerCat: profiles[defaultIdx].cat,
        // // company: profiles[defaultIdx].companyName,
        // companyA: organizer,
        // companyB: sponsor,
        url: refvidUrl,
        missionDesc: missionDesc,
        meetCode: meetCode,
        // mainImage: posterFile.length > 0 ? posterFile[0].name : null,
        // fileRef: etcFile,
        shareRequired: isOnline ? (isSnsRequired ? 2 : 1) : 0,
        filmRequired: isVideoProduction ? (isVidRequired ? 2 : 1) : 0,
        fileOrUrl: isFileOrUrl ? 1 : 0,
        emailRequired: isEmail ? (emailRequired ? 2 : 1) : 0,
        contactRequired: isMobile ? (mobileRequired ? 2 : 1) : 0,
        dateBegin: startDate,
        dateFin: finishDate,
        // datePub: noticeStart,
        rewards: rewards,
        // // videos: videos,
        // // challengeDesc: viewRef.current.getAttribute('content_data'),
        // // challengeDesc: quillText,
        // commentAllowed: isComment,
        // charge: admin,
        // chargeShown: adminExposure,
        // chargeContact: `${mobile1}-${mobile2}-${mobile3}`,
        // chargeContactShown: mobileExposure,
        // chargeeMail: email,
        // chargeeMailShown: emailExposure,
      },
      '전문영상편집자'
    );

    console.log(body);
    // var config = {
    //   method: 'post',
    //   url: process.env.REACT_APP_U2_DB_HOST + '/Campaign/challenge',
    //   headers: {
    //     Authorization: 'Bearer ' + localStorage.getItem('token'),
    //     'Content-Type': 'application/json',
    //   },
    //   data: body,
    // };

    // useEffect(() => {
    //   axios.post(config).then(res => {
    //     console.log(res);
    //   });
    // });

    // };
  };
  const handleNewData = data => {
    var newForm = {
      form: data.ownerCat ? '비즈프로필' : '개인',
      cat: data.ownerCat,
      companyName: data.company,
      email: data.email,
      phoneNumber: data.contact,
      snsId: data.socialMediaId,
      snsType: data.socialMediaCode,
      id: data.ownerIdx,
    };

    setProfiles([...profiles, newForm]);
  };

  useEffect(() => {
    var config = {
      method: 'get',
      url:
        process.env.REACT_APP_U2_DB_HOST +
        `/Campaign/challengeowners/${userInfo.memberIdx}`,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    };
    axios(config)
      .then(response => {
        var data = response.data;

        var newForm = data.map(el => {
          return {
            form: el.ownerCat ? '비즈프로필' : '개인',
            cat: el.ownerCat,
            companyName: el.company,
            email: el.email,
            phoneNumber: el.contact,
            snsId: el.socialMediaId,
            snsType: el.socialMediaCode,
            id: el.ownerIdx,
          };
        });
        setOwnerIdx(data[0].ownerIdx);
        // setCompetition(newForm);
        setProfiles(newForm);
      })
      .catch(err => console.log(err));
  }, []);

  //window.localstorage에 state 저장 페이지 새로고침시 state값 유지 목적
  useEffect(() => {
    setOnMeet(JSON.parse(myStorage.getItem('onMeet')));
  }, []);

  useEffect(() => {
    myStorage.setItem('onMeet', onMeet);

    if (onMeet) {
      setMeetCode(0);
    } else {
      setMeetCode(1);
    }
  }, [onMeet]);

  // on offline meet state handle
  const handleOnline = () => {
    setOnMeet(true);
  };

  const handleOffline = () => {
    setOnMeet(false);
  };

  // 첨부 파일 업로드 로직
  // const uploadFile = async (e) => {
  //   const formData = new FormData();
  //   formData.append("file", uploadFile);
  //   formData.append("fileName", upLoadFileName);
  //   try {
  //     const res = await axios.post(
  //       "http://locathisIdxlhost:3000/upload",
  //       formData
  //     );
  //     console.log(res);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // };
  return (
    <RegiConationer className="contents_wrap">
      <div className="videditorregi_section">
        <div className="videditorregi_title_area">
          <div onClick={handleSubmit}>프로젝트 등록</div>
          <div className="videditorregi_title_style"></div>
        </div>
        <section className="videditorregi_title_sub">
          <img src={headerIcon} alt="" />
          <div>전문영상 편집자 등록</div>
        </section>

        <section className="videditorregi_items">
          <section className="ele">
            <div className="menu">* 주최사</div>
            <div className="inputInfo company_profiles">
              <div className="default_profile">
                <div>
                  {profiles.length &&
                    `${profiles[defaultIdx].form} : ${profiles[defaultIdx].companyName}`}
                </div>
                <img
                  src={downArrowIcon}
                  alt=""
                  onClick={() => {
                    setIsActive(true);
                  }}
                />
              </div>
              <DropDown
                setDefaultIdx={setDefaultIdx}
                setOwnerIdx={setOwnerIdx}
                profiles={profiles}
                setIsActive={setIsActive}
                isActive={isActive}
                handleNewData={handleNewData}
                setOwnerIdx={setOwnerIdx}
              />
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 프로젝트명</div>
            <div className="inputInfo videditor_project_name">
              <div>
                <input
                  type="text"
                  onChange={e => {
                    setTitle(e.target.value);
                  }}
                  maxLength={20}
                />
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">참고 영상 URL</div>
            <div className="inputInfo videditor_reference_url">
              <div>
                <input
                  type="text"
                  placeholder="www.youtube.com/u2life"
                  onChange={e => {
                    setrefvidUrl(e.target.value);
                  }}
                />
              </div>
              <div>
                제작하려는 영상과 비슷한 유형이 있다면 URL을 입력하여 공유해
                주세요
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">상세내용</div>
            <div className="inputInfo videditor_details">
              <div>
                <textarea
                  cols="50"
                  rows="8"
                  type="text"
                  placeholder={
                    'U2 서비스 매니저에게 프로젝트에 대해서 좀 더 자세한 내용을 알려주세요'
                  }
                  onChange={e => {
                    setMissionDesc(e.target.value);
                  }}
                />
              </div>
            </div>
          </section>

          <section className="ele">
            <div className="menu">파일 업로드</div>
            <div className="inputInfo videditor_files_uploader">
              <div>프로젝트에 관련한 자료를 업로드 해주세요</div>
              <FileUploader
                file={etcFile}
                setFile={setEtcFile}
                filePath={etcFilePath}
                setFilePath={setEtcFilePath}
              />
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 편집 대상 파일</div>
            <div className="inputInfo videditor_files_uploader">
              <div>편집 대상 파일을 올려주세요</div>
              <EditFileUploader
                file={editTargetFile}
                setFile={setEditTargetFile}
                filePath={editTargetFilePath}
                setFilePath={setEditTargetFilePath}
              />
            </div>
          </section>

          <section className="ele ">
            <div className="menu">* 프로젝트 미팅 여부</div>
            <div className="inputInfo project_meet_type">
              <div
                className={
                  onMeet !== null && onMeet
                    ? 'videditor_onlinemeet onmeet_isactive'
                    : 'videditor_onlinemeet'
                }
                onClick={handleOnline}
              >
                <img
                  src={offlineIcon}
                  width="40px"
                  alt="offlineIcon"
                  className="offlineMeetIcon"
                />
                <div className="onlineMeetText">
                  <div>비대면 미팅</div>
                  <div>화상채팅을 통해 미팅합니다.</div>
                </div>
              </div>
              <div
                className={
                  onMeet !== null && !onMeet
                    ? 'videditor_offlinemeet onmeet_isactive'
                    : 'videditor_offlinemeet'
                }
                onClick={handleOffline}
              >
                <img
                  src={onlineIcon}
                  alt="onlineIcon"
                  className="onlineMeetIcon"
                  width="30px"
                />
                <div className="offlineMeetText">
                  <div>오프라인 미팅 필요</div>
                  <div>과제 수행 중 오프라인 미팅이 필요합니다.</div>
                </div>
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 프로젝트 완료 조건</div>
            <div className="inputInfo videditor_reception_info videditor_reception_condition">
              <div className="videditor_reception_form">
                <div className="videditor_reception_title">
                  접수자 연락처 정보
                </div>
                <table className="videditor_reception_table">
                  <tbody>
                    <tr>
                      <td>
                        {' '}
                        <div className="table_checkarea">
                          <input
                            type="checkbox"
                            onClick={() => {
                              setIsOnline(!isOnline);
                            }}
                            checked={isOnline}
                          />
                        </div>{' '}
                      </td>
                      <td>
                        <div className="table_title">온라인 게시</div>
                      </td>
                      <td>
                        {' '}
                        <section className="reception_options">
                          <div>
                            <input
                              type="checkbox"
                              value="youtube"
                              onClick={() => {
                                setIsYoutube(!isYoutube);
                              }}
                              disabled={!isOnline}
                            />
                            <label>Youtube</label>
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              value="Tiktok"
                              onClick={() => {
                                setIsTiktok(!isTiktok);
                              }}
                              disabled={!isOnline}
                            />
                            <label>Tiktok</label>
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              value="Vimeo"
                              onClick={() => {
                                setIsVimeo(!isVimeo);
                              }}
                              disabled={!isOnline}
                            />
                            <label>Vimeo</label>
                          </div>
                        </section>
                      </td>
                      <td>
                        <section className="reception_options">
                          <div>
                            <input
                              type="radio"
                              name="snsRequired"
                              value="필수"
                              onClick={() => {
                                setIsSnsRequired(true);
                              }}
                              disabled={!isOnline}
                              defaultChecked
                            />
                            <label>필수</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="snsRequired"
                              value="선택"
                              onClick={() => {
                                setIsSnsRequired(false);
                              }}
                              disabled={!isOnline}
                            />
                            <label>선택사항</label>
                          </div>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {' '}
                        <div className="table_checkarea">
                          <input
                            type="checkbox"
                            onClick={() => {
                              setIsVideoProduction(!isVideoProduction);
                            }}
                          />
                        </div>{' '}
                      </td>
                      <td>
                        <div className="table_title">영상 제작 제출</div>
                      </td>
                      <td>
                        {' '}
                        <section className="reception_options">
                          <div>
                            <input
                              type="radio"
                              name="vidReception"
                              value="파일업로드"
                              onClick={() => {
                                setFileOrUrl(true);
                              }}
                              disabled={!isVideoProduction}
                              defaultChecked
                            />
                            <label>파일 업로드</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="vidReception"
                              value="URL공유"
                              onClick={() => {
                                setFileOrUrl(false);
                              }}
                              disabled={!isVideoProduction}
                            />
                            <label>URL 공유</label>
                          </div>
                        </section>
                      </td>
                      <td>
                        <section className="reception_options">
                          <div>
                            <input
                              type="radio"
                              name="vidRequired"
                              value="필수"
                              defaultChecked
                            />
                            <label>필수</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="vidRequired"
                              value="선택"
                            />
                            <label>선택사항</label>
                          </div>
                        </section>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="videditor_reception_form">
                <div className="videditor_reception_title">접수방법</div>
                <table className="videditor_reception_table">
                  <tbody>
                    <tr>
                      <td>
                        {' '}
                        <div className="table_checkarea">
                          <input
                            type="checkbox"
                            value="emailselected"
                            onClick={() => {
                              setIsEmail(!isEmail);
                            }}
                          />
                        </div>{' '}
                      </td>
                      <td>
                        <div className="table_title">이메일</div>
                      </td>
                      <td>
                        {' '}
                        <section className="reception_options">
                          <div>
                            <input
                              type="radio"
                              name="emailRequired"
                              value="필수"
                              onClick={() => {
                                setEmailRequired(true);
                              }}
                              disabled={!isEmail}
                              defaultChecked
                            />
                            <label>Youtube</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="emailRequired"
                              value="선택"
                              onClick={() => {
                                setEmailRequired(false);
                              }}
                              disabled={!isEmail}
                            />
                            <label>Tiktok</label>
                          </div>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {' '}
                        <div className="table_checkarea">
                          <input
                            type="checkbox"
                            value="phoneselected"
                            onClick={() => {
                              setIsMobile(!isMobile);
                            }}
                          />
                        </div>{' '}
                      </td>
                      <td>
                        <div className="table_title">전화번호</div>
                      </td>
                      <td>
                        <section className="reception_options">
                          <div>
                            <input
                              type="radio"
                              name="phoneRquired"
                              value="필수"
                              onClick={() => {
                                setMobileRequired(true);
                              }}
                              defaultChecked
                              disabled={!isMobile}
                            />
                            <label>필수</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="phoneRquired"
                              value="선택"
                              onClick={() => {
                                setMobileRequired(false);
                              }}
                              disabled={!isMobile}
                            />
                            <label>선택사항</label>
                          </div>
                        </section>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="ele">
            <div className="menu">* 프로젝트 공시 게시 기한</div>
            <div className="inputInfo chooseDate">
              <div className="inputStart">
                <ThemeProvider theme={materialTheme}>
                  <DateTimePicker
                    className="dtPicker"
                    label="시작 날짜 선택"
                    inputVariant="outlined"
                    value={startDate}
                    onChange={date => handleStartDate(date)}
                    format="yyyy/MM/dd hh:mm a"
                    disablePast={true}
                    minDate={new Date()}
                    minDateMessage={false}
                    // minDateMessage="현 시각 이후부터 가능합니다"
                    strictCompareDates={true}
                  />
                </ThemeProvider>
                <div className="input_sub_text">
                  공지 시작일을 입력해주십시오
                </div>
              </div>
              <div className="inputFinish">
                <ThemeProvider theme={materialTheme}>
                  <DateTimePicker
                    className="dtPicker"
                    label="종료 날짜 선택"
                    inputVariant="outlined"
                    value={finishDate}
                    onChange={date => setFinishDate(date)}
                    format="yyyy/MM/dd hh:mm a"
                    disablePast={true}
                    minDate={startDate}
                    minDateMessage={false}
                    strictCompareDates={true}
                  />
                </ThemeProvider>
                <div className="input_sub_text">
                  공지 종료일을 입력해주십시오
                </div>
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 보상일</div>
            <div className="inputInfo videditor_rewarddate">
              <div className="videditor_reward_date_select">
                <div className="fixed_date">
                  <input
                    type="radio"
                    name="videditorRewardDate"
                    onClick={() => {
                      SetConfirmRewardsDate(true);
                    }}
                    defaultChecked
                  />
                  <div>확정일</div>
                </div>
                <div className="discussed_date">
                  <input
                    type="radio"
                    name="videditorRewardDate"
                    onClick={() => {
                      SetConfirmRewardsDate(false);
                    }}
                  />
                  <div>추후 협의</div>
                </div>
              </div>
              <div className="videditor_rewarddate_wrap">
                {confirmRewardsDate ? (
                  <ThemeProvider theme={materialTheme}>
                    <DateTimePicker
                      className="dtPicker"
                      label="시작 날짜 선택"
                      inputVariant="outlined"
                      value={rewardDate}
                      onChange={date => setRewardDate(date)}
                      format="yyyy/MM/dd hh:mm a"
                      disablePast={true}
                      minDate={new Date()}
                      minDateMessage={false}
                      // minDateMessage="현 시각 이후부터 가능합니다"
                      strictCompareDates={true}
                    />
                  </ThemeProvider>
                ) : null}
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 보상 조건</div>
            <div className="inputInfo videditor_rewardtype">
              <div className="videditor_reception_form">
                <table className="videditor_reception_table">
                  <tbody>
                    <tr>
                      <td>
                        {' '}
                        <div className="table_checkarea">
                          <input
                            type="checkbox"
                            name="rewardcash"
                            value="rewardcash"
                            onClick={() => {
                              setIsCurrencyReward(!isCurrencyReward);
                            }}
                          />
                        </div>{' '}
                      </td>
                      <td>
                        <div className="table_title">현금 보상</div>
                      </td>
                      <td>
                        {' '}
                        <section className="reception_options">
                          <div>
                            <input
                              type="text"
                              name="rewardcash"
                              placeholder="무료일 경우 0원 입력"
                              onChange={e => {
                                setRewardCurrency(e.target.value);
                              }}
                              disabled={!isCurrencyReward}
                            />

                            <select
                              name="currencyselect"
                              disabled={!isCurrencyReward}
                            >
                              <option value="krw">KRW</option>
                            </select>
                          </div>
                          <div>
                            프로젝트 정상 완료시 현금 보상하실 경우 지급할
                            금액을 입력해 주십시오
                          </div>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {' '}
                        <div className="table_checkarea">
                          <input
                            type="checkbox"
                            name="rewardproduct"
                            value="rewardproduct"
                            onClick={() => {
                              setIsDirectReward(!isDirectReward);
                            }}
                          />
                        </div>{' '}
                      </td>
                      <td>
                        <div className="table_title">현물 보상</div>
                      </td>
                      <td>
                        <section className="reception_options">
                          <div>
                            <input
                              type="text"
                              name="rewardproduct"
                              onChange={e => {
                                setRewardDirect(e.target.value);
                              }}
                              disabled={!isDirectReward}
                            />
                          </div>
                          <div>
                            상품, 사은품, 상품권 등 지급할 현물을 입력해
                            주십시오
                          </div>
                        </section>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">공모 공지글</div>
            <div className="inputInfo notice_editor_form">
              <QuillTextEditor className="notice_editor" />
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 댓글 기능</div>
            <section className="inputInfo replyfunc_form">
              <div className="replyfunc_items">
                <div className="replyfunc_item_wrap">
                  <input type="radio" name="replyrequired" value="댓글사용" />
                  <div>댓글 사용</div>
                </div>
              </div>
              <div className="replyfunc_items">
                <div className="replyfunc_item_wrap">
                  {' '}
                  <input
                    type="radio"
                    name="replyrequired"
                    value="댓글사용안함"
                  />
                  <div>댓글 사용 안함</div>
                </div>
              </div>
            </section>
          </section>
          <section className="ele">
            <div className="menu">* 담당자</div>
            <section className="inputInfo manager_form">
              <div className="manager_items">
                <input type="text" />
              </div>
              <div className="manager_items manager_noexposure">
                <section>
                  <input type="checkbox" name="noexposure" />
                  <div className="manager_noexposure_text">비노출</div>
                </section>
              </div>
            </section>
          </section>
          <section className="ele">
            <div className="menu">* 연락처</div>
            <section className="inputInfo phonenumber_form">
              <div className="phonenumber_items">
                <select name="areacode" id="areacode">
                  <option value="goldfish">010</option>
                  <option value="02">02</option>
                  <option value="">031</option>
                  <option value="cat">032</option>
                  <option value="hamster">033</option>
                  <option value="parrot">041</option>
                  <option value="spider">042</option>
                  <option value="goldfish">043</option>
                  <option value="">044</option>
                  <option value="cat">051</option>
                  <option value="hamster">052</option>
                  <option value="parrot">053</option>
                  <option value="spider">054</option>
                  <option value="goldfish">055</option>
                  <option value="">061</option>
                  <option value="cat">062</option>
                  <option value="hamster">063</option>
                  <option value="parrot">064</option>
                </select>
              </div>
              -
              <div className="phonenumber_items">
                <input
                  type="tel"
                  name="phonenumber"
                  placeholder="0000"
                  maxlength="4"
                />
              </div>
              -
              <div className="phonenumber_items">
                <input
                  type="tel"
                  name="phonenumber"
                  placeholder="0000"
                  maxlength="4"
                />
              </div>
              <div className="manager_items phonenumber_noexposure">
                <section>
                  <input type="checkbox" name="noexposure" />
                  <div className="manager_noexposure_text">비노출</div>
                </section>
              </div>
            </section>
          </section>
          <section className="ele">
            <div className="menu">* 이메일</div>
            <section className="inputInfo email_form">
              <div className="email_items">
                <input type="text" />
              </div>
              <div className="manager_items email_noexposure">
                <section>
                  <input type="checkbox" name="email" />
                  <div className="email_noexposure_text">비노출</div>
                </section>
              </div>
            </section>
          </section>
          <div className="videditorregi_bottom_style"></div>
        </section>
        <section className="videditorregi_btn_area">
          {' '}
          <button
            className="videditorregi_btn"
            onClick={() => {
              history.push('/prjregi');
            }}
          >{`< 이전`}</button>
          <button
            className="videditorregi_btn videditorregi_btn_next"
            onClick={() => {
              history.push('/prjregi');
            }}
          >{`등록하기`}</button>
        </section>
      </div>
    </RegiConationer>
  );
};

export default VidEditorRegi;
