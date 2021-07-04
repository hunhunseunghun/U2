import React, { useState, useEffect, useRef } from 'react';
import DropDown from './DropDown/DropDown.jsx';
import FileUploader from './FileUploader/FileUploader.jsx';
import { RegiConationer } from './VidCreatorRegiStyled.jsx';
import Registration from '../Registration/Registration.jsx';
import chatIcon from '../../../Img/chat.svg';
import offlineChatIcon from '../../../Img/offlinechat.svg';
import { DateTimePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const VidCreatorRegi = () => {
  // handle modal state---------------------------------------
  const [isActive, setIsActive] = useState(false);
  const [defaultIdx, setDefaultIdx] = useState(0);
  const [profiles, setProfiles] = useState([
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
  // file uploade ---------------------------------------
  const [etcFile, setEtcFile] = useState(null);
  const [etcFilePath, setEtcFilePath] = useState('Choose file to upload');
  //-----------------------------------------------------

  const selectDom = useRef(0);
  const [onMeet, setOnMeet] = useState(null); //온라인 오프라인 미팅 state 값
  const [upLoadFile, setUpLoadFile] = useState(null); //업로드 파일 객체
  const [uploadFilePath, setUploadFilePath] = useState('Choose file to upload'); //업로드 파일패스 , placholder 값
  const [editFilePath, setEditFilePath] = useState('Choose file to upload'); //편집 대상 파일 패스, placeholder 값
  const [editFile, setEditFile] = useState(null);
  const myStorage = window.localStorage;
  //handle date ----------------------------------------------
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [rewardDate, setRewardDate] = useState(new Date());

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

  //window.localstorage에 state 저장 페이지 새로고침시 state값 유지 목적
  useEffect(() => {
    setOnMeet(JSON.parse(myStorage.getItem('onMeet')));
  }, []);

  useEffect(() => {
    myStorage.setItem('onMeet', onMeet);
    console.log('useEffect excuted');
  }, [onMeet, editFile]);

  const handleTest = () => {
    console.log(myStorage.getItem('onMeet'));
    console.log(onMeet);
    console.log(myStorage);
  };

  // on offline meet state handle
  const handleOnline = () => {
    setOnMeet(true);
  };

  const handleOffline = () => {
    setOnMeet(false);
  };

  // const [upLoadFileArr, setUploadFileArr] = useState([]); //업로드 파일 배열
  const fileChangeHandler = e => {
    let fileNames = [];
    for (let key in e.target.files) {
      fileNames[key] = e.target.files[key];
    }
    // upLoadFileArr.push(e.target.files[0]);
    setUpLoadFile(e.target.files);
    console.log('fileList', e.target.files);
    console.log(upLoadFile);

    //input placeholder handler
    if (document.getElementById('fileUpLoader').value) {
      setUploadFilePath(document.getElementById('fileUpLoader').value);
    } else {
      setUploadFilePath('Choose file to upload');
    }
    // handleFileNames();
  };

  const editFileChangeHandler = e => {
    setEditFile(e.target.files);
    console.log(editFile);
    //input placeholder handler
    if (document.getElementById('editFileUpLoader').value) {
      setEditFilePath(document.getElementById('editFileUpLoader').value);
    } else {
      setEditFilePath('Choose file to upload');
    }
    // handleFileNames();
  };

  // const handleDeleteFile = (thisIdx) => {
  //   upLoadFileArr.splice(thisIdx, 1);
  //   selectDom.current.classList.value = "noDisplay";
  //   console.log("currDom", selectDom.current);
  //   console.log(selectDom);
  //   console.log("delete excute : ", thisIdx);
  //   console.log(upLoadFileArr);
  // };

  // const handleFileNames = () => {
  //   console.log("excute handlefileNames");
  //   if (upLoadFileArr.length !== 0) {
  //     return upLoadFileArr.map((ele, idx) => {
  //       console.log(idx);
  //       let thisIdx = idx;
  //       return (
  //         <div
  //           className={`inputFileNames${thisIdx} file${thisIdx}`}
  //           ref={selectDom}
  //         >
  //           {ele.name}
  //           <button onClick={() => handleDeleteFile(thisIdx)} key={thisIdx}>
  //             x
  //           </button>
  //         </div>
  //       );
  //     });
  //   } else {
  //     return null;
  //   }
  // };

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
      <div className="vidcreatorregi_section">
        <section className="titleArea">
          <div>프로젝트 등록</div>
        </section>
        <section className="vidcreatorregi_items">
          <section className="ele">
            <div className="menu">* 주최사</div>
            <div className="inputInfo profiles_name">
              <div
                className="default_profiles"
                onClick={() => {
                  setIsActive(true);
                }}
              >
                {`${profiles[defaultIdx].form} : ${profiles[defaultIdx].companyName}`}
              </div>
              <DropDown
                setDefaultIdx={setDefaultIdx}
                profiles={profiles}
                setIsActive={setIsActive}
                isActive={isActive}
              />
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 프로젝트명</div>
            <div className="inputInfo vidcreator_project_name">
              <div>
                <input type="text" />
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">참고 영상 URL</div>
            <div className="inputInfo vidcreator_reference_url">
              <div>
                <input type="text" placeholder="www.youtube.com/u2life" />
              </div>
              <div>
                제작하려는 영상과 비슷한 유형이 있다면 URL을 입력하여 공유해
                주세요
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">상세내용</div>
            <div className="inputInfo vidcreator_details">
              <div>
                <textarea
                  cols="50"
                  rows="8"
                  type="text"
                  placeholder={
                    'U2 서비스 매니저에게 프로젝트에 대해서 좀 더 자세한 내용을 알려주세요'
                  }
                />
              </div>
            </div>
          </section>

          <section className="ele">
            <div className="menu">파일</div>
            <div className="inputInfo vidcreator_files_uploader">
              <FileUploader
                file={etcFile}
                setFile={setEtcFile}
                filePath={etcFilePath}
                setFilePath={setEtcFilePath}
              />
            </div>
          </section>
          <section className="ele ">
            <div className="menu">* 프로젝트 미팅 여부</div>
            <div
              className={
                onMeet !== null && onMeet
                  ? 'vidcreator_onlinemeet onmeet_isactive'
                  : 'vidcreator_onlinemeet'
              }
              onClick={handleOnline}
            >
              <img
                src={chatIcon}
                width="40px"
                alt="onlineChat"
                className="onlineMeetIcon"
              />
              <div className="onlineMeetText">
                <div>비대면 미팅</div>
                <div>화상채팅을 통해 미팅합니다.</div>
              </div>
            </div>
            <div
              className={
                onMeet !== null && !onMeet
                  ? 'vidcreaotr_offlinemeet onmeet_isactive'
                  : 'vidcreaotr_offlinemeet'
              }
              onClick={handleOffline}
            >
              <img
                src={offlineChatIcon}
                alt={offlineChatIcon}
                className="offlineIcon"
                width="30px"
              />
              <div className="offlineMeetText">
                <div>오프라인 미팅 필요</div>
                <div>과제 수행 중 오프라인 미팅이 필요합니다.</div>
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 접수방법</div>
            <div className="inputInfo vidcreator_reception_info">
              <div className="vidcreator_reception_form">
                <table className="vidcreator_reception_table">
                  <tbody>
                    <tr>
                      <td>
                        {' '}
                        <div className="table_checkarea">
                          <input type="checkbox" />
                        </div>{' '}
                      </td>
                      <td>
                        <div className="table_title">온라인 게시</div>
                      </td>
                      <td>
                        {' '}
                        <section className="reception_options">
                          <div>
                            <input type="checkbox" value="youtube" />
                            <label>Youtube</label>
                          </div>
                          <div>
                            <input type="checkbox" value="Tiktok" />
                            <label>Tiktok</label>
                          </div>
                          <div>
                            <input type="checkbox" value="Vimeo" />
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
                              defaultChecked
                            />
                            <label>필수</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="snsRequired"
                              value="선택"
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
                          <input type="checkbox" />
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
                              defaultChecked
                            />
                            <label>파일 업로드</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="vidReception"
                              value="URL공유"
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
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 제출자 개인정보 수집</div>
            <div className="inputInfo vidcreator_reception_info">
              <div className="vidcreator_reception_form">
                <table className="vidcreator_reception_table">
                  <tbody>
                    <tr>
                      <td>
                        {' '}
                        <div className="table_checkarea">
                          <input type="checkbox" value="emailselected" />
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
                            />
                            <label>Youtube</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="emailRequired"
                              value="선택"
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
                          <input type="checkbox" value="phoneselected" />
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
                              defaultChecked
                            />
                            <label>필수</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="phoneRquired"
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
            <div className="inputInfo vidcreator_rewarddate">
              <div className="vidcreator_reward_date_select">
                <div className="fixed_date">
                  <input type="radio" name="vidcreatorRewardDate" />
                  <div>확정일</div>
                </div>
                <div className="discussed_date">
                  <input type="radio" name="vidcreatorRewardDate" />
                  <div>추후 협의</div>
                </div>
              </div>
              <div className="vidcreator_rewarddate_wrap">
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
              </div>
            </div>
          </section>
        </section>
        <section className="contentArea prjRegi">
          <div className="prjDesc">
            해당 영상 제작/편집 프리랜서들에게 단 몇분만에 연락을 취해 보실 수
            있습니다. 프로필 정보나 평가 등급, 포트폴리오 자료, 등을 확인해 보신
            다음에, 채팅 서비스를 이용하여 얘기도 나눠 보십시오. 작업 결과를
            받으면, 그 결과를 확인하여 100% 만족하실 때에만 그 보상을 지불해
            주십시오.
          </div>

          <section className="ele request">
            <div className="menu" onClick={handleTest}>
              의뢰 주체
            </div>
            <div className="inputInfo">
              <div className="radioWrap">
                <input type="radio" name="chk_info" value="indivisual" />
                <div>개인 : 홍길동 님</div>
                <input type="radio" name="chk_info" value="business" />
                <div>비즈니스</div>
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 프로젝트 명</div>
            <div className="inputInfo">
              <div className="inputPrjName">
                <input
                  type="text"
                  className="prjName"
                  placeholder="프로젝트명을 입력해 주십시오"
                />
              </div>
              <div>프로젝트명을 입력해 주십시오</div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 프로젝트 설명</div>
            <div className="inputInfo">
              <div className="inputPrjDesc">
                <input
                  type="text"
                  className="prjName"
                  placeholder="U2 서비스 매니저에게 프로젝트에 대하여 좀 더 자세한 내용을 알려주세요"
                />
              </div>
              <div>프로젝트 설명을 입력해 주십시오</div>
            </div>
          </section>
          <section className="ele">
            <div className="menu"> 파일 업로드</div>
            <div className="inputPrjUpload">
              <div className="uploadTextArea">
                프로젝트 관련한 자료를 업로드 해주세요
              </div>
              <input
                type="text"
                className="fileRoute"
                placeholder={uploadFilePath}
                readOnly
              />
              <input
                type="file"
                id="fileUpLoader"
                onChange={fileChangeHandler}
                multiple
                className="prjUpload"
              />
              {/* <div className="uploadFileArea">
            {upLoadFileArr !== 0 ? handleFileNames() : null}
          </div> */}
            </div>
          </section>
          <section className="ele ">
            <div className="menu">* 프로젝트 미팅 여부</div>
            <div
              className={
                onMeet !== null && onMeet
                  ? 'onlineMeet onmeet_isactive'
                  : 'onlineMeet'
              }
              onClick={handleOnline}
            >
              <img
                src={chatIcon}
                width="50px"
                alt="onlineChat"
                className="onlineMeetIcon"
              />
              <div className="onlineMeetText">
                <div>비대면 미팅</div>
                <div>화상채팅을 통해 미팅합니다.</div>
              </div>
            </div>
            <div
              className={
                onMeet !== null && !onMeet
                  ? 'offlineMeet onmeet_isactive'
                  : 'offlineMeet'
              }
              onClick={handleOffline}
            >
              <img
                src={offlineChatIcon}
                alt={offlineChatIcon}
                className="offlineIcon"
                width="40px"
              />
              <div className="offlineMeetText">
                <div>오프라인 미팅 필요</div>
                <div>과제 수행 중 오프라인 미팅이 필요합니다.</div>
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">편집 대상 파일</div>
            <div className="inputPrjUpload">
              <div>프로젝트 관련한 자료를 업로드 해주세요</div>
              <div className="uploadTextArea">
                <input type="checkbox" />
                추후 별도 제출 하겠습니다.{' '}
              </div>
              <input
                type="text"
                className="fileRoute"
                placeholder={editFilePath}
                readOnly
              />
              <input
                type="file"
                id="editFileUpLoader"
                onChange={editFileChangeHandler}
                multiple
                className="editFileUpLoader"
              />
            </div>
          </section>
        </section>
      </div>
    </RegiConationer>
  );
};

export default VidCreatorRegi;
