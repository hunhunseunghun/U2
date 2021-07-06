import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

const VidEditorRegi = () => {
  let history = useHistory();
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
  const [editTargetFile, setEditTargetFile] = useState(null);
  const [editTargetFilePath, setEditTargetFilePath] = useState(
    'Choose file to upload'
  );
  //-----------------------------------------------------

  const [onMeet, setOnMeet] = useState(null); //온라인 오프라인 미팅 state 값

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
          <div>프로젝트 등록</div>
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
                <div>{`${profiles[defaultIdx].form} : ${profiles[defaultIdx].companyName}`}</div>
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
                profiles={profiles}
                setIsActive={setIsActive}
                isActive={isActive}
              />
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 프로젝트명</div>
            <div className="inputInfo videditor_project_name">
              <div>
                <input type="text" />
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">참고 영상 URL</div>
            <div className="inputInfo videditor_reference_url">
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
            <div className="inputInfo videditor_details">
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
            <div className="menu">* 접수방법</div>
            <div className="inputInfo videditor_reception_info">
              <div className="videditor_reception_form">
                <table className="videditor_reception_table">
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
            <div className="inputInfo videditor_reception_info">
              <div className="videditor_reception_form">
                <table className="videditor_reception_table">
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
            <div className="inputInfo videditor_rewarddate">
              <div className="videditor_reward_date_select">
                <div className="fixed_date">
                  <input type="radio" name="videditorRewardDate" />
                  <div>확정일</div>
                </div>
                <div className="discussed_date">
                  <input type="radio" name="videditorRewardDate" />
                  <div>추후 협의</div>
                </div>
              </div>
              <div className="videditor_rewarddate_wrap">
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
                            />

                            <select name="currencyselect">
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
                          />
                        </div>{' '}
                      </td>
                      <td>
                        <div className="table_title">현물 보상</div>
                      </td>
                      <td>
                        <section className="reception_options">
                          <div>
                            <input type="text" name="rewardproduct" />
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
          >{`취 소`}</button>
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
