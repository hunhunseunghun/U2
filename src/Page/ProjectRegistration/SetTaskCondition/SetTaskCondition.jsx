import Reac, { useState } from "react";
import { TcContainer } from "./SetTaskConditionStyled.jsx";
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";

const SetTaskCondition = ({ history }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  console.log(startDate);
  console.log(finishDate);

  return (
    <TcContainer>
      <section className="titleArea">
        <div>과제 완료 조건</div>
      </section>
      <div className="setTcWrap">
        {" "}
        <section className="ele">
          <div className="menu">과제 완료 조건</div>
          <div className="tc">
            <table className="snsTc">
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <div className="checkArea">
                      <input type="checkbox" />
                    </div>{" "}
                  </td>
                  <td>
                    <div>SNS 게시하기</div>
                  </td>
                  <td>
                    {" "}
                    <section>
                      <div>
                        <input type="radio" />
                        <label>필수</label>
                      </div>
                      <div>
                        <input type="radio" />
                        <label>선택사항</label>
                      </div>
                    </section>
                    <section>
                      <div>
                        <input type="checkbox" />
                        <label>Youtube</label>
                      </div>
                      <div>
                        <input type="checkbox" />
                        <label>Tiktok</label>
                      </div>
                      <div>
                        <input type="checkbox" />
                        <label>Vimeo</label>
                      </div>
                    </section>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <div className="checkArea">
                      <input type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div>영상 제작 제출</div>
                  </td>
                  <td>
                    {" "}
                    <section>
                      <div>
                        <input type="radio" />
                        <label>필수</label>
                      </div>
                      <div>
                        <input type="radio" />
                        <label>선택사항</label>
                      </div>
                    </section>
                    <section>
                      <div>
                        <input type="radio" />
                        <label>파일 업로드</label>
                      </div>
                      <div>
                        <input type="radio" />
                        <label>URL 공유</label>
                      </div>
                    </section>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <div className="checkArea">
                      <input type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div>이메일(연락처)</div>
                  </td>
                  <td>
                    <input type="text" className="inputEmail" />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <div className="checkArea">
                      <input type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div>전화번호(연락처),집주소</div>
                  </td>
                  <td>
                    <input type="text" className="inputPhoneNum" />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <div className="checkArea">
                      <input type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div>화면캡쳐</div>
                  </td>
                  <td>
                    <input
                      type="file"
                      id="captureImg"
                      multiple
                      accept="image/*"
                      className="inputCapture"
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="ele">
          <div className="menu">프로젝트 게시일</div>
          <div className="inputInfo">
            <div className="inputStart">
              <DateTimePicker
                className="dtPicker"
                label="시작 날짜 선택"
                inputVariant="outlined"
                value={startDate}
                onChange={(date) => setStartDate(date)}
                format="yyyy/MM/dd hh:mm a"
                disablePast={true}
                minDate={new Date()}
                minDateMessage="현 시각 이후부터 가능합니다"
                strictCompareDates={true}
              />
              <div>프로젝트 게시 시작일을 입력해주십시오</div>
            </div>
            <div className="inputFinish">
              <DateTimePicker
                className="dtPicker"
                label="시작 날짜 선택"
                inputVariant="outlined"
                value={finishDate}
                onChange={(date) => setFinishDate(date)}
                format="yyyy/MM/dd hh:mm a"
                disablePast={true}
                minDate={startDate}
                minDateMessage="현 시각 이후부터 가능합니다"
                strictCompareDates={true}
              />
              <div>프로젝트 게시 종료일을 입력해주십시오</div>
            </div>
          </div>
        </section>
        <section className="ele">
          <div className="menu">프로젝트 보상 조건</div>
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
      </div>
    </TcContainer>
  );
};

export default SetTaskCondition;
