import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PosterUploader from './PosterUploader/PosterUploader.jsx';
import FileUploader from './FileUploader/FileUploader.jsx';
import { RegiContainer } from './CompetitionRegiStyled.jsx';
import DropDown from './DropDown/DropDown.jsx';
import headerIcon from '../../../Img/Icons/headerIcon.png';
import downArrowIcon from '../../../Img/Icons/sortarrowdown.png';
import QuillTextEditor from './QuillTextEditor/QuillTextEditor.jsx';
import { TiDeleteOutline } from 'react-icons/ti'; // 파일삭제 버튼 icon
import { DateTimePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const CompetitionRegi = () => {
  let history = useHistory();

  // posterfile upload handle---------------------------------
  const [posterFile, setPosterFile] = useState(null); //포스터 파일, fileList 객체 -> 배열로 변환 후 -> posterfile에 할당
  const [posterFilePath, setPosterFilePath] = useState('Choose file to upload'); //포스터 파일 업로드 파일패스 , placholder 값
  const [etcFile, setEtcFile] = useState(null);
  const [etcFilePath, setEtcFilePath] = useState('Choose file to upload');
  //handle date ----------------------------------------------
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [noticeStart, setNoticeStart] = useState(new Date());
  const [currency, setCurrency] = useState('KRW');
  //handle editor ---------------------------------------------

  // handle modal state---------------------------------------
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

  const handleCurrency = e => {
    setCurrency(e.target.value);
  };

  return (
    <RegiContainer className="competitionregi_contents_wrap">
      <div className="competitionregi_section">
        <div className="competitionregi_title_area">
          <div>프로젝트 등록</div>
          <div className="competitionregi_title_style"></div>
        </div>
        <section className="competitionregi_title_sub">
          <img src={headerIcon} alt="" />
          <div>공모전 등록</div>
        </section>

        <section className="competitionregi_items">
          <section className="ele">
            <div className="menu">* 주최사</div>
            <div className="inputInfo competitionName">
              <div className="defaultCompetition">
                <div>{`${competition[defaultIdx].form} : ${competition[defaultIdx].companyName}`}</div>
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
                competition={competition}
                setIsActive={setIsActive}
                isActive={isActive}
              />
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 공모전명</div>
            <div className="inputInfo">
              <div className="competition_name">
                <input
                  type="text"
                  className="competition_name_input"
                  style={{ width: '280px' }}
                />
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">주관사</div>
            <div className="inputInfo">
              <div className="competition_organizer">
                <input type="text" className="organizer" />
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">후원/협찬사</div>
            <div className="inputInfo">
              <div className="competition_sponsor">
                <input type="text" className="sponsor" />
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">홈페이지 URL</div>
            <div className="inputInfo">
              <div className="competition_webpageURL">
                <input type="text" className="webpageURL" />
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">포스터</div>
            <div className="inputInfo infoPoster">
              <div>공모전의 포스터가 있다면 업로드 해주세요</div>
              <PosterUploader
                file={posterFile}
                setFile={setPosterFile}
                filePath={posterFilePath}
                setFilePath={setPosterFilePath}
              />
            </div>
          </section>
          <section className="ele">
            <div className="menu">파일</div>
            <div className="inputInfo infoFiles">
              <div>공모전에 관련한 자료가 있다면 업로드 해주세요</div>

              <FileUploader
                file={etcFile}
                setFile={setEtcFile}
                filePath={etcFilePath}
                setFilePath={setEtcFilePath}
              />
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 접수방법</div>
            <div className="inputInfo reception_info">
              <div className="reception_form">
                <table className="reception_table">
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
            <div className="inputInfo reception_info">
              <div className="reception_form">
                <table className="reception_table">
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
            <div className="menu">* 접수기간</div>
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
                  프로젝트 게시 시작일을 입력해주십시오
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
                  프로젝트 게시 종료일을 입력해주십시오
                </div>
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">* 공지시작일</div>
            <div className="inputInfo noticeDate">
              <div className="noticeStart">
                <ThemeProvider theme={materialTheme}>
                  <DateTimePicker
                    className="dtPicker"
                    label="시작 날짜 선택"
                    inputVariant="outlined"
                    value={noticeStart}
                    onChange={date => setNoticeStart(date)}
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
            <div className="menu">* 시상종류</div>
            <div className="inputInfo reward_type_from">
              <div className="reward_type_section">
                <div className="reward_type">
                  <div className="reward_type_title">현상공모:</div>

                  <div className="reward_type_items">
                    <div className="reward_type_item_wrap">
                      <input type="checkbox" value="해외탐방" />
                      <div>해외탐방</div>
                    </div>
                  </div>
                  <div className="reward_type_items">
                    <div className="reward_type_item_wrap">
                      <input type="checkbox" value="국내캠프" />
                      <div>국내캠프</div>
                    </div>
                  </div>
                  <div className="reward_type_items">
                    <div className="reward_type_item_wrap">
                      <input type="checkbox" value="입사시 가산점" />
                      <div>입사시 가산점</div>
                    </div>
                  </div>
                  <div className="reward_type_items">
                    <div className="reward_type_item_wrap">
                      <input type="checkbox" value="인턴채용" />
                      <div>인턴채용</div>
                    </div>
                  </div>
                  <div className="reward_type_items">
                    <div className="reward_type_item_wrap">
                      <input type="checkbox" value="정직원채용" />
                      <div>정직원채용</div>
                    </div>
                  </div>
                  <div className="reward_type_items">
                    <div className="reward_type_item_wrap">
                      <input type="checkbox" value="경품" />
                      <div>경품</div>
                    </div>
                  </div>
                  <div className="reward_type_items">
                    <div className="reward_type_item_wrap">
                      <input type="checkbox" value="직접입력" />
                      <div>직접입력 :</div>
                      <input type="text" />
                    </div>
                  </div>
                </div>
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
          <div className="competition_bottom_style"></div>
        </section>
        <section className="compeitiionregi_btn_area">
          {' '}
          <button
            className="compeitiionregi_btn"
            onClick={() => {
              history.push('/prjregi');
            }}
          >{`취 소`}</button>
          <button
            className="compeitiionregi_btn compeitiionregi_btn_next"
            onClick={() => {
              history.push('/prjregi');
            }}
          >{`등록하기`}</button>
        </section>
      </div>

      {/* <SetTaskCondition /> */}
    </RegiContainer>
  );
};

export default CompetitionRegi;
