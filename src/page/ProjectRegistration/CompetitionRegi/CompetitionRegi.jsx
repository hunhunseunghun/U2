import React, { useState, useEffect } from 'react';
import Uploader from '../../../Component/Uploader/Uploader.jsx';
import PosterUploader from './PosterUploader/PosterUploader.jsx';
import FileUploader from './FileUploader/FileUploader.jsx';
import { RegiContainer } from './CompetitionRegiStyled.jsx';
import DropDown from './DropDown/DropDown.jsx';
import SetTaskCondition from '../SetTaskCondition/SetTaskCondition.jsx';
import { TiDeleteOutline } from 'react-icons/ti'; // 파일삭제 버튼 icon

const CompetitionRegi = () => {
  // posterfile upload handle------------------------------
  const [posterFile, setPosterFile] = useState(null); //포스터 파일, fileList 객체 -> 배열로 변환 후 -> posterfile에 할당
  const [posterFilePath, setPosterFilePath] = useState('Choose file to upload'); //포스터 파일 업로드 파일패스 , placholder 값
  const [etcFile, setEtcFile] = useState(null);
  const [etcFilePath, setEtcFilePath] = useState('Choose file to upload');

  //-------------------------------------------------

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
    <RegiContainer className="contents_wrap">
      <div className="competitionregi_section">
        <section className="titleArea">
          <div>과제 등록</div>
        </section>

        <section className="competitionregi_items">
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
                <input type="text" className="inputPrjName" />
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">주관사</div>
            <div className="inputInfo">
              <div className="organizer">
                <input type="text" className="organizer" />
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">후원/협찬사</div>
            <div className="inputInfo">
              <div className="sponsor">
                <input type="text" className="sponsor" />
              </div>
            </div>
          </section>
          <section className="ele">
            <div className="menu">홈페이지 URL</div>
            <div className="inputInfo">
              <div className="webpageURL">
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
        </section>
      </div>

      {/* <SetTaskCondition /> */}
    </RegiContainer>
  );
};

export default CompetitionRegi;
