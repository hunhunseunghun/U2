import React, { useState, useEffect } from 'react';
import DropDown from './DropDown/DropDown.jsx';
import RecruitmentAreasModal from './RecruitmentAreasModal/RecruitmentAreasModal.jsx';
import QuillTextEditor from './QuillTextEditor/QuillTextEditor.jsx';
import { RegiConationer } from './IRRegiStyled.jsx';
import { DateTimePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
const IRRegi = () => {
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
  //handle recuritmentareas modal ----------------------------
  const [recruitmentModalOpen, setRecruitmentModalOpen] = useState(false);

  //handle date ----------------------------------------------
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [onMeet, setOnMeet] = useState(null); //온라인 오프라인 미팅 state 값
  //-----------------------------------------------------
  const myStorage = window.localStorage;

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
      <div className="irregi_section">
        <section className="titleArea">
          <div>강사 채용</div>
        </section>
        <section className="irregi_items">
          <section className="ele">
            <div className="menu">* 의뢰주체</div>
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
            <div className="menu">* 강사 채용 제목</div>
            <div className="inputInfo irregi_name">
              <div>
                <input type="text" />
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 모집분야</div>
            <div className="inputInfo irregi_name">
              <div>
                <input type="text" />
              </div>
              <button
                onClick={() => {
                  setRecruitmentModalOpen(true);
                }}
              >
                추가
              </button>
              <RecruitmentAreasModal
                modalOpen={recruitmentModalOpen}
                handleCloseModal={setRecruitmentModalOpen}
              />
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 강의형태</div>
            <div className="inputInfo irregi_irtype">
              <div>
                <input type="radio" name="irtype" value="온라인비대면강의" />
                <label>온라인 비대면 강의</label>
              </div>
              <div>
                <input type="radio" name="irtype" value="오프라인강의" />
                <label>오프라인 강의</label>
              </div>
              <div>
                <input type="radio" name="irtype" value="추후협의" />
                <label>추후 협의</label>
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 접수기간</div>
            <div className="inputInfo chooseDate">
              <div className="choosedate_ircodition">
                <input type="checkbox" name="ircodition" />
                <div>채용 시 마감</div>
              </div>
              <div className="inputStart">
                <ThemeProvider theme={materialTheme}>
                  <DateTimePicker
                    className="dtPicker"
                    label="접수시작"
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
                    label="접수종료"
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
            <div className="menu">* 강의형태</div>
            <div className="inputInfo irregi_submitdocs">
              <div>
                <input type="checkbox" name="submitdocs" value="국문이력서" />
                <label>국문 이력서</label>
              </div>
              <div>
                <input type="checkbox" name="submitdocs" value="포트폴리오" />
                <label>포트폴리오</label>
              </div>
              <div>
                <input type="checkbox" name="submitdocs" value="영문이력서" />
                <label>영문 이력서</label>
              </div>
            </div>
          </section>

          <section className="ele">
            <div className="menu">* 보상</div>
            <div className="inputInfo ir_rewardtype">
              <div className="ir_reception_form">
                <table className="ir_reception_table">
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
        </section>
      </div>
    </RegiConationer>
  );
};

export default IRRegi;
